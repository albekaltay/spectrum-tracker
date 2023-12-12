// styled
import { NavbarContainer, Nav, NavItem, Logo } from "./header.styled";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

const Header = () => {
  return (
    <NavbarContainer>
      <Nav>
        <Logo
          src="data:image/png;base64,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"
          alt=""
        />
        <NavItem>SPECTRUM</NavItem>
      </Nav>
    </NavbarContainer>
  );
};

export default Header;
