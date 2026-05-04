"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Modal({ item, onClose }) {
  const [imgErr, setImgErr] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600);
    check();
    window.addEventListener("resize", check);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("resize", check);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "rgba(10,8,0,0.82)",
          backdropFilter: "blur(6px)",
          animation: "fadeIn .25s ease",
        }}
      />

      {/* Fenêtre */}
      <div
        style={{
          position: "fixed",
          zIndex: 201,
          background: "var(--bg)",
          border: "1px solid rgba(184,134,42,0.4)",
          overflowY: "auto",
          ...(isMobile
            ? {
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: "16px 16px 0 0",
                animation: "slideUpMobile .35s ease",
                maxHeight: "88vh",
              }
            : {
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "min(520px, 92vw)",
                borderRadius: "2px",
                animation: "slideUp .3s ease",
                maxHeight: "88vh",
              }),
        }}
      >
        {/* Poignée mobile */}
        {isMobile && (
          <div
            style={{
              width: "40px",
              height: "4px",
              background: "rgba(184,134,42,0.3)",
              borderRadius: "2px",
              margin: "12px auto 0",
            }}
          />
        )}

        {/* Image */}
        <div
          style={{
            height: isMobile ? "190px" : "230px",
            position: "relative",
            background: "var(--cream)",
            flexShrink: 0,
            marginTop: isMobile ? "8px" : 0,
          }}
        >
          {item.image && !imgErr ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
              onError={() => setImgErr(true)}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: item.bg || "var(--cream)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "60px" : "80px",
              }}
            >
              {item.emoji}
            </div>
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom,transparent 50%,rgba(10,8,0,.55) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "16px",
              fontSize: "9px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#fff",
              fontFamily: "var(--font-b)",
            }}
          >
            {item.label || item.title}
          </div>
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            aria-label="Fermer"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "36px",
              height: "36px",
              background: "rgba(10,8,0,.75)",
              border: "1px solid rgba(184,134,42,.4)",
              color: "var(--gold)",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "#111";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(10,8,0,.75)";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            ✕
          </button>
        </div>

        {/* Contenu */}
        <div
          style={{ padding: isMobile ? "20px 20px 28px" : "24px 28px 32px" }}
        >
          <div
            style={{
              borderLeft: "3px solid var(--gold)",
              paddingLeft: "14px",
              marginBottom: "14px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-d)",
                fontSize: isMobile ? "22px" : "clamp(20px,3vw,26px)",
                fontWeight: 300,
                color: "var(--text-1)",
                lineHeight: 1.2,
              }}
            >
              {item.title}
            </h2>
          </div>

          <p
            style={{
              fontSize: "13px",
              color: "var(--text-2)",
              lineHeight: 1.85,
            }}
          >
            {item.desc}
          </p>

          {/* Fermer sur mobile */}
          {isMobile && (
            <button
              onClick={onClose}
              style={{
                width: "100%",
                marginTop: "20px",
                background: "transparent",
                border: "1px solid var(--border-c)",
                color: "var(--text-3)",
                fontSize: "11px",
                cursor: "pointer",
                padding: "10px",
                fontFamily: "var(--font-b)",
              }}
            >
              Fermer
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes slideUp{from{opacity:0;transform:translate(-50%,-46%)}to{opacity:1;transform:translate(-50%,-50%)}}
        @keyframes slideUpMobile{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </>
  );
}
