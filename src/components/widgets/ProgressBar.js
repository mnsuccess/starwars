import PropTypes from "prop-types";
import React from "react";
import { parseInteger } from "../../utils";
import { Container, Header, Text } from "./ProgressBar.styles";

/**
 * ProgressBar par comment
 */
function ProgressBar({ max, usage }) {
  const maxCapacity = parseInteger(max); // for the maximu( crew +passagers)
  const capacityUsed = parseInteger(usage); // the capacity used
  var width = parseInteger((capacityUsed / maxCapacity) * 100);
  if (width > 100) width = 100;

  var color = "green";
  if (width > 75) {
    color = "red";
  } else if (width > 60 && width <= 75) {
    color = "indigo";
  } else if (width <= 60 && width >= 40) {
    color = "blue";
  } else {
    color = "green";
  }

  return (
    <Container>
      <Header width={width} color={color}>
        <Text> {maxCapacity}-Max</Text>
      </Header>
    </Container>
  );
}

ProgressBar.defaultProps = {
  max: "0",
  usage: "0",
};

ProgressBar.propTypes = {
  max: PropTypes.any,
  usage: PropTypes.any,
};

export default ProgressBar;
