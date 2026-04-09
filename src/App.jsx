import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Proyectos from './components/Proyectos'
import Experiencia from './components/Experiencia'
import Skills from './components/Skills'
import Contacto from './components/Contacto'
import './App.css'

function App() {
  const [lang, setLang] = useState('spa')

  const toggleLang = () => {
    setLang(prev => (prev === 'spa' ? 'eng' : 'spa'))
  }

  return (
    <div className="app-container">
      <button onClick={toggleLang} className="lang-toggle-btn">
        <span className={lang === 'spa' ? 'active-lang' : ''}>SPA</span>
        <span className="lang-divider">|</span>
        <span className={lang === 'eng' ? 'active-lang' : ''}>ENG</span>
      </button>

      <Navbar lang={lang} />
      
      <main>
        <Hero lang={lang} />
        <Proyectos lang={lang} />
        <Experiencia lang={lang} />
        <Skills lang={lang} />
      </main>

      <Contacto lang={lang} />
    </div>
  )
}

export default App
