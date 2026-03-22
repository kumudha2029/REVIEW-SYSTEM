// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Reviews from "../pages/Reviews";
import Insights from "../pages/Insights";
import Alerts from "../pages/Alerts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/alerts" element={<Alerts />} />
    </Routes>
  );
};

export default AppRoutes;