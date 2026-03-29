"use client";
import { useState } from "react";
import { useReveal, useRevealGroup } from "@/hooks/useReveal";
import { VALEURS, SITE } from "@/data/site";

function ValeurCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="reveal"
      style={{
        background: "var(--cream)",
        padding: "28px 24px",
        borderTop: hov ? "2px solid var(--gold)" : "2px solid transparent",
        transition: "border-color 0.25s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span
        style={{
          fontSize: "26px",
          display: "block",
          marginBottom: "13px",
          transform: hov ? "scale(1.15)" : "scale(1)",
          transition: "transform 0.3s",
        }}
      >
        {item.emoji}
      </span>
      <h3
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "var(--text-1)",
          marginBottom: "8px",
        }}
      >
        {item.title}
      </h3>
      <p style={{ fontSize: "11px", color: "var(--text-2)", lineHeight: 1.65 }}>
        {item.desc}
      </p>
    </div>
  );
}

export default function AProposPage() {
  const titleRef = useReveal();
  const textRef = useReveal({ threshold: 0.1 });
  const photoRef = useReveal({ threshold: 0.1 });
  const engHead = useReveal();
  const engGrid = useRevealGroup({ stagger: 110 });
  const merciRef = useReveal({ threshold: 0.2 });

  return (
    <>
      {/* ── 1. Hero 2 colonnes → 1 sur mobile ── */}
      <section
        style={{
          padding: "72px 40px",
          background: "var(--bg)",
          borderTop: "3px solid var(--gold)",
        }}
      >
        <div
          className="section-wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "52px",
            alignItems: "start",
          }}
        >
          <div>
            <div
              ref={titleRef}
              className="reveal-left"
              style={{ marginBottom: "24px" }}
            >
              <div className="eyebrow" style={{ marginBottom: "12px" }}>
                <div className="eyebrow-line" />
                <span className="eyebrow-text">Notre histoire</span>
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-d)",
                  fontSize: "clamp(28px,3.5vw,44px)",
                  fontWeight: 300,
                  color: "var(--text-1)",
                  lineHeight: 1.15,
                }}
              >
                L'âme de
                <br />
                Fely Traiteur
              </h1>
            </div>
            <div ref={textRef} className="reveal">
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-2)",
                  lineHeight: 1.9,
                  marginBottom: "14px",
                }}
              >
                Fondé à Dakar avec passion et détermination, Fely Traiteur est
                né d'une vision simple : offrir une cuisine de qualité,
                authentique et accessible dans un cadre chaleureux au cœur de
                Grand Mbao.
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-2)",
                  lineHeight: 1.9,
                  marginBottom: "22px",
                }}
              >
                Installés à la Cité Baobab, à côté de Cabis School, nous avons
                su tisser des liens forts avec notre communauté. Chaque plat
                raconte une histoire, chaque événement est une célébration
                partagée.
              </p>
              <blockquote
                style={{
                  fontFamily: "var(--font-d)",
                  fontSize: "16px",
                  fontStyle: "italic",
                  color: "var(--text-2)",
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "18px",
                  lineHeight: 1.75,
                }}
              >
                "On ne pouvait pas rêver mieux — c'est la philosophie qui guide
                chacun de nos plats et chacun de nos services."
              </blockquote>
            </div>
          </div>

          <div
            ref={photoRef}
            className="reveal-right"
            style={{
              height: "380px",
              background: "var(--cream)",
              border: "var(--border)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "90px", opacity: 0.18 }}>👨‍🍳</span>
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--text-3)",
              }}
            >
              Votre photo ici
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. Engagements ── */}
      <section
        style={{
          padding: "72px 40px",
          background: "var(--cream)",
          borderTop: "1px solid var(--cream-3)",
        }}
      >
        <div className="section-wrap">
          <div
            ref={engHead}
            className="reveal"
            style={{ marginBottom: "32px" }}
          >
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Nos engagements</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-d)",
                fontSize: "clamp(22px,2.5vw,32px)",
                fontWeight: 300,
                color: "var(--text-1)",
              }}
            >
              Pourquoi nous choisir ?
            </h2>
          </div>
          {/* auto-fit → 3 cols desktop, 1 mobile */}
          <div
            ref={engGrid}
            className="stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              background: "var(--cream-3)",
            }}
          >
            {VALEURS.map((v) => (
              <ValeurCard key={v.title} item={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Message fidélisation ── */}
      <section
        style={{
          padding: "80px 40px",
          background: "var(--bg)",
          borderTop: "1px solid var(--cream-3)",
        }}
      >
        <div
          ref={merciRef}
          className="reveal-scale"
          style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}
        >
          <div className="orn" style={{ marginBottom: "28px" }}>
            <span className="orn-l" />
            <span className="orn-d" />
            <span className="orn-l" />
          </div>
          <blockquote
            style={{
              fontFamily: "var(--font-d)",
              fontSize: "clamp(15px,2vw,22px)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--text-2)",
              lineHeight: 1.85,
              marginBottom: "24px",
            }}
          >
            "Merci à toute notre clientèle fidèle qui nous fait confiance depuis
            notre création. Votre satisfaction est notre plus belle récompense
            et notre moteur quotidien. Nous sommes fiers de vous servir chaque
            jour et nous nous engageons à toujours faire mieux."
          </blockquote>
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            — L'équipe {SITE.name}
          </p>
          <div className="orn" style={{ marginTop: "28px" }}>
            <span className="orn-l" />
            <span className="orn-d" />
            <span className="orn-l" />
          </div>
        </div>
      </section>
    </>
  );
}
