import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { 
  FaHome, 
  FaStar, 
  FaChartBar, 
  FaExclamationTriangle 
} from "react-icons/fa";
const SidebarContainer = styled.div`
  width: 220px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.card};
  position: fixed;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.textSecondary};

  transition: all 0.25s ease;

  &:hover {
    background: rgba(152, 158, 168, 0.15);
    color: white;
  }

  &.active {
    background: rgba(152, 158, 168, 0.15);
    color: white;
    border: 1px solid rgba(152, 158, 168, 0.3);
  }
`;
const Icon = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Title>ReviewAI</Title>

      <MenuItem to="/" end>
        <Icon><FaHome /></Icon>
        Dashboard
      </MenuItem>

      <MenuItem to="/reviews">
        <Icon><FaStar /></Icon>
        Reviews
      </MenuItem>

      <MenuItem to="/insights">
        <Icon><FaChartBar /></Icon>
        Insights
      </MenuItem>

      <MenuItem to="/alerts">
        <Icon><FaExclamationTriangle /></Icon>
        Alerts
      </MenuItem>
    </SidebarContainer>
  );
};
export default Sidebar;