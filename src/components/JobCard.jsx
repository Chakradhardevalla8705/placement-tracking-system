import React from "react";
import { motion } from "framer-motion";

export default function JobCard({ job, onDetails }) {
  return (
    <motion.div whileHover={{ y: -3 }} className="card card-hover p-5 space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <span className="badge">{job.location}</span>
      </div>
      <p className="text-muted">{job.company}</p>
      <div className="flex flex-wrap gap-2">
        {job.tags?.map((t) => <span key={t} className="badge">{t}</span>)}
      </div>
      <div className="pt-2 flex gap-2">
        <button className="btn btn-primary">Apply</button>
        <button className="btn btn-muted" onClick={()=>onDetails?.(job)}>Details</button>
      </div>
    </motion.div>
  );
}