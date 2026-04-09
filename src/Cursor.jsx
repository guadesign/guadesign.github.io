import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef()

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const grow = () => cursor.classList.add('big')
    const shrink = () => cursor.classList.remove('big')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return <div className="cursor" ref={cursorRef} />
}
