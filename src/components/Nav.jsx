import React from 'react'
import { labels } from '../data/content'
import styles from './Nav.module.css'

export default function Nav({ lang }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li><a href="#proyectos">{labels.navProyectos[lang]}</a></li>
        <li><a href="#experiencia">{labels.navTrayectoria[lang]}</a></li>
        <li><a href="#sobre">{labels.navSobre[lang]}</a></li>
        <li><a href="#contacto">{labels.navContacto[lang]}</a></li>
      </ul>
    </nav>
  )
}
