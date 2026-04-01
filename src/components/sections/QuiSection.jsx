"use client";
import { useReveal, useRevealGroup } from "@/hooks/useReveal";
import { STATS } from "@/data/site";
export default function QuiSection() {
  const titleRef = useReveal();
  const textRef = useReveal({ threshold: 0.1 });
  const photoRef = useReveal({ threshold: 0.1 });
  const statsRef = useRevealGroup({ stagger: 110 });
  return (
    <section
      style={{
        padding: "72px 40px",
        background: "var(--bg)",
        borderTop: "3px solid var(--gold)",
      }}
    >
      <div className="section-wrap">
        <div ref={titleRef} className="reveal" style={{ marginBottom: "32px" }}>
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Notre histoire</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-d)",
              fontSize: "clamp(26px,3.5vw,38px)",
              fontWeight: 300,
              color: "var(--text-1)",
              lineHeight: 1.15,
            }}
          >
            Qui sommes-nous ?
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "52px",
            alignItems: "center",
          }}
        >
          <div>
            <div ref={textRef} className="reveal-left">
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-2)",
                  lineHeight: 1.9,
                  marginBottom: "14px",
                }}
              >
                Fely Traiteur est un établissement multifonctionnel au cœur de
                Dakar, à Grand Mbao, alliant gastronomie sénégalaise
                authentique, fast-food savoureux et services traiteur
                événementiel haut de gamme.
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-2)",
                  lineHeight: 1.9,
                }}
              >
                Fondé avec passion, nous nous sommes imposés comme une référence
                à Dakar. Notre équipe vous accueille 7j/7, de 07h à 23h.
              </p>
            </div>
            <div
              ref={statsRef}
              className="stagger"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "1px",
                background: "var(--cream-3)",
                marginTop: "28px",
              }}
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="reveal"
                  style={{
                    background: "var(--bg)",
                    padding: "18px 12px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-d)",
                      fontSize: "30px",
                      color: "var(--gold)",
                      lineHeight: 1,
                      marginBottom: "5px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "8px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--text-3)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            ref={photoRef}
            className="reveal-right"
            style={{
              height: "300px",
              background: "var(--cream)",
              border: "var(--border)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "80px", opacity: 0.18 }}>🍽</span>
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
      </div>
    </section>
  );
}
