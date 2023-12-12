import styled from "styled-components"

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

export const StyledCard = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px;
  padding: 30px 40px;
  color: "white";
  min-height: 320px;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const StyledCardTitle = styled.h2`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

export const StyledCardBody = styled.div`
  color: white;
`;
