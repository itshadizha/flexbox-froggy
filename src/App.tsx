import { Box, styled } from "@mui/material";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import GameBoard from "./components/GameBoard/GameBoard";
import { useEffect } from "react";

function App() {
  return (
    <Container>
      <SideBar />

      <GameBoard />
    </Container>
  );
}

export default App;

const Container = styled(Box)(() => ({
  display: "flex",
  minWidth: 600,
  backgroundColor: "#43A047",
}));
