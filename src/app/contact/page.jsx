'use client'
import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { SITE, CONTACT_SUBJECTS, HORAIRES } from '@/data/site'

const INIT = { nom:'', telephone:'', email:'', objet:'', date:'', personnes:'', message:'' }

function Field({ label, name, type='text', placeholder, value, onChange, required }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm]     = useState(INIT)
  const [status, setStatus] = useState(null)

  const heroRef   = useReveal()
  const formRef   = useReveal({ threshold:0.05 })
  const mapRef    = useReveal({ threshold:0.05 })
  const bottomRef = useReveal({ threshold:0.1 })

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch { setStatus('error') }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ padding:'60px 40px 32px', background:'var(--bg)', borderTop:'3px solid var(--gold)', textAlign:'center' }}>
        <div ref={heroRef} className="reveal">
          <div className="eyebrow" style={{ justifyContent:'center', marginBottom:'14px' }}>
            <div className="eyebrow-line"/>
            <span className="eyebrow-text">Besoin d'un devis ou une question ?</span>
            <div className="eyebrow-line"/>
          </div>
          <h1 style={{ fontFamily:'var(--font-d)', fontSize:'clamp(26px,3.5vw,42px)', fontWeight:300, color:'var(--text-1)', marginBottom:'10px' }}>
            Laissez-nous un message
          </h1>
          <p style={{ fontSize:'9px', letterSpacing:'2px', textTransform:'uppercase', color:'var(--gold)' }}>
            Réponse sous 24h · Devis entièrement gratuit
          </p>
        </div>
      </section>

      {/* ── 2 colonnes Formulaire + Carte ── */}
      <section style={{ display:'grid', gridTemplateColumns:'1.15fr 0.85fr', borderTop:'1px solid var(--cream-3)' }}>

        {/* Formulaire */}
        <div ref={formRef} className="reveal-left"
          style={{ padding:'52px 44px', background:'var(--bg)', borderRight:'1px solid var(--cream-3)' }}>
          <h2 style={{ fontFamily:'var(--font-d)', fontSize:'22px', fontWeight:400, color:'var(--text-1)', marginBottom:'4px' }}>
            Votre message
          </h2>
          <p style={{ fontSize:'9px', letterSpacing:'2px', textTransform:'uppercase', color:'var(--gold)', marginBottom:'28px' }}>
            Réservation · Devis · Question générale
          </p>

          {status === 'ok' ? (
            <div style={{ padding:'40px', background:'rgba(34,197,94,0.07)', border:'1px solid rgba(34,197,94,0.28)', textAlign:'center' }}>
              <div style={{ fontSize:'40px', marginBottom:'14px' }}>✓</div>
              <div style={{ fontSize:'15px', fontWeight:500, color:'var(--text-1)', marginBottom:'6px' }}>Message envoyé !</div>
              <div style={{ fontSize:'11px', color:'var(--text-2)' }}>Nous vous répondrons dans les 24h.</div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="field-row">
                <Field label="Votre nom *"  name="nom"       placeholder="Prénom et nom"     value={form.nom}       onChange={update} required />
                <Field label="Téléphone"    name="telephone" placeholder="+221 77 xxx xx xx" value={form.telephone} onChange={update} />
              </div>
              <Field label="Email *" name="email" type="email" placeholder="votre@email.com" value={form.email} onChange={update} required />
              <div className="field">
                <label htmlFor="objet">Objet</label>
                <select id="objet" name="objet" value={form.objet} onChange={update}>
                  {CONTACT_SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="field-row">
                <Field label="Date souhaitée"   name="date"      type="date"  value={form.date}      onChange={update} />
                <Field label="Nb. de personnes" name="personnes" placeholder="ex: 50" value={form.personnes} onChange={update} />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Décrivez votre projet ou votre question..." value={form.message} onChange={update}/>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-gold"
                style={{ width:'100%', padding:'14px', opacity:status==='sending'?0.7:1 }}
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
              {status === 'error' && (
                <p style={{ fontSize:'11px', color:'#dc2626', marginTop:'10px', textAlign:'center' }}>
                  Erreur. Appelez-nous au {SITE.phone}.
                </p>
              )}
            </form>
          )}
        </div>

        {/* Carte + infos */}
        <div ref={mapRef} className="reveal-right"
          style={{ padding:'52px 36px', background:'var(--cream)' }}>
          <h2 style={{ fontFamily:'var(--font-d)', fontSize:'20px', fontWeight:400, color:'var(--text-1)', marginBottom:'18px' }}>
            Nous trouver
          </h2>

          {/*
            INTÉGRER GOOGLE MAPS :
            <iframe
              src="https://www.google.com/maps/embed?pb=VOTRE_CODE_EMBED"
              width="100%" height="220"
              style={{ border:0 }} allowFullScreen loading="lazy"
            />
          */}
          <div className="map-placeholder" style={{ marginBottom:'18px' }}>
            <div className="map-grid-bg"/>
            <div className="map-road-h" style={{ top:'38%' }}/><div className="map-road-h" style={{ top:'62%' }}/>
            <div className="map-road-v" style={{ left:'33%' }}/><div className="map-road-v" style={{ left:'60%' }}/>
            <span className="map-pin-icon">📍</span>
            <span className="map-pin-label">Fely Traiteur — Grand Mbao</span>
            <span className="map-pin-addr">{SITE.address.full}</span>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
            {[
              { icon:'📞', label:'Téléphone', value:SITE.phone,             href:`tel:${SITE.phone.replace(/\s/g,'')}` },
              { icon:'✉',  label:'Email',     value:SITE.email,             href:`mailto:${SITE.email}` },
              { icon:'📍', label:'Adresse',   value:SITE.address.full },
              { icon:'📸', label:'Instagram', value:SITE.social.igHandle,   href:SITE.social.instagram },
            ].map(c => (
              <div key={c.label}
                style={{ display:'flex', gap:'12px', alignItems:'center', padding:'11px 14px', background:'var(--bg)', border:'var(--border)', transition:'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor='var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='var(--border-c)'}
              >
                <span style={{ fontSize:'16px', opacity:0.7, flexShrink:0 }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize:'8px', letterSpacing:'1.5px', textTransform:'uppercase', color:'var(--text-3)', marginBottom:'2px' }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                        style={{ fontSize:'11px', color:'var(--text-1)', textDecoration:'none' }}>{c.value}</a>
                    : <span style={{ fontSize:'11px', color:'var(--text-1)' }}>{c.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── Bande noire du bas (contact2.png style) ── */}
      <section style={{ background:'var(--black)', borderTop:'3px solid var(--gold)', padding:'56px 40px' }}>
        <div ref={bottomRef} className="reveal"
          style={{ maxWidth:'1200px', margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:'48px' }}>

          <div>
            <div style={{ fontSize:'10px', letterSpacing:'2px', textTransform:'uppercase', color:'var(--gold)', marginBottom:'14px', fontWeight:500 }}>
              Heures d'ouvertures
            </div>
            <div style={{ fontSize:'12px', color:'var(--gold)', fontWeight:500, marginBottom:'3px' }}>Ouvert 7j/7</div>
            <div style={{ fontSize:'16px', color:'var(--text-w)', marginBottom:'16px' }}>07h00 à 23h00 — non stop</div>
            <div style={{ width:'36px', height:'1px', background:'rgba(184,134,42,0.35)', marginBottom:'16px' }}/>
            <div style={{ fontSize:'11px', color:'var(--text-w60)', lineHeight:2 }}>
              <strong style={{ color:'var(--text-w)', display:'block', fontWeight:500, marginBottom:'2px' }}>Adresse</strong>
              {SITE.address.street}<br/>
              {SITE.address.detail}<br/>
              {SITE.address.city}, {SITE.address.country}
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'rgba(184,134,42,0.15)', alignSelf:'start' }}>
            {[
              { icon:'📞', title:'Téléphone', value: SITE.phone },
              { icon:'📍', title:'Adresse',   value: `${SITE.address.street}\n${SITE.address.city} — ${SITE.address.country}` },
              { icon:'✉',  title:'Email',     value: SITE.email },
            ].map(c => (
              <div key={c.title}
                style={{ background:'var(--black)', padding:'28px 16px', textAlign:'center', border:'1px solid transparent', transition:'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor='rgba(184,134,42,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='transparent'}
              >
                <span style={{ fontSize:'28px', display:'block', marginBottom:'10px', opacity:0.8 }}>{c.icon}</span>
                <div style={{ fontSize:'10px', fontWeight:500, color:'var(--text-w)', marginBottom:'6px' }}>{c.title}</div>
                <div style={{ fontSize:'10px', color:'rgba(184,134,42,0.85)', lineHeight:1.65, whiteSpace:'pre-line' }}>{c.value}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
