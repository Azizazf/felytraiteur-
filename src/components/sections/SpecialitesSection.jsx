"use client";
import { useState } from "react";
import Image from "next/image";
import { useReveal, useRevealGroup } from "@/hooks/useReveal";
import { SPECIALITES } from "@/data/site";

function Card({ item }) {
  const [hov, setHov] = useState(false);
  const [err, setErr] = useState(false);
  return (
    <article
      className="reveal"
      style={{
        background: "var(--bg)",
        border: hov ? "1px solid var(--gold)" : "var(--border)",
        overflow: "hidden",
        cursor: "pointer",
        transform: hov ? "translateY(-5px)" : "none",
        transition: "transform .3s,border-color .25s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Zone image */}
      <div
        style={{
          height: "200px",
          position: "relative",
          overflow: "hidden",
          background: "var(--cream)",
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
              background: item.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "60px",
              transform: hov ? "scale(1.06)" : "scale(1)",
              transition: "transform .5s",
            }}
          >
            {item.emoji}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,.2)",
            opacity: hov ? 1 : 0,
            transition: "opacity .3s",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            background: hov ? "var(--gold)" : "rgba(14,10,4,.8)",
            padding: "9px 14px",
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: hov ? "#111" : "#fff",
            fontFamily: "var(--font-b)",
            transition: "all .3s",
          }}
        >
          {item.label}
        </div>
      </div>
      {/* Body */}
      <div
        style={{
          padding: "20px 18px",
          borderTop: hov ? "2px solid var(--gold)" : "2px solid transparent",
          transition: "border-color .3s",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--text-1)",
            marginBottom: "8px",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{ fontSize: "12px", color: "var(--text-2)", lineHeight: 1.7 }}
        >
          {item.desc}
        </p>
        <div
          style={{
            fontSize: "10px",
            color: "var(--gold)",
            letterSpacing: "1px",
            marginTop: "14px",
            opacity: hov ? 1 : 0,
            transform: hov ? "translateX(0)" : "translateX(-6px)",
            transition: "all .3s",
          }}
        >
          Découvrir →
        </div>
      </div>
    </article>
  );
}

export default function SpecialitesSection() {
  const headRef = useReveal();
  const gridRef = useRevealGroup({ stagger: 85 });
  return (
    <section
      style={{
        padding: "72px 40px",
        background: "var(--cream)",
        borderTop: "1px solid var(--cream-3)",
      }}
    >
      <div className="section-wrap">
        <div ref={headRef} className="reveal" style={{ marginBottom: "36px" }}>
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Nos spécialités</span>
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
            Ce que nous vous proposons
          </h2>
        </div>
        <div
          ref={gridRef}
          className="stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1px",
            background: "var(--cream-3)",
          }}
        >
          {SPECIALITES.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
