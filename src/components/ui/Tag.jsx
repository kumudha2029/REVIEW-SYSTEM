// src/components/ui/Tag.jsx

import styled from "styled-components";

const TagBox = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  background: ${({ type, theme }) =>
    type === "positive"
      ? theme.colors.success
      : type === "negative"
      ? theme.colors.danger
      : theme.colors.warning};
`;

const Tag = ({ text, type }) => {
  return <TagBox type={type}>{text}</TagBox>;
};

export default Tag;