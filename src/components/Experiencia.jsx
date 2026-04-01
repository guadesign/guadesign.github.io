import React from 'react'
import { experiencia } from '../data/content'
import InstagramEmbed from './InstagramEmbed' // Importamos el componente que creamos
import styles from './Experiencia.module.css'

export default function Experiencia() {
  return (
    <section id="experiencia" className={styles.experiencia}>
      <div className="section-label">03 — Trayectoria</div>
      <h2 className={styles.h2}>Experiencia profesional</h2>
      
      <div className={styles.timeline}>
        {experiencia.map(exp => (
          <div key={exp.id} className={styles.item}>
            <div className={styles.header}>
              <span className={styles.periodo}>{exp.periodo}</span>
              <h3 className={styles.empresa}>{exp.nombre}</h3>
              <span className={styles.rol}>{exp.rol}</span>
            </div>
            <p className={styles.desc}>{exp.desc}</p>
            
            {/* Renderizamos los posteos de Instagram si existen */}
            {exp.posts && exp.posts.length > 0 && (
              <div className={styles.instagramGrid}>
                {exp.posts.map((postUrl, index) => (
                  <div key={index} className={styles.postWrapper}>
                    <InstagramEmbed url={postUrl} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
