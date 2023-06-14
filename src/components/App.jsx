import React, { Suspense } from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>...loading</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={
                <Suspense fallback={<div>...loading</div>}>
                  <RegisterPage />
                </Suspense>
              }
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={
                <Suspense fallback={<div>...loading</div>}>
                  <LoginPage />
                </Suspense>
              }
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={
                <Suspense fallback={<div>...loading</div>}>
                  <ContactsPage />
                </Suspense>
              }
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
