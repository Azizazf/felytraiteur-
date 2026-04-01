'use client'
import { useEffect, useRef } from 'react'
export function useReveal(o = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } }, { threshold: o.threshold ?? 0.12 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return ref
}
export function useRevealGroup(o = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current; if (!c) return
    const kids = Array.from(c.children)
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { kids.forEach((k, i) => setTimeout(() => k.classList.add('visible'), i * (o.stagger ?? 90))); obs.unobserve(c) }
    }, { threshold: o.threshold ?? 0.1 })
    obs.observe(c); return () => obs.disconnect()
  }, [])
  return ref
}
