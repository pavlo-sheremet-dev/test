import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Nav = styled.nav`
  display: flex;
  gap: 7px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px 0 12px 0;
  font-size: 14px;
  @media screen and (min-width: 420px) {
    font-size: 20px;
  }
  font-weight: 700;
  color: black;

  &.active {
    color: white;
  }
`;
