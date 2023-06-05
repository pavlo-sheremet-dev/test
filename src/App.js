import { Navigate, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Layout from 'components/Layout/Layout';

// const Layout = lazy(() => import('./components/Layout/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
