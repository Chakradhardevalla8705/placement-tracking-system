import React from "react";
import StatCard from "../components/StatCard.jsx";
import JobCard from "../components/JobCard.jsx";
import { jobs, applications } from "../data/mock.js";
import PageShell from "../components/PageShell.jsx";

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <PageShell>
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
          <p className="text-muted text-sm">Track your applications and explore new opportunities</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Active Applications" value={applications.length} trend="+2 this week" trendUp />
          <StatCard title="Interviews Scheduled" value={applications.filter(a => a.status.includes('Interview')).length} trend="+1 upcoming" trendUp />
          <StatCard title="Offers Received" value={0} trend="No offers yet" />
          <StatCard title="Profile Views" value={42} trend="+8 this month" trendUp />
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-6">
          <div className="card p-5">
            <h3 className="font-semibold mb-2">Student Profile</h3>
            <p className="text-sm text-muted">Name: John Doe</p>
            <p className="text-sm text-muted">Course: B.Tech CSE</p>
            <p className="text-sm text-muted">GPA: 8.4</p>
            <p className="text-sm text-muted">Email: john@college.edu</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold mb-2">Notifications</h3>
            <ul className="text-sm text-muted space-y-1 list-disc pl-4">
              <li>New job posted: DevOps Engineer (Remote)</li>
              <li>Interview scheduled: Data Analyst — 13 Feb, 11:00 AM</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <h2 className="text-xl font-semibold">Recommended for You</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {jobs.slice(0,2).map((job)=> <JobCard key={job.id} job={job} />)}
          </div>
        </div>
      </PageShell>
    </div>
  );
}