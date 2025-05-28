import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import UsersPage from "./Pages/UsersPage";
import QuizPage from "./Pages/QuizPage";
import SettingsPage from "./Pages/SettingsPage";
import CoursPage from "./Pages/CoursPage";

function App() {
  return (
    <Router>
      <div style={{ position: "relative", height: "100vh" }}>
        {/* Background */}
        <div className="background">
          <div className="point point1"></div>
          <div className="point point2"></div>
          <div className="point point3"></div>
          <div className="point point4"></div>
          <div className="point point5"></div>
          <div className="point point6"></div>
        </div>

        {/* Sidebar */}
        <Sidebar />

        {/* Contenu principal */}
        <div className="content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />{" "}
            {/* Page par défaut */}
            <Route path="/Dashboard" element={<DashboardPage />} />
            <Route path="/Users" element={<UsersPage />} />
            <Route path="/Quiz" element={<QuizPage />} />
            <Route path="/Settings" element={<SettingsPage />} />
            <Route path="/cours" element={<CoursPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
