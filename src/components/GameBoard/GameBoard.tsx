import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { MatchingStrings, isMatch } from "../../utils/helpers";
import { useAppDispatch, useAppSelector } from "../../hook";
import {
  completeLevel,
  setPlayerAnswer,
} from "../../store/froggySlice/froggySlice";
import MoveFrogs from "./MoveFrogs/MoveFrogs";
import SetLilypads from "./SetLilypads/SetLilypads";

const GameBoard = () => {
  const dispatch = useAppDispatch();

  const currentLevel = useAppSelector((state) => state.froggy.currentLevel);

  const level = useAppSelector((state) =>
    state.froggy.levels.find((item) => item.level === currentLevel)
  );

  const { userStyles } = useAppSelector((state) => state.froggy);
  const lilypadStyle = level?.lilypadStyles;

  // Define strings to check for match
  const stringsToCheck: MatchingStrings = {
    str1: level?.correctAnswer ?? "",
    str2: userStyles ?? "",
  };

  useEffect(() => {
    // Check if userStyles matches correctAnswer
    if (isMatch(stringsToCheck)) {
      dispatch(completeLevel(level?.level));

      dispatch(setPlayerAnswer({ level: level, value: userStyles }));
    }
  }, [dispatch, userStyles, level?.correctAnswer]);

  console.log(level, "chek complete");

  return (
    <Board>
      <MoveFrogs level={level} style={userStyles} />
      <SetLilypads level={level} lilypad={lilypadStyle} style={lilypadStyle} />
    </Board>
  );
};

export default GameBoard;

const Board = styled(Box)(() => ({
  backgroundColor: "#1F5768",
  top: 0,
  position: "sticky",
  width: "50vw",
  height: "50vw",
  minWidth: 300,
  minHeight: 300,
  maxWidth: "100vh",
  maxHeight: "100vh",
  overflow: "hidden",
  borderRadius: "0 0 0 10px",
}));
