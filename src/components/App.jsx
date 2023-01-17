import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />
      </Routes>
    </>
  );
};
