import { Box, styled } from "@mui/material";
import LilyPads from "../Lilypads/LilyPads";
import {
  LevelsTypes,
  LilypadStylesType,
} from "../../../store/froggyState/initialState";

interface LilyPadsProps {
  style: LilypadStylesType | undefined;
  level: LevelsTypes;
  lilypadColor: string;
}

const SetLilypads = ({ style, level, lilypadColor }: LilyPadsProps) => {
  const lilypadPositions = level.colors.map((color, i) => {
    // if (lilypadColor === color) style = { style };
    const singleLilypadStyle = lilypadColor === color ? style : "";

    console.log(style, "style Lilypad");

    return <LilyPads style={singleLilypadStyle} color={color} key={i} />;
  });

  return (
    <LilypadBackground sx={level.level === 15 ? level.div : style}>
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
