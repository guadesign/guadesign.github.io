import { useEffect, useRef } from 'react'
import { skills } from '../data/content'
import styles from './Sobre.module.css'

export default function Sobre() {
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="sobre" className={styles.sobre} ref={ref}>
      <div className="section-label">01 — Sobre mí</div>
      <div className={styles.layout}>
        <div className={`${styles.tituloCol} fade-in`}>
          <h2 className={styles.h2}>
            Diseñadora <em>multimedial</em><br />con criterio estético.
          </h2>
        </div>
        <div className={`${styles.contenidoCol} fade-in`}>
          <p className={styles.bio}>
            Soy Guada, licenciada en Diseño Multimedial (UNSTA, Tucumán). Con más de 3 años de experiencia en identidad visual, motion design y contenido para redes sociales, trabajé en contextos de agencia, empresa y freelance gestionando múltiples marcas en simultáneo. Domino la suite Adobe y tengo criterio estético, atención al detalle y capacidad para adaptarme a distintos lenguajes de marca.
          </p>
          <div className={styles.skillsGrid}>
            {skills.map(s => (
              <div key={s} className={styles.chip}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
