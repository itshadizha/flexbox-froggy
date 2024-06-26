import React, { useEffect } from "react";
import { Button, styled, Box } from "@mui/material";
import Level from "../../levels/Level";
import { LevelsTypes } from "../../../../store/froggyState/initialState";
import { useAppDispatch } from "../../../../hook";
import { resetLevels } from "../../../../store/froggySlice/froggySlice";

interface DropdownMenuProps {
  levels: LevelsTypes[];
  onClose: (level: number) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ levels, onClose }) => {
  const dispatch = useAppDispatch();


  const resetGame = () => {
    dispatch(resetLevels());
  };

  return (
    <MenuWrapper>
      <Levels>
        {levels.map((levelObj) => (
          <Level
            onClose={onClose}
            key={levelObj.level}
            isCompletelevel={levelObj.isComplete}
            level={levelObj.level}
          />
        ))}
      </Levels>
      <ResetButton onClick={resetGame}>Сбросить</ResetButton>
    </MenuWrapper>
  );
};

export default DropdownMenu;

const MenuWrapper = styled(Box)({
  display: "block",
  top: "30px",
  right: "31px",
  maxWidth: "160px",
  padding: "1em 0.5em",
  marginTop: "12px",
  zIndex: 80,
  position: "absolute",
  backgroundColor: "#2c3e50",
  borderRadius: "4px",
  fontSize: "12px",
  lineHeight: 1.5,
});

const Levels = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  color: "white",
});

const ResetButton = styled(Button)({
  marginTop: "1em",
  textAlign: "center",
  cursor: "pointer",
});
