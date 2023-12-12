import styled from "styled-components";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  background: #020617;
  align-items: stretch;
`;

const selectedColor = "rgb(9 94 221)";
const defaultColor = "transparent";

export const TabItem  : any = styled.div`
  background-color: white;
  text-align: center;
  font-size: 16px;
  font-weight:600;
  color: #020617;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 4px solid ${({selected}: any) => (selected ? selectedColor : defaultColor)};

&:hover {
    background: rgb(9 94 221);
    color: white;
    border-bottom: 4px solid #020617;
}
`;
