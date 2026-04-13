import { labels } from '../data/content'
import styles from './Hero.module.css'

export default function Hero({ lang }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.shapes}>
        <svg className={styles.shapeStar} viewBox="0 0 100 100" fill="var(--yellow)">
          <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35"/>
        </svg>
        <div className={styles.shapeCircle}></div>
        <div className={styles.shapeBlob}></div>
      </div>

      <div className={styles.left}>
        <div className={styles.tag}>{labels.heroTag[lang]}</div>
        <h1 className={styles.h1}>
          Guada<br />
          <span>Eguiazabal</span>
        </h1>
        <p className={styles.frase}>
          {labels.heroFrase[lang].split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
          ))}
        </p>
        <div className={styles.btns}>
          <a href="#proyectos" className="btn btn-primary">{labels.heroCta1[lang]}</a>
          <a href="#contacto" className="btn btn-secondary">{labels.heroCta2[lang]}</a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={`${styles.colorBlock} ${styles.cb1}`}>
          <svg viewBox="0 0 100 100" className={styles.cbSvg}>
            <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="#1A1410"/>
          </svg>
        </div>
        <div className={`${styles.colorBlock} ${styles.cb2}`}>
          <svg viewBox="0 0 100 100" className={styles.cbSvg}>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#1A1410" strokeWidth="8"/>
            <circle cx="50" cy="50" r="20" fill="#1A1410"/>
          </svg>
        </div>
        <div className={`${styles.colorBlock} ${styles.cb3}`}>
          <svg viewBox="0 0 100 100" className={styles.cbSvg}>
            <rect x="10" y="10" width="35" height="35" rx="8" fill="white"/>
            <rect x="55" y="10" width="35" height="35" rx="8" fill="white" opacity="0.5"/>
            <rect x="10" y="55" width="35" height="35" rx="8" fill="white" opacity="0.5"/>
            <rect x="55" y="55" width="35" height="35" rx="8" fill="white"/>
          </svg>
        </div>
        <div className={`${styles.colorBlock} ${styles.cb4}`}>
          <svg viewBox="0 0 100 100" className={styles.cbSvg}>
            <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke="white" strokeWidth="8"/>
            <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke="white" strokeWidth="8" transform="rotate(60 50 50)"/>
            <ellipse cx="50" cy="50" rx="40" ry="25" fill="none" stroke="white" strokeWidth="8" transform="rotate(120 50 50)"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
