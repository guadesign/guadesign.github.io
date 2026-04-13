import React, { useState } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Proyectos from './components/Proyectos'
import Experiencia from './components/Experiencia'
import Contacto from './components/Contacto'
import './index.css'

function App() {
  const [lang, setLang] = useState('es')

  return (
    <div className="app-container">
      <Cursor />
      <button
        className="lang-toggle-btn"
        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      >
        <span className={lang === 'es' ? 'active-lang' : ''}>ES</span>
        <span className="lang-divider">|</span>
        <span className={lang === 'en' ? 'active-lang' : ''}>EN</span>
      </button>
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <Sobre lang={lang} />
        <Proyectos lang={lang} />
        <Experiencia lang={lang} />
      </main>
      <Contacto lang={lang} />
    </div>
  )
}

export default App
