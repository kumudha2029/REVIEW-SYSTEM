// src/components/charts/RatingChart.jsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const ChartBox = styled.div`
  background: ${({ theme }) => theme.colors.card};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius};
  height: 300px;
  width: 500px;
`;

const data = [
  { month: "Jan", rating: 3.8 },
  { month: "Feb", rating: 4.0 },
  { month: "Mar", rating: 4.2 },
  { month: "Apr", rating: 4.1 },
  { month: "May", rating: 4.3 },
];

const RatingChart = () => {
  return (
    <ChartBox>
      <h3>Rating Trend</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line type="monotone" dataKey="rating" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </ChartBox>
  );
};

export default RatingChart;