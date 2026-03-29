'use client'
import { useReveal } from '@/hooks/useReveal'
import { HORAIRES, SITE } from '@/data/site'

export default function HorairesSection() {
  const headRef  = useReveal()
  const leftRef  = useReveal({ threshold: 0.1 })
  const rightRef = useReveal({ threshold: 0.1 })

  return (
    <section style={{ padding:'72px 40px', background:'var(--cream-2)', borderTop:'1px solid var(--cream-3)' }}>
      <div className="section-wrap">
        <div ref={headRef} className="reveal" style={{ marginBottom:'28px' }}>
          <div className="eyebrow"><div className="eyebrow-line"/><span className="eyebrow-text">Pratique</span></div>
          <h2 style={{ fontFamily:'var(--font-d)', fontSize:'clamp(24px,3vw,34px)', fontWeight:300, color:'var(--text-1)', lineHeight:1.2 }}>
            Horaires &amp; Localisation
          </h2>
        </div>

        {/* 2 cols → 1 col mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
        }}>
          <div ref={leftRef} className="reveal-left">
            <div className="open-badge"><div className="open-dot"/><span className="open-text">Ouvert maintenant · 7j/7</span></div>
            <table style={{ width:'100%', borderCollapse:'collapse', marginBottom:'24px' }}>
              <tbody>
                {HORAIRES.map(h => (
                  <tr key={h.jour} style={{ borderBottom:'1px solid var(--cream-3)' }}>
                    <td style={{ padding:'10px 0', fontSize:'12px', color:h.highlight?'var(--text-1)':'var(--text-2)', fontWeight:h.highlight?500:400 }}>{h.jour}</td>
                    <td style={{ padding:'10px 0', fontSize:'12px', color:'var(--gold)', textAlign:'right', fontWeight:500 }}>{h.heure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* 3 info cards */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--cream-3)' }}>
              {[
                { icon:'📞', title:'Téléphone', value:SITE.phone },
                { icon:'📍', title:'Adresse',   value:SITE.address.street },
                { icon:'✉',  title:'Email',     value:SITE.email },
              ].map(c => (
                <div key={c.title} style={{ background:'var(--bg)', padding:'16px 12px', textAlign:'center',
                  borderTop:'2px solid transparent', transition:'border-color 0.25s, transform 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderTopColor='var(--gold)'; e.currentTarget.style.transform='translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderTopColor='transparent'; e.currentTarget.style.transform='none' }}
                >
                  <span style={{ fontSize:'20px', display:'block', marginBottom:'7px' }}>{c.icon}</span>
                  <div style={{ fontSize:'9px', fontWeight:500, color:'var(--text-1)', marginBottom:'3px' }}>{c.title}</div>
                  <div style={{ fontSize:'9px', color:'var(--gold)', lineHeight:1.5 }}>{c.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="reveal-right">
            <div className="map-placeholder" style={{ marginBottom:'10px' }}>
              <div className="map-grid-bg"/>
              <div className="map-road-h" style={{ top:'40%' }}/><div className="map-road-h" style={{ top:'65%' }}/>
              <div className="map-road-v" style={{ left:'35%' }}/><div className="map-road-v" style={{ left:'62%' }}/>
              <span className="map-pin-icon">📍</span>
              <span className="map-pin-label">Fely Traiteur</span>
              <span className="map-pin-addr">{SITE.address.full}</span>
            </div>
            <p style={{ fontSize:'8px', letterSpacing:'1px', textTransform:'uppercase', color:'var(--text-3)', textAlign:'center' }}>
              → Remplacer par Google Maps embed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
