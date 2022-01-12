import React from "react";
import {
  Container,
  LeftSideContainer,
  RightSideContainer,
  MainTitle,
} from "./Home.styles";

function Home() {
  return (
    <Container>
      <LeftSideContainer>
        <MainTitle>Star Fleet Manager</MainTitle>
      </LeftSideContainer>
      <RightSideContainer>
        <MainTitle>Your Fleet</MainTitle>
      </RightSideContainer>
    </Container>
  );
}

export default Home;
