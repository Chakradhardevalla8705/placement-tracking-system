import React, { useState } from "react";
import PageShell from "../components/PageShell.jsx";
import { applications as initial } from "../data/mock.js";

const stages = ["Applied","Under Review","Interview","Offer"];

export default function Applications() {
  const [apps, setApps] = useState(initial);

  const withdraw = (id) => setApps(prev => prev.filter(a => a.id !== id));

  return (
    <PageShell>
      <h1 className="text-2xl font-bold mb-4">Applications</h1>
      <div className="space-y-3">
        {apps.map((a)=>(
          <div key={a.id} className="card p-5 card-hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{a.jobTitle}</p>
                <p className="text-muted text-sm">{a.company} — {a.location}</p>
              </div>
              <div className="text-right">
                <p className="badge">{a.status}</p>
                <p className="text-xs text-muted mt-1">Applied: {a.appliedDate}</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-ink" style={{ width: `${(a.stage-1)/(stages.length-1)*100}%` }} />
              </div>
              <div className="flex justify-between text-xs text-muted mt-1">
                {stages.map(s=><span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-3">
              <button className="btn btn-muted">Track</button>
              <button className="btn btn-primary" onClick={()=>withdraw(a.id)}>Withdraw</button>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}