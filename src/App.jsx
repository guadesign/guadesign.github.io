import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Proyectos from './components/Proyectos'
import Sobre from './components/Sobre'
import Experiencia from './components/Experiencia'
import Contacto from './components/Contacto'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Proyectos />
        <Experiencia />
      </main>
      <Contacto />
    </div>
  )
}

export default App
