import React, { useState } from "react";
import StatCard from "../components/StatCard.jsx";
import PageShell from "../components/PageShell.jsx";

export default function EmployerDashboard() {
  const [listings, setListings] = useState([
    { id: "Software Engineer", count: 12 },
    { id: "Data Analyst", count: 6 },
    { id: "Product Manager", count: 4 },
  ]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title:"", count:0 });

  const addListing = (e) => {
    e.preventDefault();
    if(!form.title) return;
    setListings(prev => [...prev, { id: form.title, count: Number(form.count)||0 }]);
    setOpen(false); setForm({title:"",count:0});
  };

  return (
    <PageShell>
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Employer Dashboard</h1>
        <p className="text-muted text-sm">Manage job listings, review applications, and contact candidates</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Active Listings" value={listings.length} trend="+1 this month" trendUp />
        <StatCard title="Total Applications" value={28} trend="+3 this week" trendUp />
        <StatCard title="Interviews" value={7} trend="+1 scheduled" trendUp />
        <StatCard title="Offers" value={1} trend="1 pending" />
      </div>

      <div className="flex justify-between items-center mt-6">
        <h2 className="text-xl font-semibold">Your Listings</h2>
        <button className="btn btn-primary" onClick={()=>setOpen(true)}>Post New Job</button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mt-2">
        {listings.map((l,i)=>(
          <div key={i} className="card p-5 card-hover">
            <p className="font-semibold">{l.id}</p>
            <p className="text-muted text-sm">{l.count} applications</p>
            <button className="btn btn-muted mt-3">Review</button>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={()=>setOpen(false)} />
          <div className="relative w-full max-w-lg card p-6">
            <h3 className="text-lg font-semibold mb-3">Post a Job</h3>
            <form className="space-y-3" onSubmit={addListing}>
              <div>
                <label className="label">Job Title</label>
                <input className="input" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />
              </div>
              <div>
                <label className="label">Initial Applications</label>
                <input className="input" type="number" value={form.count} onChange={e=>setForm({...form, count:e.target.value})} />
              </div>
              <div className="flex gap-2 justify-end">
                <button type="button" className="btn btn-muted" onClick={()=>setOpen(false)}>Cancel</button>
                <button className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageShell>
  );
}