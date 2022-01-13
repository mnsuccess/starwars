import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPeopleStarship, fetchSearchPeople } from "../store/actions";
import {
  MainContainer,
  Container,
  Button,
  Input,
  ResponseContainer,
  DisplaySearchContainer,
  TitleFleet,
  ButtonAction,
} from "./FleetPassagerInput.styles";

export const FleetPassagerInput = ({ starship }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [filteredData, SeFilteredData] = useState([]);

  // Handle filter of the search starships from the store
  const handleFilter = (event) => {
    const searchword = event.target.value;
    //dispatch the search of the value wanted
    dispatch(fetchSearchPeople(searchword));
    const newFilter = state.people;
    if (searchword === "") {
      SeFilteredData([]);
    } else {
      SeFilteredData(newFilter);
    }
  };

  return (
    <MainContainer>
      <Container>
        <Button>🧑🏾‍🚀</Button>
        <Input
          placeholder="Search any star wars characters"
          onChange={handleFilter}
        />
      </Container>
      {filteredData.length !== 0 && (
        <ResponseContainer>
          {filteredData.slice(0, 10).map((value, index) => {
            return (
              <DisplaySearchContainer key={index}>
                <TitleFleet>{value.name}</TitleFleet>
                <ButtonAction
                  onClick={() => {
                    dispatch(addPeopleStarship(value, starship.name));
                  }}
                >
                  ✚
                </ButtonAction>
              </DisplaySearchContainer>
            );
          })}
        </ResponseContainer>
      )}
    </MainContainer>
  );
};

export default FleetPassagerInput;
