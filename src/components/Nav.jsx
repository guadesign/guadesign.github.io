import React from 'react'
import { labels } from '../data/content'
import styles from './Nav.module.css'

export default function Nav({ lang }) {
  return (
    <nav className={styles.nav}>
      <a href="#proyectos">{labels.navProyectos[lang]}</a>
      <a href="#experiencia">{labels.navExperiencia[lang]}</a>
      <a href="#skills">{labels.navSkills[lang]}</a>
    </nav>
  )
}
