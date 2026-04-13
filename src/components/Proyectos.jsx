import React from 'react'
import { proyectos, labels } from '../data/content'
import styles from './Proyectos.module.css'

export default function Proyectos({ lang }) {
  return (
    <section id="proyectos" className={styles.proyectos}>
      <div className="section-label">{labels.labelProyectos[lang]}</div>
      <h2 className={styles.h2}>{labels.tituloProyectos[lang]}</h2>
      <div className={styles.grid}>
        {proyectos.map(p => (
          <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.imageBox}>
              <img src={p.img} alt={p.titulo} className={styles.img} />
              <div className={styles.overlay}>
                <span>{labels.verBehance[lang]}</span>
              </div>
            </div>
            <div className={styles.info}>
              <span className={styles.tag}>{p.tag[lang]}</span>
              <h3 className={styles.titulo}>{p.titulo}</h3>
              <p className={styles.desc}>{p.desc[lang]}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
