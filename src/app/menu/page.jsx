'use client'
import { useState } from 'react'
import { MENU_CATEGORIES, MENU_ITEMS } from '@/data/site'

function MenuCard({ item }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{
        background: hov ? 'var(--cream)' : 'var(--bg)',
        padding: '20px 18px',
        borderBottom: hov ? '2px solid var(--gold)' : '2px solid transparent',
        cursor: 'pointer',
        transition: 'border-color 0.25s, background 0.2s',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <span style={{
        fontSize: '30px', display: 'block', marginBottom: '8px',
        transform: hov ? 'scale(1.12)' : 'scale(1)',
        transition: 'transform 0.3s',
      }}>{item.emoji}</span>
      <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-1)', marginBottom: '3px' }}>{item.name}</div>
      <div style={{ fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '5px' }}>{item.category}</div>
      <div style={{ fontSize: '10px', color: 'var(--text-3)' }}>{item.desc}</div>
    </div>
  )
}

export default function MenuPage() {
  const [active, setActive] = useState('Tout')
  const items = active === 'Tout' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.category === active)

  return (
    <>
      {/* Hero sombre */}
      <section style={{
        padding: '64px 40px 40px',
        background: 'linear-gradient(160deg,#0f0800 0%,#1a1208 50%,#2d1a00 100%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(184,134,42,0.18)',
      }}>
        <div className="eyebrow" style={{ justifyContent:'center', marginBottom:'14px' }}>
          <div className="eyebrow-line"/><span className="eyebrow-text">Notre carte</span><div className="eyebrow-line"/>
        </div>
        <h1 style={{ fontFamily:'var(--font-d)', fontSize:'clamp(28px,4vw,46px)', fontWeight:300, color:'#FAF5EC', lineHeight:1.1, marginBottom:'10px' }}>
          Menu &amp; Spécialités
        </h1>
        <p style={{ fontSize:'9px', letterSpacing:'2.5px', textTransform:'uppercase', color:'rgba(184,134,42,0.75)' }}>
          Fast-Food · Cuisine Sénégalaise · Pâtisserie · Glacier · Dibiterie
        </p>
      </section>

      {/* Placeholder photos */}
      <section style={{ padding:'44px 40px', background:'var(--cream)', borderBottom:'1px solid var(--cream-3)' }}>
        <div style={{ maxWidth:'560px', margin:'0 auto', border:'2px dashed rgba(184,134,42,0.2)', padding:'44px 28px', textAlign:'center', background:'var(--bg)' }}>
          <span style={{ fontSize:'44px', display:'block', marginBottom:'14px', opacity:0.3 }}>📸</span>
          <h2 style={{ fontFamily:'var(--font-d)', fontSize:'22px', fontWeight:400, color:'var(--text-1)', marginBottom:'8px' }}>
            Photos du menu à intégrer
          </h2>
          <p style={{ fontSize:'11px', color:'var(--text-2)', lineHeight:1.8, marginBottom:'20px' }}>
            Envoyez vos photos de menu et elles seront intégrées ici directement.<br/>
            La structure et les catégories sont déjà en place.
          </p>
          <button className="btn btn-outline-gold">Envoyer les photos du menu</button>
        </div>
      </section>

      {/* Filtres + Grille */}
      <section style={{ padding:'48px 40px 72px', background:'var(--bg)' }}>
        <div className="section-wrap">

          {/* Catégories */}
          <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'28px' }}>
            {MENU_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="btn"
                style={{
                  background: active===cat ? 'var(--gold)' : 'transparent',
                  border: active===cat ? '1px solid var(--gold)' : 'var(--border)',
                  color: active===cat ? '#fff' : 'var(--text-2)',
                  padding: '7px 18px',
                }}
              >{cat}</button>
            ))}
          </div>

          {/* Items */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--cream-3)' }}>
            {items.map((item, i) => <MenuCard key={i} item={item} />)}
          </div>

        </div>
      </section>
    </>
  )
}
