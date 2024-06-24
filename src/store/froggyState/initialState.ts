export interface PlayerAnswerTypes  {
value: string;
level: number;
}

export type InitState = {
  currentLevel: number;
  userStyles: string;

  levels: LevelsTypes[];
};

type LilypadStylesType = {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
};

export type LevelsTypes = {
  level: number;
  isCurrent: boolean;
  isComplete: boolean;
  colors: string[];
  lilypadStyles: LilypadStylesType;
  correctAnswer: string;
  playerAnswer: string;
};

// ----------- state ---------- //

export const initialState: InitState = {
  currentLevel: 1,
  userStyles: "",

  levels: [
    {
      level: 1,
      isCurrent: true,
      isComplete: false,
      colors: ["green"],
      lilypadStyles: { justifyContent: "flex-end" },
      correctAnswer: "justify-content: flex-end",
      playerAnswer: "",
    },
    {
      level: 2,
      isCurrent: false,
      isComplete: false,
      colors: ["green", "yellow"],
      lilypadStyles: { justifyContent: "center" },
      correctAnswer: "justify-content: center",
      playerAnswer: "",
    },
    {
      level: 3,
      isCurrent: false,
      isComplete: false,
      colors: ["green", "yellow"],
      lilypadStyles: { justifyContent: "center" },
      correctAnswer: "justify-content: center",
      playerAnswer: "",
    },
  ],
};
