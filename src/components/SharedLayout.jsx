import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import FallBackLoader from './FallBackLoader/FallBackLoader';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<FallBackLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
