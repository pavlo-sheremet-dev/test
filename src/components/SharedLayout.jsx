import { Outlet, useLocation } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import FallBackLoader from './FallBackLoader/FallBackLoader';

const SharedLayout = () => {
  const location = useLocation();
  return (
    <>
      <AppBar />
      <Suspense fallback={<FallBackLoader />} key={location.key}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
