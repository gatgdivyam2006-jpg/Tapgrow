import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        emerald: "#10B981",
        mist: "#F8FAFC",
        line: "#E2E8F0"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(15, 23, 42, 0.10)",
        glow: "0 18px 44px rgba(16, 185, 129, 0.22)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
