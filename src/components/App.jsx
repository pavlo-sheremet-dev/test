
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { GlobalStyle } from './GlobalStyled';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

// const test = 'test'



export const App = () => {
  return <div>hello world</div>;
};
