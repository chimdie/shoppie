import Link from "next/link";
import { useSelector } from "react-redux";
import { siteTitle } from "../layout";
import styled from "styled-components";

const Nav = styled.div`
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
  text-transform: capitalize;
`;

const StyledLink = styled.a`
  color: black;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: hsl(30, 100%, 50%);
    cursor: pointer;
  }
`;

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return (
    <Nav>
      <Logo>
        <Link href="/" passHref>
          <StyledLink>{siteTitle}</StyledLink>
        </Link>
      </Logo>
      <LinkWrapper>
        <NavLink>
          <Link href="/" passHref>
            <StyledLink>home</StyledLink>
          </Link>
        </NavLink>
        <NavLink>
          <Link href="/shop" passHref>
            <StyledLink>shop</StyledLink>
          </Link>
        </NavLink>
        <NavLink>
          <Link href="/cart" passHref>
            <StyledLink>cart ({getItemsCount()})</StyledLink>
          </Link>
        </NavLink>
      </LinkWrapper>
    </Nav>
  );
};

// Navbar.getLayout = (Navbar) => <Layout>{Navbar}</Layout>;

export default Navbar;
