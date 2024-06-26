import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PlayerAnswerTypes, initialState } from "../froggyState/initialState";

export const froggySlice = createSlice({
  name: "froggy",
  initialState: initialState,
  reducers: {
    completeLevel(state, action: PayloadAction<number | undefined>) {
      state.levels = state.levels.map((level) =>
        level.level === action.payload ? { ...level, isComplete: true } : level
      );
    },

    setCurrentLevel(state, action: PayloadAction<number>) {
      if (action.payload > 24 || action.payload === 0) return;

      state.currentLevel = action.payload;

      state.levels.map((level) => ({ ...level, isCurrent: false }));

      state.levels.map((level) =>
        level.level === action.payload ? { ...level, isCurrent: true } : level
      );
    },

    setStyles(state, action: PayloadAction<string>) {
      state.userStyles = action.payload.trim();
    },

    setPlayerAnswer(state, action: PayloadAction<PlayerAnswerTypes>) {
      state.levels = state.levels.map((level) =>
        level.level === action.payload.level
          ? { ...level, playerAnswer: action.payload.value }
          : level
      );
    },

    resetLevels(state) {
     state.levels = state.levels.map((level ) => ({...level, isComplete: false, playerAnswer: ""}))
      state.userStyles = "";
    },
  },
});

export const {
  setCurrentLevel,
  setStyles,
  completeLevel,
  setPlayerAnswer,
  resetLevels,
} = froggySlice.actions;
