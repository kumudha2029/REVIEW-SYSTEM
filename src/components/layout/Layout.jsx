import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
  margin-left: 220px;
`;

const Content = styled.div`
  padding: 20px;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Navbar />
        <Content>{children}</Content>
      </Main>
    </Container>
  );
};

export default Layout;