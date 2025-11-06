import React from "react";
import BackgroundBubbles from "./BackgroundBubbles.jsx";

export default function PageShell({ children, watermark=true }) {
  return (
    <section className="section-bg relative overflow-hidden border border-line rounded-2xl p-6 md:p-8">
      <BackgroundBubbles />
      {watermark && <div className="watermark">PlacementHub</div>}
      <div className="relative">{children}</div>
    </section>
  );
}