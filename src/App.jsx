import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Proyectos from './components/Proyectos'
import Experiencia from './components/Experiencia'
import Skills from './components/Skills'
import Contacto from './components/Contacto'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Nav />
      <main>
        <Hero />
        <Proyectos />
        <Experiencia />
        <Skills />
      </main>
      <Contacto />
    </div>
  )
}

export default App
