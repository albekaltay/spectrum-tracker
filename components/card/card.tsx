
// style
import {
  StyledCard,
  StyledCardBody,
  StyledCardHeader,
  StyledCardTitle,
} from "./card.styled";
//
import Divider from "../divider";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

type Props = {
  title?: string;
  rightToolbar?: any;
  backgroundColor?: string;
  children: React.ReactNode;
};

const Card = ({ title,backgroundColor = "rgb(9, 94, 221)", rightToolbar ,children}: Props) => {
  return (
    <StyledCard style={{ backgroundColor }}>
      <StyledCardHeader>
        <StyledCardTitle>{title}</StyledCardTitle>  
        {rightToolbar && rightToolbar}
      </StyledCardHeader>
      <Divider />
      <StyledCardBody>{children}</StyledCardBody>
    </StyledCard>
  );
};

export default Card;
