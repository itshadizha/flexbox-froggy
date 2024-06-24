import { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, keyframes, styled } from "@mui/material";
import MyTextarea from "../../UI/TextAreaMui";
import { useAppDispatch, useAppSelector } from "../../../hook";
import {
  setCurrentLevel,
  setStyles,
} from "../../../store/froggySlice/froggySlice";

const Textarea = () => {
  const dispatch = useAppDispatch();

  const { currentLevel } = useAppSelector((state) => state.froggy);
  const { levels } = useAppSelector((state) => state.froggy);

  const level = levels.find((item) => item.level === currentLevel);

  const state = useAppSelector((state) => state);

  const { userStyles } = useAppSelector((state) => state.froggy);

  const [userStylesValue, setUserStylesValue] = useState(level?.playerAnswer);

  // useEffect(() => {
  //   setUserStylesValue(level?.playerAnswer);
  // }, [userStylesValue]);

  const changeToNextLevel = () => {
    dispatch(setCurrentLevel(currentLevel + 1));
    setUserStylesValue("");
  };

  const handleUserStylesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserStylesValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setStyles(userStylesValue));
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, userStylesValue]);

  console.log(level?.isComplete, "complete");

  return (
    <Wrapper>
      <FieldStyles>
        <Numbers>
          1 <br /> 2 <br /> 3 <br /> 4 <br /> 5 <br /> 6 <br /> 7 <br /> 8{" "}
          <br /> 9 <br /> 10 <br />
        </Numbers>

        <DefaultStyle>
          {`#pond {
  display: flex;`}
        </DefaultStyle>

        <MyTextarea value={userStylesValue} onChange={handleUserStylesChange} />

        <DefaultStyle>{"}"}</DefaultStyle>

        <StyledButton disabled={level?.isComplete} onClick={changeToNextLevel}>
          Следующий
        </StyledButton>
      </FieldStyles>
    </Wrapper>
  );
};

const buttonShake = keyframes`
10%, 90% {
transform: translate3d(-1px, 0, 0);
}
20%, 80% {
transform: translate3d(2px, 0, 0);
}
30%, 50%, 70% {
transform: translate3d(-4px, 0, 0);
}
40%, 60% {
transform: translate3d(4px, 0, 0);
}
`;

export default Textarea;

const Wrapper = styled(Box)(() => ({
  fontFamily: "Source Code Pro, monospace",
  fontSize: 16,
  lineHeight: 1.5,
  color: "#777",
}));

const FieldStyles = styled(Box)({
  height: 260,
  position: "relative",
  padding: "10px 10px 10px 40px",
  backgroundColor: "#e0e0e0",
  borderRadius: 4,
  overflow: "hidden",
  color: "#777",
});

const Numbers = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  padding: "10px 6px",
  textAlign: "right",
  backgroundColor: "#999",
  color: "#D5D5D5",
});

const StyledButton = styled(Button)(({ disabled }) => ({
  position: "absolute",
  right: "1em",
  bottom: "1em",
  paddingTop: "0.3em",
  backgroundColor: !disabled ? "gray" : "red",
  animationName: disabled ? `${buttonShake}` : "",
  animationDuration: "1s",
  animationFillMode: "both",
  transitionTimingFunction: "cubic-bezier(.36, .07, .19, .97)",
  color: "white",
}));

const DefaultStyle = styled("pre")(() => ({
  color: "#777",
}));
