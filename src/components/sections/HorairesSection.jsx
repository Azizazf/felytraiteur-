"use client";
import { useReveal } from "@/hooks/useReveal";
import { HORAIRES, SITE } from "@/data/site";

export default function HorairesSection() {
  const headRef = useReveal();
  const leftRef = useReveal({ threshold: 0.1 });
  const rightRef = useReveal({ threshold: 0.1 });
  return (
    <section
      style={{
        padding: "72px 40px",
        background: "var(--cream-2)",
        borderTop: "1px solid var(--cream-3)",
      }}
    >
      <div className="section-wrap">
        <div ref={headRef} className="reveal" style={{ marginBottom: "28px" }}>
          <div className="eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Pratique</span>
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
            Horaires &amp; Localisation
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "48px",
          }}
        >
          {/* Left */}
          <div ref={leftRef} className="reveal-left">
            <div className="open-badge">
              <div className="open-dot" />
              <span className="open-text">Ouvert maintenant · 7j/7</span>
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "24px",
              }}
            >
              <tbody>
                {HORAIRES.map((h) => (
                  <tr
                    key={h.jour}
                    style={{ borderBottom: "1px solid var(--cream-3)" }}
                  >
                    <td
                      style={{
                        padding: "10px 0",
                        fontSize: "12px",
                        color: h.highlight ? "var(--text-1)" : "var(--text-2)",
                        fontWeight: h.highlight ? 500 : 400,
                      }}
                    >
                      {h.jour}
                    </td>
                    <td
                      style={{
                        padding: "10px 0",
                        fontSize: "12px",
                        color: "var(--gold)",
                        textAlign: "right",
                        fontWeight: 500,
                      }}
                    >
                      {h.heure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "1px",
                background: "var(--cream-3)",
              }}
            >
              {[
                {
                  icon: "📞",
                  title: "Téléphone",
                  value: SITE.phone,
                  href: `tel:${SITE.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: "📍",
                  title: "Adresse",
                  value: SITE.address.street,
                  href: SITE.address.mapsUrl,
                },
                {
                  icon: "✉",
                  title: "Email",
                  value: SITE.email,
                  href: `mailto:${SITE.email}`,
                },
              ].map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    background: "var(--bg)",
                    padding: "16px 12px",
                    textAlign: "center",
                    textDecoration: "none",
                    borderTop: "2px solid transparent",
                    transition: "all .25s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderTopColor = "var(--gold)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderTopColor = "transparent";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      display: "block",
                      marginBottom: "7px",
                    }}
                  >
                    {c.icon}
                  </span>
                  <div
                    style={{
                      fontSize: "9px",
                      fontWeight: 500,
                      color: "var(--text-1)",
                      marginBottom: "3px",
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontSize: "9px",
                      color: "var(--gold)",
                      lineHeight: 1.5,
                    }}
                  >
                    {c.value}
                  </div>
                </a>
              ))}
            </div>
          </div>
          {/* Right — Google Maps */}
          <div ref={rightRef} className="reveal-right">
            <div
              style={{
                height: "260px",
                overflow: "hidden",
                border: "var(--border)",
                marginBottom: "10px",
              }}
            >
              <iframe
                src={SITE.address.mapsEmbed}
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fely Traiteur — Grand Mbao Dakar"
              />
            </div>
            <a
              href={SITE.address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                justifyContent: "center",
                fontSize: "10px",
                color: "var(--gold)",
                letterSpacing: "1px",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              📍 Ouvrir dans Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
