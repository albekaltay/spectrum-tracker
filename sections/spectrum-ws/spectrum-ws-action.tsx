
// compğonents
import Button from '@/components/button'
// styled
import { SpectrumWsActionContainer, SpectrumWsActionWarningText } from './spectrum-ws.styled';

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

const SpectrumWsAction = ({...props}) => {
  return (
    <SpectrumWsActionContainer> 
    <SpectrumWsActionWarningText>Action is required. Please Click on the button.</SpectrumWsActionWarningText>
    <Button {...props} color='White' label="Spectrum Action Button"/>
    </SpectrumWsActionContainer>
  )
}

export default SpectrumWsAction;


