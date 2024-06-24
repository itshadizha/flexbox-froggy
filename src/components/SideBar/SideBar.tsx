import { Box, styled } from "@mui/material";
import Header from "./Header/Header";
import Instructions from "./Instructions/Instructions";
import Textarea from "./Texarea/Textarea";
import Footer from "./Footer/Footer";

const SideBar = () => {
  return (
    <SideBarContainer component="section">
      <Header />

      <Instructions />

      <Textarea />

      <Footer />
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled(Box)(() => ({
  width: "50%",
  minWidth: 300,
  position: "relative",
  padding: "2em",
  backgroundColor: "#43a047",
  fontSize: 15,
}));
