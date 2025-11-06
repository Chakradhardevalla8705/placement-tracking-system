import React from "react";
import PageShell from "../components/PageShell.jsx";
import { courses } from "../data/mock.js";

export default function Courses() {
  return (
    <PageShell>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map(c=>(
          <a key={c.id} href={c.link} className="card p-5 card-hover">
            <p className="font-semibold">{c.title}</p>
            <p className="text-muted text-sm">{c.provider} • {c.level}</p>
            <span className="badge mt-2 inline-block">Learn more</span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}