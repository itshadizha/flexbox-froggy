import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";

interface TextareaProps {
  value: string;
  onChange: () => void;
}

// Styled component definition
const MyTextarea = ({ value, onChange }: TextareaProps) => {
  return (
    <TextareaStyled
      value={value}
      onChange={onChange}
      multiline
      size="small"
      fullWidth
    />
  );
};

// Styling using styled function
const TextareaStyled = styled(TextField)(({ theme }) => ({
  width: `calc(100% - ${theme.spacing(2)})`,
  fontFamily: "Source Code Pro, monospace",
  display: "block",
  color: "crimson",
  fontSize: "16px",
  outline: "none",
  resize: "none",
  height: "25px",
  overflow: "auto",
  backgroundColor: "white",
  marginLeft: 20,

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
}));

export default MyTextarea;
