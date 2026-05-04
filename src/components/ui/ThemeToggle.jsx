"use client";
import { useState, useEffect } from "react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("fely-theme");
    const d = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(d);
    document.documentElement.setAttribute("data-theme", d ? "dark" : "light");
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("fely-theme", next ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light",
    );
  };
  return (
    <button
      onClick={toggle}
      aria-label="Changer le thème"
      style={{
        width: "34px",
        height: "34px",
        border: "1px solid rgba(184,134,42,0.4)",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        color: "var(--gold)",
        transition: "all .2s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--gold)";
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "var(--gold)";
      }}
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}
