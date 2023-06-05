import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomePagePic = styled.img`
  width: 380px;
  margin: auto;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 688px;
    margin-bottom: 56px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 96px;
    width: 1080px;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 96px;
    margin-bottom: 96px;
  }
`;

export const HomeJoinBtn = styled(Link)`
  display: block;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 20px;
  width: 144px;
  padding: 8px 0;
  margin: auto;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
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
    width: 196px;
    padding: 14px 0;
  }

  @media screen and (min-width: 1200px) {
    font-size: 40px;
    width: 600px;
    padding: 24px 0;
  }
`;
