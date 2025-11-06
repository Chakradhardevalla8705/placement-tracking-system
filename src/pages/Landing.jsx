import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageShell from "../components/PageShell.jsx";

export default function Landing() {
  return (
    <div className="space-y-8">
      <PageShell>
        <div className="text-center py-16">
          <div className="inline-flex items-center gap-2 text-sm text-ink/80 bg-white/5 rounded-full px-3 py-1 mb-4 border border-white/10">
            🎓 PlacementHub
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink">Connect Talent with Opportunity</h1>
          <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">
            A premium blacked‑out experience for students, employers and placement officers.
          </p>
          <div className="flex gap-3 justify-center mt-6">
            <Link to="/student" className="btn btn-primary">I’m a Student</Link>
            <Link to="/jobs" className="btn btn-muted">Browse Jobs</Link>
          </div>
        </div>
      </PageShell>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["For Students","For Employers","For Officers","For Admins"].map((t,i)=>(
          <div key={i} className="card p-5 card-hover">
            <p className="font-medium">{t}</p>
            <p className="text-sm text-muted mt-1">Track applications, post jobs, review candidates & generate reports.</p>
          </div>
        ))}
      </section>
    </div>
  );
}