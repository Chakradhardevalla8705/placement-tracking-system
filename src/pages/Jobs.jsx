import React, { useMemo, useState } from "react";
import PageShell from "../components/PageShell.jsx";
import JobCard from "../components/JobCard.jsx";
import { jobs as jobData } from "../data/mock.js";
import Modal from "../modals/Modal.jsx";

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState(null);

  const jobs = useMemo(() => {
    return jobData.filter(j =>
      (search ? j.title.toLowerCase().includes(search.toLowerCase()) || j.tags.join(" ").toLowerCase().includes(search.toLowerCase()) : true) &&
      (location ? j.location.toLowerCase().includes(location.toLowerCase()) : true)
    );
  }, [search, location]);

  return (
    <PageShell>
      <div className="flex flex-col md:flex-row md:items-end gap-3 mb-4">
        <div className="flex-1">
          <label className="label">Search</label>
          <input className="input" placeholder="e.g. React, Analyst, DevOps" value={search} onChange={e=>setSearch(e.target.value)} />
        </div>
        <div className="w-full md:w-64">
          <label className="label">Location</label>
          <input className="input" placeholder="e.g. Bangalore, Remote" value={location} onChange={e=>setLocation(e.target.value)} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job)=> <JobCard key={job.id} job={job} onDetails={setSelected} />)}
      </div>

      <Modal open={!!selected} onClose={()=>setSelected(null)} title={selected?.title || "Job"}>
        {selected && (
          <div className="space-y-2">
            <p className="text-muted">{selected.company} — {selected.location}</p>
            <p className="badge">Salary: {selected.salary}</p>
            <p className="text-sm mt-2">{selected.desc}</p>
            <div className="flex gap-2 mt-2">
              {selected.tags.map(t=><span key={t} className="badge">{t}</span>)}
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button className="btn btn-muted" onClick={()=>setSelected(null)}>Close</button>
              <button className="btn btn-primary">Apply</button>
            </div>
          </div>
        )}
      </Modal>
    </PageShell>
  );
}