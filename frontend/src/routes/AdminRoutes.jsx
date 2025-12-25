import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from '../pages/Login';
import AdminDashboard from '../pages/admin/Dashboard';
import Users from "../pages/admin/users/Index";
import Leads from "../pages/admin/leads/Index";
import Settings from "../pages/admin/settings/Index";
import Campaign from "../pages/admin/campaigns/Index";
import CreateUser from "../pages/admin/users/Create";
import CampaignCreate from "../pages/admin/campaigns/Create";


export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      
      <Route path="/main/admin/dashboard" element={
        <ProtectedRoute>
          <AdminDashboard /> 
        </ProtectedRoute>} />
      <Route path="/main/admin/users" element={
        <ProtectedRoute>
          <Users />
        </ProtectedRoute>} />
      <Route path="/main/admin/users/create" element={<CreateUser />} />
      <Route path="/main/admin/campaigns" element={<Campaign />} />
      <Route path="/main/admin/campaigns/create" element={<CampaignCreate />} />
      <Route path="/main/admin/leads" element={<Leads />} />
      <Route path="/main/admin/settings" element={<Settings />} />
    </Routes>
  );
}
