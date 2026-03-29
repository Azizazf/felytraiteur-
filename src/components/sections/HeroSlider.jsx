'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { SLIDES, SITE } from '@/data/site'
import styles from './HeroSlider.module.css'

export default function HeroSlider() {
  const [cur, setCur] = useState(0)
  const next = useCallback(() => setCur(c => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCur(c => (c - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className={styles.hero}>

      {/* ── Track des slides ── */}
      <div
        className={styles.track}
        style={{ transform: `translateX(-${cur * (100 / SLIDES.length)}%)` }}
      >
        {SLIDES.map((s, i) => (
          <div key={s.id} className={styles.slide}>

            {s.image ? (
              /* Vraie photo */
              <Image
                src={s.image}
                alt={s.alt || s.label}
                fill
                priority={i === 0}
                style={{ objectFit: 'cover' }}
                sizes="100vw"
              />
            ) : (
              /* Fallback couleur si pas d'image */
              <div style={{ width:'100%', height:'100%', background: s.bg }} />
            )}

            {/* Overlay sombre pour lisibilité du texte */}
            <div className={styles.overlay} />

          </div>
        ))}
      </div>

      {/* ── Indicateur de slide actuel (label) ── */}
      <div className={styles.slideLabel}>
        {SLIDES[cur].label}
      </div>

      {/* ── Contenu centré ── */}
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
          <p className={styles.sub}>{SITE.tagline} — Dakar</p>
        </div>
      </div>

      {/* ── Barre infos + contrôles ── */}
      <div className={styles.bar}>
        <div className={styles.barInfos}>
          <div className={styles.barItem}>
            <span>📍</span>
            <div>
              <strong>{SITE.address.street}</strong>
              <span>{SITE.address.detail} — {SITE.address.city}</span>
            </div>
          </div>
          <div className={styles.barItem}>
            <span>📞</span>
            <div>
              <strong>{SITE.phone}</strong>
              <span>{SITE.days} · {SITE.hours}</span>
            </div>
          </div>
        </div>

        <div className={styles.ctrl}>
          {/* Dots */}
          <div className={styles.dots}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === cur ? styles.dotOn : ''}`}
                onClick={() => setCur(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          {/* Flèches */}
          <div className={styles.arrows}>
            <button className={styles.arr} onClick={prev} aria-label="Précédent">←</button>
            <button className={styles.arr} onClick={next} aria-label="Suivant">→</button>
          </div>
        </div>
      </div>

    </section>
  )
}
