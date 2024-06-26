import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";

interface TextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MyTextarea: React.FC<TextareaProps> = ({ value, onChange }) => {
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
