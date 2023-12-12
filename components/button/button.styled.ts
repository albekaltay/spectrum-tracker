import styled from "styled-components"

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: ${({size} : any) => size || "12px"};
  font-weight: 700;
  padding: 10px 20px ;
  background-color: ${({backgroundcolor}: any) => backgroundcolor ?  backgroundcolor : "#fff"};
  color: ${({ color } : any) => color};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
