// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import LoginPage from "./components/LoginPage";
import AccountsModule from "./components/AccountsPanel";
import Dashboard from "./components/Dashboard";
import InquiryModule from "./components/InquiryCapture";
import QuotationModule from "./components/QuotationBuilder";
import ChecklistModule from "./components/ChecklistManagement";
import LogisticsModule from "./components/LogisticsTracker";
import PurchaseOrderModule from "./components/POD";
import AdminModule from "./components/AdminPanel";
import HelpModule from "./components/HelpCenter";
import POGeneratorModule from "./components/POGenerator";
import ViewDocModule from "./components/ViewDocuments";
import ReportsModule from "./components/Reports";
import ForgotPasswordPage from "./components/ForgotPassword";
import RegisterPage from "./components/Registerpage";

function App() {
  const user = "hello";
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/register"
            element={!user ? <RegisterPage /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/forgot-password"
            element={
              !user ? <ForgotPasswordPage /> : <Navigate to="/dashboard" />
            }
          />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inquiry/*" element={<InquiryModule />} />
          <Route path="quotation/*" element={<QuotationModule />} />
          <Route path="checklist/*" element={<ChecklistModule />} />
          <Route path="pogenerator/*" element={<POGeneratorModule />} />
          <Route path="logistics/*" element={<LogisticsModule />} />
          <Route path="pod/*" element={<PurchaseOrderModule />} />
          <Route path="accounts/*" element={<AccountsModule />} />
          <Route path="admin/*" element={<AdminModule />} />
          <Route path="Viewdoc/*" element={<ViewDocModule />} />
          <Route path="reports/*" element={<ReportsModule />} />
          <Route path="help" element={<HelpModule />} />
          <Route index element={<Navigate to="dashboard" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
