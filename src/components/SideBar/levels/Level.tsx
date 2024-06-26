import { styled } from "@mui/material";
import React from "react";

interface LevelProps {
  level: number;
  isCompletelevel: boolean;
  onClose: () => void
}


const Level: React.FC<LevelProps> = ({ level, isCompletelevel, onClose }) => {
  
  return <LevelItem onClick={() => onClose({level})} isComplete={isCompletelevel}>{level}</LevelItem>;
};

export default Level;

interface LevelItemProps {
  isComplete: boolean;
}

const LevelItem = styled("span")<LevelItemProps>(({ isComplete }) => ({
  display: "inline-block",
  width: "30px",
  height: "30px",
  margin: "2px",
  lineHeight: "26px",
  backgroundColor: isComplete ? "green" : "rgba(255, 255, 255, 0.2)",
  border: "2px solid transparent",
  borderRadius: "50%",
  textAlign: "center",
  cursor: "pointer",
}));
