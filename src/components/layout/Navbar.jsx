"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS, SITE } from "@/data/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        FELY TRAITEUR
      </Link>
      <div className={styles.links}>
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.link} ${pathname === href ? styles.active : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className={styles.right}>
        <ThemeToggle />
        {/* Bouton Réservation */}
        <Link href="/contact" className={styles.ctaSecondary}>
          Réservation
        </Link>
        {/* Bouton Passer commande */}
        <a
          href={SITE.orderUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
        >
          🛒 Commander
        </a>
      </div>
      <button
        className={styles.burger}
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
      >
        <span
          style={{
            transform: open ? "rotate(45deg) translate(5px,5px)" : "none",
            transition: "all .25s",
            display: "block",
            width: "22px",
            height: "1.5px",
            background: "var(--gold)",
          }}
        />
        <span
          style={{
            opacity: open ? 0 : 1,
            transition: "all .25s",
            display: "block",
            width: "22px",
            height: "1.5px",
            background: "var(--gold)",
          }}
        />
        <span
          style={{
            transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none",
            transition: "all .25s",
            display: "block",
            width: "22px",
            height: "1.5px",
            background: "var(--gold)",
          }}
        />
      </button>
      {open && (
        <div className={styles.mobile}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={styles.mlink}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className={styles.mobileBtns}>
            <Link
              href="/contact"
              className={styles.mobileSec}
              onClick={() => setOpen(false)}
            >
              Réservation
            </Link>
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.mobileCta}
              onClick={() => setOpen(false)}
            >
              🛒 Commander
            </a>
          </div>
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
