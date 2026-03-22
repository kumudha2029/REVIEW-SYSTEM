// src/components/charts/SentimentChart.jsx

import {
  PieChart,
  Pie,
  Cell,
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
  { name: "Positive", value: 860 },
  { name: "Negative", value: 210 },
  { name: "Neutral", value: 170 },
];

const COLORS = ["#22c55e", "#ef4444", "#f59e0b"];

const SentimentChart = () => {
  return (
    <ChartBox>
      <h3>Sentiment Analysis</h3>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
};

export default SentimentChart;