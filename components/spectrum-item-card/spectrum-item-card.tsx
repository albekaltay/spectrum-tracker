// style
import {
  SpectrumItemCard as StyledSpectrumItemCard,
  SpectrumItemTitle,
  SpectrumItemContent,
} from "./spectrum-item-card.styled";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

type Props = {
  title: string;
  content: any;
};

const SpectrumItemCard = ({ title, content}: Props) => {
  return (
    <StyledSpectrumItemCard>
      <SpectrumItemTitle> {title} </SpectrumItemTitle>
      <SpectrumItemContent>{content}</SpectrumItemContent>
    </StyledSpectrumItemCard>
  );
};

export default SpectrumItemCard;
