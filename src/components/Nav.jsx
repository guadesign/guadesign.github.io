import React from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#proyectos">Proyectos</a>
      <a href="#experiencia">Trayectoria</a>
      <a href="#sobre">Sobre mí</a>
      <a href="#contacto">Contacto</a>
    </nav>
  )
}
