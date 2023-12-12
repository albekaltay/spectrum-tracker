
import styled, { keyframes } from "styled-components";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 4px solid grey;
  border-right: 4px solid grey;
  border-bottom: 4px solid grey;
  border-left: 8px solid black;
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

