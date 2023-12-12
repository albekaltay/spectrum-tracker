// style
import { Button as StyledButton } from "./button.styled";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
  label: string;
};

const Button = ({ label, ...props }: Props) => {
  return <StyledButton {...props}
  >{label}</StyledButton>;
};

export default Button;
