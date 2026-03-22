// src/pages/Reviews.jsx

import Layout from "../components/layout/Layout";
import styled from "styled-components";
import { reviews } from "../data/reviews";
import Tag from "../components/ui/Tag";
import { useState, useEffect } from "react";

const TopBar = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  width: 250px;

  background: rgba(255, 255, 255, 0.1);
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
const Select = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: none;
  outline: none;

  background: rgba(255, 255, 255, 0.1);
  color: white;

  appearance: none; /* remove default arrow */
  cursor: pointer;

  option {
    background: #1e293b;
    color: white;
  }
`;
const TableContainer = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 14px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-bottom: 1px solid #1e293b;
`;

const Td = styled.td`
  padding: 14px;
  border-bottom: 1px solid #1e293b;
  font-size: 14px;
`;

const Name = styled.span`
  font-weight: 500;
`;

const ReviewText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Source = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ReplyBtn = styled.button`
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const ReplyInput = styled.textarea`
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
`;

const Reviews = () => {
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("all");
  const [sentiment, setSentiment] = useState("all");

  const [activeReply, setActiveReply] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [savedReplies, setSavedReplies] = useState({});

  // Load from localStorage
  useEffect(() => {
    const data = localStorage.getItem("replies");
    if (data) setSavedReplies(JSON.parse(data));
  }, []);

  // Save to localStorage
  const saveReply = (id) => {
    const updated = { ...savedReplies, [id]: replyText };
    setSavedReplies(updated);
    localStorage.setItem("replies", JSON.stringify(updated));

    setActiveReply(null);
    setReplyText("");
  };

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.name.toLowerCase().includes(search.toLowerCase()) ||
      review.text.toLowerCase().includes(search.toLowerCase());

    const matchesPlatform =
      platform === "all" || review.platform === platform;

    const matchesSentiment =
      sentiment === "all" || review.sentiment === sentiment;

    return matchesSearch && matchesPlatform && matchesSentiment;
  });

  return (
    <Layout>
      <h1>All Reviews</h1>

      {/* SEARCH + FILTER */}
      <TopBar>
        <Input
          type="text"
          placeholder="Search reviews..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select onChange={(e) => setPlatform(e.target.value)}>
          <option value="all">All Platforms</option>
          <option value="Amazon">Amazon</option>
          <option value="Flipkart">Flipkart</option>
          <option value="Website">Website</option>
        </Select>

        <Select onChange={(e) => setSentiment(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
          <option value="neutral">Neutral</option>
        </Select>
      </TopBar>

      {/* TABLE */}
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Review</Th>
              <Th>Category</Th>
              <Th>Source</Th>
              <Th>Action</Th>
            </tr>
          </thead>

          <tbody>
            {filteredReviews.map((review) => (
              <tr key={review.id}>
                <Td>
                  <Name>{review.name}</Name>
                </Td>

                <Td>
                  <ReviewText>{review.text}</ReviewText>

                  {/* Show saved reply */}
                  {savedReplies[review.id] && (
                    <p style={{ color: "#22c55e", marginTop: "6px" }}>
                      Reply: {savedReplies[review.id]}
                    </p>
                  )}

                  {/* Reply input */}
                  {activeReply === review.id && (
                    <>
                      <ReplyInput
                        rows="2"
                        placeholder="Write reply..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <ReplyBtn onClick={() => saveReply(review.id)}>
                        Send
                      </ReplyBtn>
                    </>
                  )}
                </Td>

                <Td>
                  <Tag
                    text={review.sentiment}
                    type={review.sentiment}
                  />
                </Td>

                <Td>
                  <Source>{review.platform}</Source>
                </Td>

                <Td>
                  <ReplyBtn onClick={() => setActiveReply(review.id)}>
                    Reply
                  </ReplyBtn>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Reviews;