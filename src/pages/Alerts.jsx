// src/pages/Alerts.jsx

import Layout from "../components/layout/Layout";
import styled from "styled-components";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { reviews } from "../data/reviews";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius};
  margin-bottom: 12px;

  border-left: 4px solid
    ${({ priority, theme }) =>
      priority === "high"
        ? theme.colors.danger
        : theme.colors.warning};

  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Badge = styled.span`
  background: ${({ priority, theme }) =>
    priority === "high"
      ? theme.colors.danger
      : theme.colors.warning};

  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  margin-left: 10px;
`;

const Alerts = () => {
  const navigate = useNavigate();

  // 🔥 Generate alerts from data
  const negativeReviews = reviews.filter(
    (r) => r.sentiment === "negative"
  );

  return (
    <Layout>
      <h1>Alerts</h1>

      {/* 🚨 Negative Review Alerts */}
      {negativeReviews.slice(0, 3).map((review) => (
        <Card key={review.id} priority="high">
          <Title>
            Negative Review Detected
            <Badge priority="high">High</Badge>
          </Title>

          <Text>
            “{review.text}” — {review.platform}
          </Text>

          <Button onClick={() => navigate("/reviews")}>
            Respond Now
          </Button>
        </Card>
      ))}

      {/* 📉 Rating Drop Alert */}
      <Card priority="medium">
        <Title>
          Rating Dropped on Amazon
          <Badge priority="medium">Medium</Badge>
        </Title>

        <Text>
          Average rating dropped from 4.3 to 4.1 this week.
        </Text>

        <Button onClick={() => navigate("/reviews")}>
          View Details
        </Button>
      </Card>
    </Layout>
  );
};

export default Alerts;