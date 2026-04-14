import { useEffect, useRef } from 'react'
import { skills, labels } from '../data/content'
import styles from './Sobre.module.css'

export default function Sobre({ lang }) {
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
      <div className="section-label">{labels.sobreLabel[lang]}</div>
      <div className={styles.layout}>
        <div className={`${styles.tituloCol} fade-in`}>
          <h2 className={styles.h2}>
            {lang === 'es'
              ? <><em>Diseñadora</em><br />multimedial con<br />criterio estético.</>
              : <>Multimedia<br /><em>designer</em> with<br />aesthetic vision.</>
            }
          </h2>
        </div>
        <div className={`${styles.contenidoCol} fade-in`}>
          <p className={styles.bio}>{labels.sobreBio[lang]}</p>
          <div className={styles.skillsGrid}>
            {skills[lang].map(s => (
              <div key={s} className={styles.chip}>{s}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
