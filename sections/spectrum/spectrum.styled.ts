import styled from "styled-components"

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

export const FlexBoxes = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: ${({ theme } : any) => theme.mobile}) {
    flex-direction: column;
  }
`;