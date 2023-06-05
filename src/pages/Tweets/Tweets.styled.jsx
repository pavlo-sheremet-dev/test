import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TweetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`;

export const GoBackBtn = styled(Link)`
  display: inline-block;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  width: 196px;
  padding: 14px 0;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 40px;
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
    margin-bottom: 56px;
    font-size: 24px;
    width: 220px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 80px;
    font-size: 24px;
    width: 276px;
  }
`;

export const NoTweetsMessage = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 2;
`;

export const TweetsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 56px;
  }

  @media screen and (min-width: 960px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 80px;
    gap: 30px;
  }
`;

export const LoadMoreBtn = styled.button`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  width: 196px;
  padding: 14px 0;
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
    width: 220px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 24px;
    width: 276px;
  }
`;
