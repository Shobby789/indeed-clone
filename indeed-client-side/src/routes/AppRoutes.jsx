import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Global/Layout";
const HomePage = lazy(() => import("../pages/home/HomePage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout page={<HomePage />} />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
