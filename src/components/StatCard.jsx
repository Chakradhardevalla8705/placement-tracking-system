import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ title, value, trend, trendUp }) {
  return (
    <motion.div whileHover={{ scale: 1.015 }} className="card card-hover p-5">
      <p className="text-sm text-muted mb-1">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
      {trend && <p className={`text-sm mt-2 ${trendUp ? "text-success" : "text-danger"}`}>{trend}</p>}
    </motion.div>
  );
}