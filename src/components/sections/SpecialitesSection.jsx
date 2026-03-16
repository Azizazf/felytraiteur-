'use client'
import { useState, useEffect } from 'react'
import { useReveal, useRevealGroup } from '@/hooks/useReveal'
import { SPECIALITES } from '@/data/site'

function Card({ item }) {
  const [hov, setHov] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    check()
    const obs = new MutationObserver(check)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [])

  const bg = isDark ? item.bgDark : item.bgLight

  return (
    <article
      className="reveal"
      style={{
        background: 'var(--bg)',
        border: hov ? '1px solid var(--gold)' : 'var(--border)',
        overflow: 'hidden', cursor: 'pointer',
        transform: hov ? 'translateY(-5px)' : 'none',
        transition: 'transform 0.3s ease, border-color 0.25s',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ height:'168px', background:bg, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
        <span style={{
          fontSize:'66px',
          filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.15))',
          transform: hov ? 'scale(1.12) translateY(-4px)' : 'scale(1)',
          transition: 'transform 0.4s ease',
          display: 'block', position: 'relative', zIndex: 2,
        }}>{item.emoji}</span>
        <div style={{
          position:'absolute', bottom:0, left:0, right:0, zIndex:3,
          background: hov ? 'var(--gold)' : 'rgba(14,10,4,0.82)',
          padding:'8px 14px', fontSize:'10px', letterSpacing:'2px',
          textTransform:'uppercase', color: hov ? '#111' : '#fff',
          transition: 'all 0.3s',
        }}>{item.label}</div>
      </div>
      <div style={{ padding:'18px', borderTop: hov ? '2px solid var(--gold)' : '2px solid transparent', transition:'border-color 0.3s' }}>
        <h3 style={{ fontSize:'13px', fontWeight:500, color:'var(--text-1)', marginBottom:'7px' }}>{item.title}</h3>
        <p style={{ fontSize:'11px', color:'var(--text-2)', lineHeight:1.65 }}>{item.desc}</p>
        <div style={{
          fontSize:'9px', color:'var(--gold)', letterSpacing:'1px', marginTop:'12px',
          opacity: hov ? 1 : 0,
          transform: hov ? 'translateY(0)' : 'translateY(6px)',
          transition: 'all 0.3s',
        }}>Découvrir →</div>
      </div>
    </article>
  )
}

export default function SpecialitesSection() {
  const headRef = useReveal()
  const gridRef = useRevealGroup({ stagger: 85 })

  return (
    <section style={{ padding:'72px 40px', background:'var(--cream)', borderTop:'1px solid var(--cream-3)' }}>
      <div className="section-wrap">
        <div ref={headRef} className="reveal" style={{ marginBottom:'36px' }}>
          <div className="eyebrow"><div className="eyebrow-line"/><span className="eyebrow-text">Nos spécialités</span></div>
          <h2 style={{ fontFamily:'var(--font-d)', fontSize:'clamp(24px,3vw,34px)', fontWeight:300, color:'var(--text-1)', lineHeight:1.2 }}>
            Ce que nous vous proposons
          </h2>
        </div>
        <div ref={gridRef} className="stagger" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--cream-3)' }}>
          {SPECIALITES.map(item => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}
