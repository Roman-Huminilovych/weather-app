import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="home"></Navigate>} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </>
  );
};
