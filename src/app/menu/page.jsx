"use client";
import { useState } from "react";
import { MENU_CATEGORIES, MENU_ITEMS, SITE } from "@/data/site";
function MenuCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        background: hov ? "var(--cream)" : "var(--bg)",
        padding: "20px 18px",
        borderBottom: hov ? "2px solid var(--gold)" : "2px solid transparent",
        cursor: "pointer",
        transition: "all .2s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span
        style={{
          fontSize: "30px",
          display: "block",
          marginBottom: "8px",
          transform: hov ? "scale(1.12)" : "scale(1)",
          transition: "transform .3s",
        }}
      >
        {item.emoji}
      </span>
      <div
        style={{
          fontSize: "12px",
          fontWeight: 500,
          color: "var(--text-1)",
          marginBottom: "3px",
        }}
      >
        {item.name}
      </div>
      <div
        style={{
          fontSize: "9px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "4px",
        }}
      >
        {item.category}
      </div>
      <div style={{ fontSize: "10px", color: "var(--text-3)" }}>
        {item.desc}
      </div>
    </div>
  );
}
export default function MenuPage() {
  const [active, setActive] = useState("Tout");
  const items =
    active === "Tout"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((i) => i.category === active);
  return (
    <>
      <section
        style={{
          padding: "64px 40px 40px",
          background: "linear-gradient(160deg,#0f0800,#1a1208,#2d1a00)",
          textAlign: "center",
          borderBottom: "1px solid rgba(184,134,42,.18)",
        }}
      >
        <div
          className="eyebrow"
          style={{ justifyContent: "center", marginBottom: "14px" }}
        >
          <div className="eyebrow-line" />
          <span className="eyebrow-text">Notre carte</span>
          <div className="eyebrow-line" />
        </div>
        <h1
          style={{
            fontFamily: "var(--font-d)",
            fontSize: "clamp(28px,4vw,46px)",
            fontWeight: 300,
            color: "#FAF5EC",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Menu &amp; Spécialités
        </h1>
        <a
          href={SITE.orderUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-gold"
        >
          🛒 Passer commande en ligne
        </a>
      </section>
      <section style={{ padding: "44px 40px 72px", background: "var(--bg)" }}>
        <div className="section-wrap">
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "28px",
              overflowX: "auto",
              paddingBottom: "4px",
            }}
          >
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="btn"
                style={{
                  background: active === cat ? "var(--gold)" : "transparent",
                  border:
                    active === cat ? "1px solid var(--gold)" : "var(--border)",
                  color: active === cat ? "#fff" : "var(--text-2)",
                  padding: "7px 18px",
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "1px",
              background: "var(--cream-3)",
            }}
          >
            {items.map((item, i) => (
              <MenuCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
