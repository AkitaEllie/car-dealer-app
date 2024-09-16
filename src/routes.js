import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CatalogPage from './pages/CatalogPage';
import AdminDashboard from './pages/AdminDashboard';
import SalesReportPage from './pages/SalesReportPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage'

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={isAuthenticated() ? <Navigate to="/catalog" /> : <Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/reports" element={<SalesReportPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
