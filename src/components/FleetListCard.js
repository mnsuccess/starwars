import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "./widgets/ProgressBar";
import { parseInteger } from "../utils";
import { useSelector } from "react-redux";

import {
  Container,
  CardContainer,
  Icon,
  StyledLogo,
  InfoContainer,
  InfoName,
  InfoEntity,
} from "./FleetListCard.styles";

export default function FleetCard() {
  const state = useSelector((state) => state);

  const navigate = useNavigate();

  const goToReceiver = function (index, name) {
    navigate("/overview", {
      state: { id: index, name: name },
    });
  };

  return (
    <Container>
      {state.fleet.length !== 0 && (
        <>
          {state.fleet.map((starship, index) => {
            return (
              <CardContainer key={index}>
                <Icon onClick={() => goToReceiver(index, starship.name)}>
                  <StyledLogo />
                </Icon>

                <InfoContainer>
                  <InfoName>{starship.name}</InfoName>
                  <InfoEntity>{starship.model}</InfoEntity>
                  <ProgressBar
                    max={
                      parseInteger(starship.passengers) +
                      parseInteger(starship.crew)
                    }
                    usage={starship.userPassengers.length}
                  />
                </InfoContainer>
              </CardContainer>
            );
          })}
        </>
      )}

      {state.fleet.length === 0 && (
        <span className="mt-2 block text-sm font-medium text-gray-900">
          You haven’t added any Starship to your fleet yet.
        </span>
      )}
    </Container>
  );
}
