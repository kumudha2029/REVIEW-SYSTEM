// src/components/ui/ReviewCard.jsx

import styled from "styled-components";
import Tag from "./Tag";
import Button from "./Button";
import { useState, useEffect } from "react";

const Card = styled.div`
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  padding: 12px;
  border-radius: ${({ theme }) => theme.radius};
  margin-bottom: 12px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Name = styled.h4``;

const Platform = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(59, 130, 246, 0.15);
  color: #93c5fd;
`;

const Text = styled.p`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ReplyBox = styled.div`
  margin-top: 10px;
`;

const Input = styled.textarea`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: none;
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

const SavedReply = styled.p`
  margin-top: 8px;
  color: #22c55e;
  font-size: 13px;
`;

const ReviewCard = ({ review }) => {
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState("");
  const [savedReply, setSavedReply] = useState("");

  // Load saved reply
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("replies")) || {};
    if (data[review.id]) {
      setSavedReply(data[review.id]);
    }
  }, [review.id]);

  // Save reply
  const handleSend = () => {
    const data = JSON.parse(localStorage.getItem("replies")) || {};
    data[review.id] = reply;

    localStorage.setItem("replies", JSON.stringify(data));

    setSavedReply(reply);
    setReply("");
    setShowReply(false);
  };

  const generateAIReply = () => {
    setReply(
      "We’re sorry for your experience. Our team will resolve this issue as soon as possible."
    );
  };

  return (
    <Card>
      <Top>
        <Name>{review.name}</Name>
        <Platform>{review.platform}</Platform>
      </Top>

      <Text>{review.text}</Text>

      <Tag text={review.sentiment} type={review.sentiment} />

      {/* Show saved reply */}
      {savedReply && <SavedReply>Reply: {savedReply}</SavedReply>}

      {/* Reply Section */}
      {!showReply && (
        <Button onClick={() => setShowReply(true)}>Reply</Button>
      )}

      {showReply && (
        <ReplyBox>
          <Input
            rows="3"
            placeholder="Write a reply..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />

          <ButtonRow>
            <Button onClick={handleSend}>Send</Button>
            <Button onClick={generateAIReply}>AI Suggest</Button>
          </ButtonRow>
        </ReplyBox>
      )}
    </Card>
  );
};

export default ReviewCard;