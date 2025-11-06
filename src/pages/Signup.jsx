import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageShell from "../components/PageShell.jsx";

export default function Signup() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(role === "employer" ? "/employer" : role === "officer" ? "/officer" : "/student");
  };

  return (
    <PageShell>
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-4">
          <div className="mx-auto w-10 h-10 rounded-xl bg-white/10 grid place-items-center text-ink animate-shimmer">🎓</div>
          <h2 className="text-2xl font-bold mt-2">Create Account</h2>
          <p className="text-muted text-sm">Join PlacementHub to get started</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="label">Full Name</label>
            <input className="input" placeholder="John Doe" required />
          </div>
          <div>
            <label className="label">Email</label>
            <input className="input" placeholder="you@email.com" required />
          </div>
          <div>
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="••••••••" required />
          </div>
          <div>
            <label className="label">I am a</label>
            <select className="input" value={role} onChange={(e)=>setRole(e.target.value)} required>
              <option value="" disabled>Select your role</option>
              <option value="student">Student</option>
              <option value="employer">Employer</option>
              <option value="officer">Placement Officer</option>
            </select>
          </div>
          <button className="btn btn-primary w-full">Create Account</button>
        </form>
        <p className="text-center text-sm text-muted mt-3">
          Already have an account? <Link to="/login" className="underline">Sign in</Link>
        </p>
        <p className="text-center text-xs text-muted mt-2"><Link to="/">Return to Home</Link></p>
      </div>
    </PageShell>
  );
}