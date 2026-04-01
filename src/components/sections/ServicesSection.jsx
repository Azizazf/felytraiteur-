"use client";
import { useState } from "react";
import Image from "next/image";
import { useReveal, useRevealGroup } from "@/hooks/useReveal";
import { SERVICES } from "@/data/site";

function ServiceCard({ item }) {
  const [hov, setHov] = useState(false);
  const [err, setErr] = useState(false);
  return (
    <div
      className="reveal"
      style={{
        background: "var(--cream)",
        border: hov ? "1px solid var(--gold)" : "var(--border)",
        overflow: "hidden",
        cursor: "pointer",
        transform: hov ? "translateY(-5px)" : "none",
        transition: "transform .3s,border-color .25s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Image */}
      <div
        style={{
          height: "150px",
          position: "relative",
          overflow: "hidden",
          background: "var(--bg-3)",
        }}
      >
        {item.image && !err ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{
              objectFit: "cover",
              transform: hov ? "scale(1.06)" : "scale(1)",
              transition: "transform .5s",
            }}
            onError={() => setErr(true)}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              transform: hov ? "scale(1.1)" : "scale(1)",
              transition: "transform .3s",
            }}
          >
            {item.emoji}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,.15)",
            opacity: hov ? 1 : 0,
            transition: "opacity .3s",
          }}
        />
      </div>
      {/* Body */}
      <div
        style={{
          padding: "16px 18px",
          borderTop: hov ? "2px solid var(--gold)" : "2px solid transparent",
          transition: "border-color .3s",
        }}
      >
        <h3
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--text-1)",
            marginBottom: "6px",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{ fontSize: "11px", color: "var(--text-2)", lineHeight: 1.6 }}
        >
          {item.desc}
        </p>
        <div
          style={{
            width: "20px",
            height: "1px",
            background: "var(--gold)",
            margin: "12px 0 0",
            transform: hov ? "scaleX(2.5)" : "scaleX(1)",
            transition: "transform .3s",
            transformOrigin: "left",
          }}
        />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const headRef = useReveal();
  const gridRef = useRevealGroup({ stagger: 80 });
  return (
    <section
      style={{
        padding: "72px 40px",
        background: "var(--bg)",
        borderTop: "1px solid var(--cream-3)",
      }}
    >
      <div className="section-wrap">
        <div ref={headRef} className="reveal" style={{ marginBottom: "28px" }}>
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Ce que nous faisons</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-d)",
              fontSize: "clamp(24px,3vw,34px)",
              fontWeight: 300,
              color: "var(--text-1)",
              lineHeight: 1.2,
            }}
          >
            Nos services
          </h2>
        </div>
        <div
          ref={gridRef}
          className="stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "12px",
          }}
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
