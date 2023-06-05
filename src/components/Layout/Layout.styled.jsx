import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  min-height: 80px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  @media screen and (min-width: 768px) {
    min-height: 112px;
  }

  @media screen and (min-width: 1200px) {
    min-height: 144px;
  }
`;

export const Container = styled.div`
  margin: auto;
  width: 100vw;

  @media screen and (min-width: 420px) {
    width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 960px) {
    width: 960px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Navigation = styled.nav`
  padding: 0 24px;

  @media screen and (min-width: 768px) {
    padding: 0 36px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 23px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
    gap: 40px;
  }

  @media screen and (min-width: 960px) {
    padding: 45px 0;
    gap: 56px;
  }
`;

export const NavItem = styled.li`
  &:last-child {
    @media screen and (min-width: 768px) {
      margin-left: auto;
    }
  }
`;

export const NavigationLink = styled(NavLink)`
  display: block;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  width: 96px;
  margin: auto;
  padding: 11px 0;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: #373737;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: background-color 400ms ease-in-out;

  &:focus,
  &:hover,
  &:active {
    background-color: #5cd3a8;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 160px;
    padding: 11px 0;
  }
  @media screen and (min-width: 960px) {
    font-size: 24px;
    width: 220px;
  }
`;

export const Section = styled.section`
  padding: 24px 0;
  text-align: center;
  min-height: calc(100% - 80px);

  @media screen and (min-width: 768px) {
    padding: 56px 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 96px 0;
  }
`;

export const FooterEl = styled.footer`
  min-height: 80px;
  width: 100%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  @media screen and (min-width: 768px) {
    min-height: 112px;
  }

  @media screen and (min-width: 1200px) {
    min-height: 144px;
  }
`;
