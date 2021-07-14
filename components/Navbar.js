import styled from "styled-components";
import { siteTitle } from '../layout'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

const Logo = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
`;

const LinkWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

const NavLink = styled.li`
  list-style: none;
  margin: 0 0.75rem;
  text-transform: uppercase;
`;

const Link = styled.a`
  color: black;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: #f9826c;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <Link>{siteTitle}</Link>
      </Logo>
      <LinkWrapper>
        <NavLink>
          <Link>home</Link>
        </NavLink>
        <NavLink>
          <Link>shop</Link>
        </NavLink>
        <NavLink>
          <Link>cart</Link>
        </NavLink>
      </LinkWrapper>
    </Nav>
  );
};

export default Navbar;
