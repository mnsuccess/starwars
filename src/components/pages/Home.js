import React from "react";
import { SearchStarshipBox } from "../SearchStarshipBox";
import FleetCard from "../FleetListCard";
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
        <SearchStarshipBox />
      </LeftSideContainer>
      <RightSideContainer>
        <MainTitle>Your Fleet</MainTitle>
        <FleetCard />
      </RightSideContainer>
    </Container>
  );
}

export default Home;
