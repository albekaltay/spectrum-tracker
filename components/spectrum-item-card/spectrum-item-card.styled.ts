import styled from "styled-components"

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

export const SpectrumItemCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #020617;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-right: 1px;
  margin-bottom: 1px;
  background-color: #020617;

  @media (max-width: ${({ theme }: any) => theme.mobile}) {
    margin-right: 0px;
    margin-bottom: 1px;
  }
`;
export const SpectrumItemTitle = styled.span`
  margin-bottom: 4px;
  color: #bdbdbd;
`;

export const SpectrumItemContent = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: white;
`;