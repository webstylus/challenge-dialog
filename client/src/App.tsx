import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

const App = function () {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Container>
  );
};

export { App };
