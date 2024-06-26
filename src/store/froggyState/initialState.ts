export interface PlayerAnswerTypes {
  value: string;
  level: number;
}

export type InitState = {
  currentLevel: number;
  userStyles: string;
  levels: LevelsTypes[];
};

export type LilypadStylesType = {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  order?: number;
  alignSelf?: string;
};

export type LevelsTypes = {
  level: number;
  isCurrent: boolean;
  isComplete: boolean;
  colors: string[];
  div?: object;
  lilypadStyles: LilypadStylesType;
  lilypadColor?: string;
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
      correctAnswer: "justify-content:flex-end",
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
      colors: ["green", "yellow", "red"],
      lilypadStyles: { justifyContent: "space-around" },
      correctAnswer: "justify-content: space-around",
      playerAnswer: "",
    },
    {
      level: 4,
      isCurrent: false,
      isComplete: false,
      colors: ["green", "yellow", "red"],
      lilypadStyles: { justifyContent: "space-between" },
      correctAnswer: "justify-content: space-between",
      playerAnswer: "",
    },
    {
      level: 5,
      isCurrent: false,
      isComplete: false,
      colors: ["green", "yellow", "red"],
      lilypadStyles: { alignItems: "flex-end" },
      correctAnswer: "alignItems: flex-end",
      playerAnswer: "",
    },
    {
      level: 6,
      isCurrent: false,
      isComplete: false,
      colors: ["green"],
      lilypadStyles: { justifyContent: "center", alignItems: "center" },
      correctAnswer: "justify-content: center; align-items: center",
      playerAnswer: "",
    },
    {
      level: 7,
      isCurrent: false,
      isComplete: false,
      colors: ["green", "yellow", "red"],
      lilypadStyles: { justifyContent: "space-around", alignItems: "flex-end" },
      correctAnswer: "justify-content: space-around; align-items: flex-end",
      playerAnswer: "",
    },

    {
      level: 8,
      isCurrent: false,
      isComplete: false,
      lilypadStyles: { flexDirection: "row-reverse" },
      colors: ["green", "yellow", "red"],
      playerAnswer: "",
      correctAnswer: "flex-direction: row-reverse;",
    },

    {
      level: 9,
      isCurrent: false,
      isComplete: false,
      lilypadStyles: { flexDirection: "column" },
      colors: ["green", "yellow", "red"],
      playerAnswer: "",
      correctAnswer: "flex-direction: column;",
    },

    {
      level: 10,
      isCurrent: false,
      isComplete: false,
      lilypadStyles: {
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
      },
      colors: ["green", "yellow", "red"],
      playerAnswer: "",
      correctAnswer: "flex-direction: row-reverse; justify-content: flex-end ",
    },

    {
      level: 11,
      isCurrent: false,
      isComplete: false,
      lilypadStyles: {
        flexDirection: "column",
        justifyContent: "flex-end",
      },
      colors: ["green", "yellow", "red"],
      playerAnswer: "",
      correctAnswer: "flex-direction: column; justify-content: flex-end ",
    },
    {
      level: 12,
      isCurrent: false,
      isComplete: false,
      lilypadStyles: {
        flexDirection: "column-reverse",
        justifyContent: "space-between",
      },
      colors: ["green", "yellow", "red"],
      playerAnswer: "",
      correctAnswer:
        "flex-direction: column-reverse; justify-content: space-between",
    },

    {
      level: 13,
      isCurrent: false,
      isComplete: false,
      colors: ["green", "yellow", "red"],
      lilypadStyles: {
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "flex-end",
      },
      playerAnswer: "",
      correctAnswer:
        "flex-direction: column-reverse; justify-content: center; align-items: flex-end;",
    },
    {
      level: 14,
      isCurrent: false,
      isComplete: false,
      colors: ["green", "yellow", "red"],
      lilypadStyles: {
        order: 2,
      },

      lilypadColor: "yellow",
      playerAnswer: "",
      correctAnswer: "order: 2",
    },
    {
      level: 15,
      isCurrent: false,
      isComplete: false,
      colors: ["green", "green", "green", "red", "green"],
      lilypadStyles: {
        order: 2,
      },
      div: {
        flexDirection: "row-reverse",
        justifyContent: "start",
      },
      lilypadColor: "red",
      playerAnswer: "",
      correctAnswer: "order: -1",
    },
    {
      level: 16,
      isCurrent: false,
      isComplete: false,
      colors: ["green", "green", "yellow", "green", "green"],
      lilypadStyles: { alignSelf: "flex-end" },
      lilypadColor: "yellow",

      playerAnswer: "",
      correctAnswer: "align-self: flex-end",
    },
  ],
};
