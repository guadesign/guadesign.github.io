import React from 'react'
import { experiencia, labels } from '../data/content'
import styles from './Experiencia.module.css'

export default function Experiencia({ lang }) {
  return (
    <section id="experiencia" className={styles.experiencia}>
      <div className="section-label">{labels.trayectoria[lang]}</div>
      <h2 className={styles.h2}>{labels.tituloExp[lang]}</h2>
      
      <div className={styles.timeline}>
        {experiencia.map(exp => (
          <div key={exp.id} className={styles.block}>
            <div className={styles.header}>
              <span className={styles.periodo}>{exp.periodo}</span>
              <h3 className={styles.nombre}>{exp.nombre}</h3>
              <span className={styles.rol}>{exp.rol[lang]}</span>
            </div>
            <p className={styles.desc}>{exp.desc[lang]}</p>
            
            {exp.posts && exp.posts.length > 0 && (
              <div className={styles.instagramGrid}>
                {exp.posts.map((post, index) => (
                  <a 
                    key={index} 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.postWrapper}
                  >
                    <img src={post.img} alt="Design work" className={styles.postImg} />
                    <div className={styles.overlay}>
                      <div className={styles.instaBtn}>{labels.verPost[lang]}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
