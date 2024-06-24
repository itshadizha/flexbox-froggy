import { styled } from "@mui/material";
import React from "react";

interface CurrentLevelProps {
  onClick?: () => void;
  selectedLevel?: number;
}

const CurrentLevel: React.FC<CurrentLevelProps> = ({
  onClick,
  selectedLevel,
  ...otherProps
}) => {
  return (
    <SpanLevel onClick={onClick} {...otherProps}>
      <span style={{ marginLeft: "5px" }}>Уровень {selectedLevel} из 24</span>
      <span style={{ display: "inline-block", marginLeft: "2px" }}>▾</span>
    </SpanLevel>
  );
};

export default CurrentLevel;

const SpanLevel = styled("span")({
  display: "inline-block",
  width: "160px",
  lineHeight: "25px",
  textAlign: "center",
  cursor: "pointer",
  float: "left",
  height: "30px",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  "&:hover": {
    boxShadow: "inset 0 0 100px 100px rgba(255, 255, 255, 0.1)",
  },
});
