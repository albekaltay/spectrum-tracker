import styled from "styled-components";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

export const NavbarContainer = styled.header`
  background-color: ${({ theme } : any) => theme.colors.header};
  padding: 10px 50px;
  color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #020617;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 40px; */
  width: 100%;


  @media ( max-width: ${({theme}: any) => theme.mobile}  ) {
    flex-direction: column
  }
`;

export const NavItem = styled.span`
 color: rgb(9, 94, 221);
 font-size:16px;
 font-weight:700; 
`

export const Logo = styled.img`
  height: 100px;
  min-width: 200px;

  @media ( max-width: ${({theme} : any) => theme.mobile}  ) {
    margin-bottom: 10px;
  }
`;

