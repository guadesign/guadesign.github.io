import React, { useState } from 'react'
import Experiencia from './components/Experiencia'
// ... importa tus otros componentes

function App() {
  const [lang, setLang] = useState('spa');

  const toggleLang = () => setLang(prev => prev === 'spa' ? 'eng' : 'spa');

  return (
    <div className="app-container">
      {/* Botón flotante SPA/ENG */}
      <button 
        onClick={toggleLang}
        style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
          padding: '10px 15px', borderRadius: '30px', border: '1px solid #ddd',
          background: 'white', fontWeight: 'bold', cursor: 'pointer',
          fontFamily: 'sans-serif', fontSize: '12px'
        }}
      >
        {lang === 'spa' ? 'CAMBIAR A ENG' : 'SWITCH TO SPA'}
      </button>

      {/* Pasamos el idioma a Experiencia */}
      <Experiencia lang={lang} />
      
      {/* Si querés traducir el resto, hacés lo mismo con Proyectos, etc. */}
    </div>
  )
}

export default App
