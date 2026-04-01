import { useEffect, useRef } from 'react'
import { proyectos } from '../data/content'
import styles from './Proyectos.module.css'

export default function Proyectos() {
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
    <section id="proyectos" className={styles.proyectos} ref={ref}>
      <div className="section-label">02 — Proyectos</div>
      <h2 className={styles.h2}>Trabajo selecto</h2>
      <div className={styles.grid}>
        {proyectos.map(p => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} fade-in`}
          >
            <div className={styles.thumb}>
              <img src={p.img} alt={p.titulo} />
            </div>
            <div className={styles.info}>
              <div className={styles.tag}>{p.tag}</div>
              <div className={styles.titulo}>{p.titulo}</div>
              <div className={styles.desc}>{p.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
