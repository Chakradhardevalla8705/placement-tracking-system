import React from "react";
import StatCard from "../components/StatCard.jsx";
import PageShell from "../components/PageShell.jsx";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", placed: 5 },
  { name: "Feb", placed: 8 },
  { name: "Mar", placed: 12 },
  { name: "Apr", placed: 9 },
  { name: "May", placed: 14 },
];

export default function OfficerDashboard() {
  const recentPlacements = [
    { student: "John Doe", company: "Tech Corp", role: "Software Engineer", date: "2024-01-15" },
    { student: "Jane Smith", company: "DataCo", role: "Data Analyst", date: "2024-01-14" },
    { student: "Mike Johnson", company: "StartupXYZ", role: "Product Manager", date: "2024-01-12" },
  ];

  return (
    <PageShell>
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Placement Officer Dashboard</h1>
        <p className="text-muted text-sm">Generate reports and monitor placement outcomes</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Students Placed" value={recentPlacements.length} trend="+2 this month" trendUp />
        <StatCard title="Active Companies" value={12} trend="+3 new" trendUp />
        <StatCard title="Open Roles" value={18} trend="-2 this week" />
        <StatCard title="Events" value={3} trend="+1 upcoming" trendUp />
      </div>

      <div className="grid gap-4 md:grid-cols-2 mt-6">
        <div className="card p-5">
          <h3 className="font-semibold mb-2">Placement Stats</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#a0a0a8" />
                <YAxis stroke="#a0a0a8" />
                <Tooltip />
                <Bar dataKey="placed" fill="#e8e8ea" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold mb-2">Recent Placements</h3>
          <div className="space-y-2">
            {recentPlacements.map((p,i)=>(
              <div key={i} className="card p-3 flex items-center justify-between card-hover">
                <div>
                  <p className="font-medium">{p.student}</p>
                  <p className="text-muted text-sm">{p.role} — {p.company}</p>
                </div>
                <span className="badge">{p.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}