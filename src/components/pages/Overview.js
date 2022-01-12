import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { parseInteger } from "../../utils";
import { removeFavoriteStarship } from "../../store/actions";
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
  //console.log(starship);
  const [starship, setStarship] = useState({});
  const local_state = useSelector((state) => state);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //redirect to the home page if th state is null
    if (state == null) {
      navigate("/");
    } else {
      //local_state.fleet setStarship(local_state.fleet);
      setStarship(
        local_state.fleet.filter((res) => {
          return res.name === state.name;
        })[0]
      );
    }
  }, [navigate]);

  return (
    <Container>
      <LeftSideContainer>
        <MainTitle>Detail View</MainTitle>
        <DetailShipInfo>
          <DetailShipInfoGrid>
            <h4>Name</h4>
            <p> {starship.name}</p>
          </DetailShipInfoGrid>
          <DetailShipInfoGrid>
            <h4>Model</h4>
            <p> {starship.model}</p>
          </DetailShipInfoGrid>
          <DetailShipInfoGrid>
            <h4>Vehicle Class</h4>
            <p> {starship.starship_class}</p>
          </DetailShipInfoGrid>

          <DetailShipInfoGrid>
            <h4>Manufacturer</h4>
            <p> {starship.manufacturer}</p>
          </DetailShipInfoGrid>
          <DetailShipInfoGrid>
            <h4> </h4>
            <Button
              onClick={() => {
                dispatch(removeFavoriteStarship(starship.name));
                navigate("/");
              }}
            >
              Remove
            </Button>
          </DetailShipInfoGrid>
        </DetailShipInfo>
      </LeftSideContainer>
      <RightSideContainer>
        <h4>Capacity</h4>

        <ProgressBar
          max={parseInteger(starship.passengers) + parseInteger(starship.crew)}
          usage="0"
        />
      </RightSideContainer>
    </Container>
  );
}
export default Overview;
