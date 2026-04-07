import styles from './Contacto.module.css'

export default function Contacto() {
  return (
    <>
      <section id="contacto" className={styles.contacto}>
        <h2 className={styles.h2}>¿Trabajamos<br /><em>juntos?</em></h2>
        <p className={styles.sub}>Estoy disponible para proyectos freelance, part time y full time.</p>
        <div className={styles.links}>
          <a href="mailto:mguadalupeeguiazabal@gmail.com" className="btn btn-white">
            mguadalupeeguiazabal@gmail.com
          </a>
          <a href="https://www.behance.net/itsmeguadi" target="_blank" rel="noreferrer" className="btn btn-outline-white">
            Behance
          </a>
          <a href="https://www.linkedin.com/in/mgeguiazabal" target="_blank" rel="noreferrer" className="btn btn-outline-white">
            LinkedIn
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        © 2026 Guada Eguiazabal — Diseñadora Multimedial, Tucumán, Argentina
      </footer>
    </>
  )
}
