import { useEffect, useRef } from 'react'
import { experiencia } from '../data/content'
import Carrusel from './Carrusel'
import styles from './Experiencia.module.css'

export default function Experiencia() {
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
    <section id="experiencia" className={styles.experiencia} ref={ref}>
      <div className="section-label">03 — Experiencia</div>
      <h2 className={styles.h2}>Dónde estuve<br />y qué hice.</h2>

      {experiencia.map(emp => (
        <div key={emp.id} className={`${styles.block} fade-in`}>
          <div className={styles.header}>
            <div className={styles.nombre}>{emp.nombre}</div>
            <div className={styles.periodo}>{emp.periodo}</div>
          </div>
          <div className={styles.rol}>{emp.rol}</div>
          <p className={styles.desc}>{emp.desc}</p>
          <Carrusel posts={emp.posts} />
        </div>
      ))}
    </section>
  )
}
