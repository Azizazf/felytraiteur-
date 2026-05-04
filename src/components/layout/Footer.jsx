import Link from "next/link";
import { SITE, NAV_LINKS } from "@/data/site";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.logo}>FELY TRAITEUR</div>
          <p className={styles.motto}>"{SITE.tagline}"</p>
          <div className={styles.contact}>
            <span>{SITE.address.street}</span>
            <span>
              {SITE.address.detail}, {SITE.address.city}
            </span>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className={styles.alink}
            >
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className={styles.alink}>
              {SITE.email}
            </a>
          </div>
        </div>
        <div>
          <h4 className={styles.colTitle}>Navigation</h4>
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className={styles.flink}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h4 className={styles.colTitle}>Horaires</h4>
          <p className={styles.openLbl}>{SITE.days}</p>
          <p className={styles.openHr}>{SITE.hours}</p>
          <div className={styles.sep} />
          <h4 className={styles.colTitle}>Réseaux</h4>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noreferrer"
            className={styles.flink}
          >
            Instagram — {SITE.social.igHandle}
          </a>
          <a
            href={SITE.social.tiktok}
            target="_blank"
            rel="noreferrer"
            className={styles.flink}
          >
            TikTok — {SITE.social.ttHandle}
          </a>
          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noreferrer"
            className={styles.flink}
          >
            Facebook
          </a>
        </div>
        <div>
          <h4 className={styles.colTitle}>Commander</h4>
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.orderBtn}
          >
            🛒 Passer commande
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className={styles.waBtn}
          >
            💬 WhatsApp
          </a>
          {[
            { icon: "📞", lbl: "Tél", val: SITE.phone },
            { icon: "📍", lbl: "Adresse", val: SITE.address.street },
            { icon: "✉", lbl: "Email", val: SITE.email },
          ].map((c) => (
            <div key={c.lbl} className={styles.ic}>
              <span>{c.icon}</span>
              <div>
                <div className={styles.icLbl}>{c.lbl}</div>
                <div className={styles.icVal}>{c.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <span>
          © {new Date().getFullYear()} {SITE.name} — Tous droits réservés
        </span>
        <span>·</span>
        <span>
          {SITE.address.city}, {SITE.address.country}
        </span>
      </div>
    </footer>
  );
}
