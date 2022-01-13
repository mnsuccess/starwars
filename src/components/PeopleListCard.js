import React, { useState, useEffect } from "react";
import { parseInteger } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { removePeopleStarship } from "../store/actions";

import {
  Container,
  CardContainer,
  Icon,
  InfoContainer,
  InfoName,
  InfoEntity,
} from "./PeopleListCard.styles";

export default function PeopleCard({ starship }) {
  const state = useSelector((state) => state);
  const [passengers, SetPassengers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(starship).length !== 0) {
      SetPassengers(starship.userPassengers);
    }
  });

  return (
    <Container>
      {passengers.length !== 0 && (
        <>
          {passengers.map((people, index) => {
            return (
              <CardContainer key={index}>
                <Icon
                  onClick={() => {
                    dispatch(removePeopleStarship(people.name, starship.name));
                  }}
                >
                  ❌
                </Icon>
                <InfoContainer>
                  <InfoName>{people.name}</InfoName>
                  <InfoEntity>{people.gender}</InfoEntity>
                </InfoContainer>
              </CardContainer>
            );
          })}
        </>
      )}

      {passengers.length === 0 && (
        <span className="mt-2 block text-sm font-medium text-gray-900">
          You haven’t added any Passengers to your starship yet.
        </span>
      )}
    </Container>
  );
}
