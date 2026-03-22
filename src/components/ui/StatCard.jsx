// src/components/ui/StatCard.jsx

import styled from "styled-components";

const Card = styled.div`
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  padding: 60px;
  border-radius: ${({ theme }) => theme.radius};

  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 18px;
`;

const Value = styled.h2`
  margin-top: 10px;
`;

const StatCard = ({ title, value }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Card>
  );
};

export default StatCard;