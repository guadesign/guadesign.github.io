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

    const addListeners = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })
    }
    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [])

  return <div className="cursor" ref={cursorRef} />
}
