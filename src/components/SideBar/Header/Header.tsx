import { Box, Typography, styled } from "@mui/material";
import { useState } from "react";
import BackButton from "./GoBackButton/BackButton";
import CurrentLevel from "./CurrentLevel/CurrentLevel";
import NextButton from "./NextButton/NextButton";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { setCurrentLevel } from "../../../store/froggySlice/froggySlice";



const Header: React.FC = () => {
  const dispatch = useAppDispatch()

  const {currentLevel} = useAppSelector(state => state.froggy)

  const {levels} = useAppSelector(state => state.froggy)

  const level = levels.find((item) => item.level === currentLevel)

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showLevelsHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowMenu((prev) => !prev);
  };

  interface CloseFParametr {
    level: number
  }

  const closeDropDownMenu = ({level}: CloseFParametr) => {
    dispatch(setCurrentLevel(level))
    setShowMenu(false)

  }

  const nextLevelHandler = () => {
    dispatch(setCurrentLevel(currentLevel + 1))
  }
 
  const previousLevelHandler = () => {
    dispatch(setCurrentLevel(currentLevel - 1))
  }
 

  return (
    <HeaderStyled component="header">
      <Box>
        <Title variant="h1">Flexbox Froggy</Title>
      </Box>

      <LevelsContainer>
        <BackButton onClick={previousLevelHandler} />
        <CurrentLevelContainer onClick={showLevelsHandler}>
          <CurrentLevel  selectedLevel={level?.level}/>
          {showMenu && <DropdownMenu level={level} onClose={closeDropDownMenu} levels={levels} />}
        </CurrentLevelContainer>
        <NextButton onClick={nextLevelHandler} />
      </LevelsContainer>
    </HeaderStyled>
  );
};

export default Header;

const Title = styled(Typography)(() => ({
  margin: "0.5rem 0 0",
  textTransform: "uppercase",
  fontSize: 28,
  fontWeight: 900,
}));

const LevelsContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "0.5rem",
}));

const CurrentLevelContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
}));

const HeaderStyled = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "-0.5rem",
  justifyContent: "space-between",
  width: "100%",
}));
