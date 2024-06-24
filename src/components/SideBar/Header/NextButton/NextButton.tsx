import ButtonLvl, { ButtonProps } from "../../../UI/Button";

const NextButton = ({onClick}: ButtonProps) => {
  return <ButtonLvl onClick={onClick} right={true} />;
};

export default NextButton;
