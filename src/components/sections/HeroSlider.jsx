"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SLIDES, SITE } from "@/data/site";
import styles from "./HeroSlider.module.css";

export default function HeroSlider() {
  const [cur, setCur] = useState(0);
  const [errs, setErrs] = useState({});
  const next = useCallback(() => setCur((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(
    () => setCur((c) => (c - 1 + SLIDES.length) % SLIDES.length),
    [],
  );
  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className={styles.hero}>
      {/* Track slides */}
      <div
        className={styles.track}
        style={{ transform: `translateX(-${cur * (100 / SLIDES.length)}%)` }}
      >
        {SLIDES.map((s, i) => (
          <div key={s.id} className={styles.slide}>
            {s.image && !errs[s.id] ? (
              <Image
                src={s.image}
                alt={s.alt}
                fill
                priority={i === 0}
                style={{ objectFit: "cover" }}
                sizes="100vw"
                onError={() => setErrs((e) => ({ ...e, [s.id]: true }))}
              />
            ) : (
              <div
                style={{ width: "100%", height: "100%", background: s.bg }}
              />
            )}
            <div className={styles.overlay} />
          </div>
        ))}
      </div>

      {/* Label slide actif */}
      <div className={styles.slideLabel}>{SLIDES[cur].label}</div>

      {/* Centre : logo + boutons */}
      <div className={styles.center}>
        <div className={styles.box}>
          <p className={styles.pre}>{SITE.sub}</p>
          <h1 className={styles.title}>
            FELY <em className={styles.em}>Traiteur</em>
          </h1>
          <div className={styles.orn}>
            <span className={styles.ornLine} />
            <span className={styles.ornDiamond} />
            <span className={styles.ornLine} />
          </div>
          <p className={styles.tagline}>{SITE.tagline}</p>
          <div className={styles.ctaRow}>
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.btnOrder}
            >
              🛒 Passer commande
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className={styles.btnWa}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Barre bas ── */}
      <div className={styles.bar}>
        {/* Ligne 1 mobile / gauche desktop : adresse + tél + commande */}
        <div className={styles.barInfos}>
          {/* Adresse */}
          <a
            href={SITE.address.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.barItem}
          >
            <span className={styles.barIcon}>📍</span>
            <div>
              <strong>{SITE.address.street}</strong>
              <span>
                {SITE.address.detail} — {SITE.address.city}
              </span>
            </div>
          </a>

          {/* Téléphone */}
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className={styles.barItem}
          >
            <span className={styles.barIcon}>📞</span>
            <div>
              <strong>{SITE.phone}</strong>
              <span>
                {SITE.days} · {SITE.hours}
              </span>
            </div>
          </a>

          {/* Commander — visible desktop seulement (caché sur mobile via CSS) */}
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.barOrder}
          >
            <span className={styles.barIcon}>🛒</span>
            <div>
              <strong>Commander en ligne</strong>
              <span>Livraison · Emporter</span>
            </div>
          </a>
        </div>

        {/* Ligne 2 mobile / droite desktop : dots + flèches + commander (mobile) */}
        <div className={styles.ctrl}>
          {/* Bouton commander inline — visible mobile seulement */}
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.ctrlOrder}
          >
            🛒 Commander
          </a>

          <div className={styles.dots}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === cur ? styles.dotOn : ""}`}
                onClick={() => setCur(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className={styles.arrows}>
            <button className={styles.arr} onClick={prev}>
              ←
            </button>
            <button className={styles.arr} onClick={next}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
