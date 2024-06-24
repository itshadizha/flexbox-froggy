import React from "react";
import { styled } from "@mui/material";

export interface ButtonProps {
  onClick?: () => void;
  right?: boolean;
}

const ButtonLvl: React.FC<ButtonProps> = ({
  onClick,
  right,
  ...otherProps
}) => {
  console.log(right);
  return (
    <Span onClick={onClick} right={right} {...otherProps}>
      <Triangle right={right} />
    </Span>
  );
};

export default ButtonLvl;

const Span = styled("span")<{ right?: boolean }>(({ right }) => ({
  display: "inline-flex",
  alignItems: "center",
  padding: "0.25em 0.5em 0.2em",
  cursor: "pointer",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  height: "30px",
  "&:hover": {
    boxShadow: "inset 0 0 100px 100px rgba(255, 255, 255, 0.1)",
  },
  borderLeft: right ? "1px solid rgba(255, 255, 255, 0.2)" : undefined,
  borderRight: right ? undefined : "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: right ? "0 4px 4px 0" : "4px 0 0 4px",
}));

const Triangle = styled("span")<{ right?: boolean }>(({ right }) => ({
  display: "inline-block",
  width: 0,
  height: 0,
  borderTop: "7px solid transparent",
  borderBottom: "7px solid transparent",
  borderLeft: right ? "11px solid white" : undefined,
  borderRight: right ? undefined : "11px solid white",
}));
