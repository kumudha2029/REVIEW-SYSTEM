// src/pages/Dashboard.jsx

import Layout from "../components/layout/Layout";
import styled from "styled-components";
import StatCard from "../components/ui/StatCard";
import ReviewCard from "../components/ui/ReviewCard";
import RatingChart from "../components/charts/RatingChart";
import SentimentChart from "../components/charts/SentimentChart";
import { stats } from "../data/stats";
import { reviews } from "../data/reviews";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
const Grid = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const ChartGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;
const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <Layout>
      <h1>Dashboard</h1>

      {/* Stats */}
      <Grid>
        <StatCard title="Total Reviews" value={stats.totalReviews} />
        <StatCard title="Avg Rating" value={stats.avgRating} />
        <StatCard title="Positive" value={stats.positive} />
        <StatCard title="Negative" value={stats.negative} />
      </Grid>

      {/* Charts */}
      <ChartGrid>
        <RatingChart />
        <SentimentChart />
      </ChartGrid>

      <Section>
  <HeaderRow>
    <Title>Recent Reviews</Title>
    <Button onClick={() => navigate("/reviews")}>
      View All
    </Button>
  </HeaderRow>

  {reviews.slice(-6).reverse().map((review) => (
    <ReviewCard key={review.id} review={review} />
  ))}
</Section>

    </Layout>
  );
};

export default Dashboard;