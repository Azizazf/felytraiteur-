'use client'
import { useState } from 'react'
import { useReveal, useRevealGroup } from '@/hooks/useReveal'
import { SERVICES } from '@/data/site'

function ServiceCard({ item }) {
  const [hov, setHov] = useState(false)
  return (
    <div className="reveal"
      style={{
        background:'var(--cream)', border:hov?'1px solid var(--gold)':'var(--border)',
        padding:'28px 20px', textAlign:'center', cursor:'pointer',
        transform:hov?'translateY(-5px)':'none',
        transition:'transform 0.3s, border-color 0.25s',
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <span style={{ fontSize:'32px', display:'block', marginBottom:'12px',
        transform:hov?'scale(1.18)':'scale(1)', transition:'transform 0.3s' }}>
        {item.emoji}
      </span>
      <h3 style={{ fontSize:'12px', fontWeight:500, color:'var(--text-1)', marginBottom:'7px' }}>{item.title}</h3>
      <p style={{ fontSize:'11px', color:'var(--text-2)', lineHeight:1.65 }}>{item.desc}</p>
      <div style={{ width:'20px', height:'1px', background:'var(--gold)', margin:'14px auto 0',
        transform:hov?'scaleX(2.8)':'scaleX(1)', transition:'transform 0.35s', transformOrigin:'center' }} />
    </div>
  )
}

export default function ServicesSection() {
  const headRef = useReveal()
  const gridRef = useRevealGroup({ stagger: 80 })
  return (
    <section style={{ padding:'72px 40px', background:'var(--bg)', borderTop:'1px solid var(--cream-3)' }}>
      <div className="section-wrap">
        <div ref={headRef} className="reveal" style={{ marginBottom:'28px' }}>
          <div className="eyebrow"><div className="eyebrow-line"/><span className="eyebrow-text">Ce que nous faisons</span></div>
          <h2 style={{ fontFamily:'var(--font-d)', fontSize:'clamp(24px,3vw,34px)', fontWeight:300, color:'var(--text-1)', lineHeight:1.2 }}>
            Nos services
          </h2>
        </div>
        {/* auto-fit → 3 cols desktop, 2 tablette, 1 mobile */}
        <div ref={gridRef} className="stagger" style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
          gap:'12px',
        }}>
          {SERVICES.map(s => <ServiceCard key={s.title} item={s} />)}
        </div>
      </div>
    </section>
  )
}
