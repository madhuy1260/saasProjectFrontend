// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import LandingPage from "./components/LandingPage/LandingPage";
import MailPage from "./components/MailPage/Mailpage";
import MessagePage from "./components/MessageBoard/MessageBoard";
import MeetingsPage from "./components/MeetingsPage/MeetingsPage";
import AnalyticsPage from "./components/AnalyticsPage/AnalyticsPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/LoginPage/RegisterPage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/taskboard" element={<TaskBoard />}></Route>
          <Route path="/mail" element={<MailPage />}></Route>
          <Route path="/messages" element={<MessagePage />}></Route>
          <Route path="/meetings" element={<MeetingsPage />}></Route>
          <Route path="/analytics" element={<AnalyticsPage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/Register" element={<RegisterPage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
