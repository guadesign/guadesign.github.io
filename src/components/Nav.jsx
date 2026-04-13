import React from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#experiencia">Trayectoria</a></li>
        <li><a href="#sobre">Sobre mí</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  )
}
