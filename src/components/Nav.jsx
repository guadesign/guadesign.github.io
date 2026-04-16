import React from 'react'
import { labels } from '../data/content'
import styles from './Nav.module.css'

export default function Nav({ lang, setLang, vista, setVista }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {vista === 'portfolio' ? (
          <>
            <li><a href="#proyectos">{labels.navProyectos[lang]}</a></li>
            <li><a href="#experiencia">{labels.navTrayectoria[lang]}</a></li>
            <li><a href="#sobre">{labels.navSobre[lang]}</a></li>
            <li><a href="#contacto">{labels.navContacto[lang]}</a></li>
          </>
        ) : (
          <li>
            <button className={styles.backBtn} onClick={() => setVista('portfolio')}>
              {lang === 'es' ? '← Volver al portfolio' : '← Back to portfolio'}
            </button>
          </li>
        )}
      </ul>

      <div className={styles.rightBtns}>
        <button
          className={styles.langBtn}
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        >
          <span className={lang === 'es' ? styles.activeLang : ''}>ES</span>
          <span className={styles.langDivider}>|</span>
          <span className={lang === 'en' ? styles.activeLang : ''}>EN</span>
        </button>

        <button
          className={`${styles.cvBtn} ${vista === 'cv' ? styles.cvBtnActive : ''}`}
          onClick={() => setVista(vista === 'cv' ? 'portfolio' : 'cv')}
        >
          CV / Resumé
        </button>
      </div>
    </nav>
  )
}
