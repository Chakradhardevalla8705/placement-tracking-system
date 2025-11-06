import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import EmployerDashboard from "./pages/EmployerDashboard.jsx";
import OfficerDashboard from "./pages/OfficerDashboard.jsx";
import Jobs from "./pages/Jobs.jsx";
import Applications from "./pages/Applications.jsx";
import Courses from "./pages/Courses.jsx";

function PageTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="container-base space-y-8">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/student" element={<StudentDashboard />} />
              <Route path="/employer" element={<EmployerDashboard />} />
              <Route path="/officer" element={<OfficerDashboard />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </PageTransition>
        </div>
      </main>
      <footer className="py-8 text-center text-sm text-muted border-t border-line">
        © {new Date().getFullYear()} PlacementHub.
      </footer>
    </div>
  );
}