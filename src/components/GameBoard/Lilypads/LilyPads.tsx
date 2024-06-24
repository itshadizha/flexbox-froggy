import { Box, styled } from "@mui/material";
import greenPad from "../../../assets/images/lilypad-green.svg";
import redPad from "../../../assets/images/lilypad-red.svg";
import yellowPad from "../../../assets/images/lilypad-yellow.svg";
import { LilypadStylesType } from "../../../store/froggyState/initialState";

interface LilypadProps {
  color: string;
  style: LilypadStylesType;
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
  backgroundSize: "cover", // Adjusted to cover the entire pad
  width: "100%", // Adjusted width of the filled pad
  height: "100%", // Adjusted height of the filled pad
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundImage: getBackgroundImage(color),

  transform: "rotate(-45deg)"
}));

const Lilypad = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "120px", // Adjusted width of lilypad
  height: "120px", // Adjusted height of lilypad
  borderRadius: "50%", // Make lilypad circular
  backgroundColor: "transparent", // Remove background color if using background image
});


