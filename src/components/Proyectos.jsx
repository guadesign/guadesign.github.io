import InstagramEmbed from './InstagramEmbed';
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
    if (ref.current) {
      ref.current.querySelectorAll('.fade-in').forEach(el => obs.observe(el))
    }
    return () => obs.disconnect()
  }, [])

  return (
    <section id="proyectos" className={styles.proyectos} ref={ref}>
      <div className="section-label">02 — Proyectos</div>
      <h2 className={styles.h2}>Trabajo selecto</h2>
      <div className={styles.grid}>
        {proyectos.map(p => (
          /* Cambié el <a> por un <div> para que el Instagram sea clickeable */
          <div
            key={p.id}
            className={`${styles.card} fade-in`}
          >
            {/* Si el proyecto tiene link de Instagram, lo muestra. Si no, muestra la imagen común */}
            <div className={styles.thumb}>
              {p.urlInstagram ? (
                <InstagramEmbed url={p.urlInstagram} />
              ) : (
                <img src={p.img} alt={p.titulo} />
              )}
            </div>

            <div className={styles.info}>
              <div className={styles.tag}>{p.tag}</div>
              <div className={styles.titulo}>
                {/* Dejé el link solo en el título para que puedas ir a ver el caso completo si querés */}
                <a href={p.url} target="_blank" rel="noreferrer" className={styles.projectLink}>
                   {p.titulo}
                </a>
              </div>
              <div className={styles.desc}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
