import { Box, styled } from "@mui/material";
import LilyPads from "../Lilypads/LilyPads";
import { LevelsTypes } from "../../../store/froggyState/initialState";

interface LilyPadsProps {
  style: object | undefined,
  lilypad: object,
  level: LevelsTypes,
}

const SetLilypads = ({ style , level, lilypad}: LilyPadsProps) => {
const lilypadPositions = level.colors.map((color, i) => {
  return <LilyPads color={color} key={i}/>
})

  return (
    <LilypadBackground sx={style}>
    {lilypadPositions}
    </LilypadBackground>
  );
};

export default SetLilypads;

const LilypadBackground = styled(Box)(() => ({
  display: "flex",
  position: "absolute",
  zIndex: 10,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  padding: "1em",
}));
