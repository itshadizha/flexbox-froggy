import { Box, styled } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Container>
        <span>Игра Flexbox Froggy создана </span>
        <a href="https://codepip.com">Codepip</a> {" • "}
        <a href="https://github.com/thomaspark/flexboxfroggy/">GitHub</a>{" "}
        {" • "}
        <a href="https://twitter.com/playcodepip">Twitter</a> {" • "}
        <span>
          <span>Settings</span>
        </span>
      </Container>
      <Container>
        <span>Want to learn CSS grid? Play</span>
        <a href="https://codepip.com/games/grid-garden">Grid Garden</a> {" ."}
      </Container>
    </>
  );
};

export default Footer;

const Container = styled(Box)(() => ({
  marginTop: "1.5em",
  lineHeight: "1.5em",
  textAlign: "center",
  fontSize: "12px",
  color: " rgba(255, 255, 255, 0.6)",
}));
