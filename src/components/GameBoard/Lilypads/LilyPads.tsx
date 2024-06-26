import { Box, styled } from "@mui/material";
import greenPad from "../../../assets/images/lilypad-green.svg";
import redPad from "../../../assets/images/lilypad-red.svg";
import yellowPad from "../../../assets/images/lilypad-yellow.svg";
import { LilypadStylesType } from "../../../store/froggyState/initialState";

interface LilypadProps {
  color: string;
  style: LilypadStylesType | undefined | string;
}

const LilyPads = ({ color, style }: LilypadProps) => {
  return (
    <Lilypad sx={style}>
      <FilledPad color={color}></FilledPad>
    </Lilypad>
  );
};

export default LilyPads;

const getBackgroundImage = (color: string) => {
  switch (color) {
    case "green":
      return `url(${greenPad})`;

    case "red":
      return `url(${redPad})`;

    case "yellow":
      return `url(${yellowPad})`;

    default:
      return "none";
  }
};

const FilledPad = styled(Box)<{ color: string }>(({ color }) => ({
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundImage: getBackgroundImage(color),

  transform: "rotate(-45deg)",
}));

const Lilypad = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  backgroundColor: "transparent",
});
