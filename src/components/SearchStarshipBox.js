import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteStarship, fetchSearchData } from "../store/actions";
import {
  MainContainer,
  Container,
  Button,
  Input,
  ResponseContainer,
  DisplaySearchContainer,
  TitleFleet,
  ButtonAction,
} from "./SearchStarshipBox.styles";

export const SearchStarshipBox = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [filteredData, SeFilteredData] = useState([]);

  // Handle filter of the search starships from the store
  const handleFilter = (event) => {
    const searchword = event.target.value;
    //dispatch the search of the value wanted
    dispatch(fetchSearchData(searchword));
    const newFilter = state.starships;
    if (searchword === "") {
      SeFilteredData([]);
    } else {
      SeFilteredData(newFilter);
    }
  };

  return (
    <MainContainer>
      <Container>
        <Button>✈️</Button>
        <Input placeholder="Search any Starship" onChange={handleFilter} />
      </Container>
      {filteredData.length !== 0 && (
        <ResponseContainer>
          {filteredData.slice(0, 10).map((value, index) => {
            return (
              <DisplaySearchContainer key={index}>
                <TitleFleet>{value.name}</TitleFleet>
                <ButtonAction
                  onClick={() => {
                    dispatch(addFavoriteStarship(value));
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

export default SearchStarshipBox;
