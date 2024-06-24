import ButtonLvl, { ButtonProps } from "../../../UI/Button";


const BackButton = ({onClick}: ButtonProps) => {
  return <ButtonLvl  onClick={onClick} right={false} />;
};

export default BackButton;
