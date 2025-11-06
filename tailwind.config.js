/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0a0a0b",
        panel: "#0f0f12",
        ink: "#e8e8ea",
        muted: "#a0a0a8",
        line: "#1b1b20",
        neon: "#a6ffe4",
        danger: "#ff6060",
        success: "#5cff8b"
      },
      boxShadow: {
        glow: "0 10px 30px rgba(166,255,228,.12), inset 0 1px 0 rgba(255,255,255,.03)",
        card: "0 12px 40px rgba(0,0,0,.35)"
      },
      keyframes: {
        fadeInUp: { "0%": {opacity:0, transform:"translateY(12px)"}, "100%": {opacity:1, transform:"translateY(0)"} },
        float: { "0%": { transform:"translateY(0) scale(1)" }, "50%": { transform:"translateY(-20px) scale(1.05)" }, "100%": { transform:"translateY(0) scale(1)" } },
        shimmer: { "0%": { opacity:.35 }, "50%": { opacity:.6 }, "100%": { opacity:.35 } }
      },
      animation: {
        fadeInUp: "fadeInUp .6s ease-out both",
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 4s ease-in-out infinite"
      },
      backdropBlur: { xs: "2px" }
    },
  },
  plugins: [],
}