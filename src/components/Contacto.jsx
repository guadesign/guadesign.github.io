import { labels } from '../data/content'
import styles from './Contacto.module.css'

export default function Contacto({ lang }) {
  return (
    <>
      <section id="contacto" className={styles.contacto}>
        <h2 className={styles.h2}>
          {lang === 'es'
            ? <span>Trabajamos<br /><em>juntos?</em></span>
            : <span>{"Let's work"}<br /><em>together.</em></span>
          }
        </h2>
        <p className={styles.sub}>{labels.contactoSub[lang]}</p>
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
        {labels.footer[lang]}
      </footer>
    </>
  )
}
