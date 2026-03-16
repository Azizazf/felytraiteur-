'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { NAV_LINKS, SITE } from '@/data/site'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname  = usePathname()
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>

      {/* Logo */}
      <Link href="/" className={styles.logo}>
        {SITE.name.toUpperCase()}
      </Link>

      {/* Liens desktop */}
      <div className={styles.links}>
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.link} ${pathname === href ? styles.active : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Droite : ThemeToggle + CTA */}
      <div className={styles.right}>
        <ThemeToggle />
        <Link href="/contact" className={styles.cta}>Réservation</Link>
      </div>

      {/* Burger mobile */}
      <button
        className={styles.burger}
        onClick={() => setOpen(o => !o)}
        aria-label="Ouvrir le menu"
      >
        <span style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none', transition:'all 0.25s', display:'block', width:'22px', height:'1.5px', background:'var(--gold)' }} />
        <span style={{ opacity: open ? 0 : 1, transition:'all 0.25s', display:'block', width:'22px', height:'1.5px', background:'var(--gold)' }} />
        <span style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none', transition:'all 0.25s', display:'block', width:'22px', height:'1.5px', background:'var(--gold)' }} />
      </button>

      {/* Menu mobile */}
      {open && (
        <div className={styles.mobile}>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.mlink} ${pathname === href ? styles.mActive : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'12px', paddingTop:'12px', borderTop:'1px solid var(--cream-3)' }}>
            <Link href="/contact" className="btn btn-gold" onClick={() => setOpen(false)}>
              Réservation
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}

    </nav>
  )
}
