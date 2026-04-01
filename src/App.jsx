import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Proyectos from './components/Proyectos'
import Experiencia from './components/Experiencia'
import Contacto from './components/Contacto'

// Cargar script de Instagram embeds
function useInstagramEmbed() {
  useEffect(() => {
    if (document.getElementById('ig-embed-script')) return
    const script = document.createElement('script')
    script.id = 'ig-embed-script'
    script.src = '//www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])
}

// Custom cursor
function useCursor() {
  const cursorRef = useRef()
  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    const over = () => cursorRef.current?.classList.add('big')
    const out = () => cursorRef.current?.classList.remove('big')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })
    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])
  return cursorRef
}

export default function App() {
  useInstagramEmbed()
  const cursorRef = useCursor()

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <Nav />
      <Hero />
      <Sobre />
      <Proyectos />
      <Experiencia />
      <Contacto />
    </>
  )
}
