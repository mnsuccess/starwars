import React from "react";
import {
  Container,
  LeftSideContainer,
  DetailShipInfo,
  DetailShipInfoGrid,
  RightSideContainer,
  Button,
  MainTitle,
} from "./Overview.styles";
import ProgressBar from "../widgets/ProgressBar";

function Overview() {
  //console.log(user_starship);

  return (
    <Container>
      <LeftSideContainer>
        <MainTitle>Detail View</MainTitle>
        <DetailShipInfo>
          <DetailShipInfoGrid>
            <h4>Name</h4>
            <p> user_starship.name</p>
          </DetailShipInfoGrid>
          <DetailShipInfoGrid>
            <h4>Model</h4>
            <p> user_starship.mode</p>
          </DetailShipInfoGrid>
          <DetailShipInfoGrid>
            <h4>Vehicle Class</h4>
            <p> user_starship.starship_class</p>
          </DetailShipInfoGrid>

          <DetailShipInfoGrid>
            <h4>Manufacturer</h4>
            <p> user_starship.manufacturer</p>
          </DetailShipInfoGrid>
          <DetailShipInfoGrid>
            <h4> </h4>
            <Button> Remove</Button>
          </DetailShipInfoGrid>
        </DetailShipInfo>
      </LeftSideContainer>
      <RightSideContainer>
        <h4>Capacity</h4>
        <ProgressBar max="500" usage="430" />
      </RightSideContainer>
    </Container>
  );
}
export default Overview;
