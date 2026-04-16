import React, { useState } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Proyectos from './components/Proyectos'
import Experiencia from './components/Experiencia'
import Contacto from './components/Contacto'
import CV from './components/CV'
import './index.css'

function App() {
  const [lang, setLang] = useState('es')
  const [vista, setVista] = useState('portfolio')

  return (
    <div className="app-container">
      <Cursor />
      <Nav lang={lang} setLang={setLang} vista={vista} setVista={setVista} />
      {vista === 'portfolio' ? (
        <main>
          <Hero lang={lang} />
          <Sobre lang={lang} />
          <Proyectos lang={lang} />
          <Experiencia lang={lang} />
          <Contacto lang={lang} />
        </main>
      ) : (
        <CV lang={lang} setVista={setVista} />
      )}
    </div>
  )
}

export default App
