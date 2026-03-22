import styled from "styled-components";

const Nav = styled.div`
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;

  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;

  background: linear-gradient(90deg, #ffffff, #c7d2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Status = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Nav>
      <Title>E-commerce Review System</Title>

      <RightSection>
        <Status>Online</Status>
        <Avatar>K</Avatar>
      </RightSection>
    </Nav>
  );
};

export default Navbar;