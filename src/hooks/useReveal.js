'use client'
import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: options.threshold ?? 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export function useRevealGroup(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const container = ref.current
    if (!container) return
    const children = Array.from(container.children)
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * (options.stagger ?? 90))
          })
          obs.unobserve(container)
        }
      },
      { threshold: options.threshold ?? 0.1 }
    )
    obs.observe(container)
    return () => obs.disconnect()
  }, [])
  return ref
}
