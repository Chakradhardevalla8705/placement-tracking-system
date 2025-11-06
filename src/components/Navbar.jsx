import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg transition ${isActive ? "bg-white/5" : "hover:bg-white/5"}`;

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .4, ease: [0.16,1,0.3,1] }}
      className="sticky top-0 z-40 border-b border-line backdrop-blur bg-obsidian/70"
    >
      <div className="container-base h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-ink">PlacementHub</Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/jobs" className={linkClass}>Jobs</NavLink>
          <NavLink to="/applications" className={linkClass}>Applications</NavLink>
          <NavLink to="/student" className={linkClass}>Student</NavLink>
          <NavLink to="/employer" className={linkClass}>Employer</NavLink>
          <NavLink to="/officer" className={linkClass}>Officer</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
        </nav>
        <div className="flex gap-2">
          <Link to="/login" className="btn btn-muted">Log in</Link>
          <Link to="/signup" className="btn btn-primary">Sign up</Link>
        </div>
      </div>
    </motion.header>
  );
}