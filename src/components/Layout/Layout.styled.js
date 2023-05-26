import { NavLink as N } from 'react-router-dom';
import styled from 'styled-components';

export const NavLink = styled(N)`
  &.active {
    color: green;
  }
`;
