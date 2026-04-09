import React from 'react'

import { experiencia } from '../data/content'

import styles from './Experiencia.module.css'



export default function Experiencia() {

  return (

    <section id="experiencia" className={styles.experiencia}>

      <div className="section-label">03 — Trayectoria</div>

      <h2 className={styles.h2}>Experiencia profesional</h2>

      

      <div className={styles.timeline}>

        {experiencia.map(exp => (

          /* Usamos .block para que tome el borde amarillo y el margen de tu CSS */

          <div key={exp.id} className={styles.block}>

            <div className={styles.header}>

              <span className={styles.periodo}>{exp.periodo}</span>

              <h3 className={styles.nombre}>{exp.nombre}</h3>

              <span className={styles.rol}>{exp.rol}</span>

            </div>

            <p className={styles.desc}>{exp.desc}</p>

            

            {/* Si la experiencia tiene posteos en content.js, los muestra acá */}

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
