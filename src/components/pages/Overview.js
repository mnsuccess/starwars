import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { parseInteger } from "../../utils";
import { removeFavoriteStarship } from "../../store/actions";
import { Toaster } from "react-hot-toast";
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
import FleetPassagerInput from "../FleetPassagerInput";
import PeopleCard from "../PeopleListCard";

function Overview() {
  const [starship, setStarship] = useState({});
  const [passengers, SetPassengers] = useState([]);
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

  useEffect(() => {
    if (Object.keys(starship).length !== 0) {
      SetPassengers(starship.userPassengers);
    }
  });

  return (
    <Container>
      <Toaster />
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
            <h4>Passengers Capacity</h4>
            <p> {parseInteger(starship.passengers)}</p>
          </DetailShipInfoGrid>
          <DetailShipInfoGrid>
            <h4>Crew Capacity</h4>
            <p> {parseInteger(starship.crew)}</p>
          </DetailShipInfoGrid>

          <DetailShipInfoGrid>
            <h4>Passengers on board</h4>
            <p> {passengers.length}</p>
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
        <FleetPassagerInput starship={starship} />
      </LeftSideContainer>
      <RightSideContainer>
        <h4>Capacity</h4>
        <ProgressBar
          max={parseInteger(starship.passengers) + parseInteger(starship.crew)}
          usage={passengers.length}
        />
        <PeopleCard starship={starship} />
      </RightSideContainer>
    </Container>
  );
}
export default Overview;
