import { Box, styled } from "@mui/material";
import instructions from "../instructionsData";
import { useAppSelector } from "../../../hook";

const Instructions = () => {

  const { currentLevel } = useAppSelector((state) => state.froggy);

  return (
    <InstructionsStyled>{instructions[currentLevel - 1]}</InstructionsStyled>
  );
};

export default Instructions;

const InstructionsStyled = styled(Box)({
  paddingTop: "1rem",

  "& ul, & p": {
    margin: 0,
    marginBottom: "1em",
  },

  "& ul": {
    marginLeft: 30,
  },

  "& strong": {
    backgroundColor: "#e5eced3b",
    padding: "2px",
    margin: "2px",
  },

  "& li": {
    marginBottom: 5,
  },
});
