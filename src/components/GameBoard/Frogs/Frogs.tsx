import { Box, keyframes, styled } from "@mui/material";
import greenFrog from "../../../assets/images/frog-green.svg";
import redFrog from "../../../assets/images/frog-red.svg";
import yellowFrog from "../../../assets/images/frog-yellow.svg";

interface FrogsProps {
  color: string;
  id?: number;
  style: string
}



const Frogs = ({ color , style}: FrogsProps) => {


  return (
    <Frog sx={style}>
      <FilledFrog  color={color} />
    </Frog>
  );
};

export default Frogs;

const animatedFrog = keyframes`

  25%{
    transform: scale(.9);
  }

`;

const getBackgroundImage = (color: string) => {
  switch (color) {
    case "green":
      return `url(${greenFrog})`;
    case "red":
      return `url(${redFrog})`;
    case "yellow":
      return `url(${yellowFrog})`;
    default:
      return "none";
  }
};

const FilledFrog = styled(Box)<{ color: string }>(({ color }) => ({
  backgroundSize: "60% 60%",
  width: "100%",
  height: "100%",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundImage: getBackgroundImage(color),

  animation: `${animatedFrog}`,
  animationDuration: "1s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
  animationFillMode: "both",
}));

const Frog = styled(Box)({
  position: "relative",
  width: "20%",
  height: "20%",
  overflow: "hidden",
});
