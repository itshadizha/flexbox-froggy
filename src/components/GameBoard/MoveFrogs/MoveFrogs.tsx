import { Box, styled } from "@mui/material";
import Frogs from "../Frogs/Frogs";
import { LevelsTypes } from "../../../store/froggyState/initialState";

interface FrogsProps {
  style: string | undefined;
  level: LevelsTypes | undefined;
  lilypadColor: string | undefined;
}

const MoveFrogs = ({ style, level, lilypadColor }: FrogsProps) => {
  const frogs = level?.colors.map((color, i) => {
    const singleFrogStyle = lilypadColor === color ? style : "";

    return <Frogs style={singleFrogStyle} color={color} key={i} />;
  });

  return <Pond sx={style}>{frogs}</Pond>;
};

export default MoveFrogs;

const Pond = styled(Box)(() => ({
  display: "flex",
  position: "absolute",
  zIndex: 20,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  padding: "1em",
}));
