import { useRef, useState, useEffect } from 'react'
import styles from './Carrusel.module.css'

function InstagramPost({ url }) {
  const wrapperRef = useRef()
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    // Procesar embed de Instagram si el script ya está cargado
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
    // Detectar si no cargó después de 5 segundos
    const timer = setTimeout(() => {
      const iframe = wrapperRef.current?.querySelector('iframe')
      if (!iframe || iframe.offsetHeight < 50) setFailed(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  if (failed) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className={styles.placeholder}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="var(--orange)" stroke="none"/>
        </svg>
        <span>Ver en Instagram</span>
      </a>
    )
  }

  return (
    <div ref={wrapperRef} className={styles.embedWrapper}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width: '100%', margin: 0 }}
      />
    </div>
  )
}

export default function Carrusel({ posts }) {
  const trackRef = useRef()

  const mover = (dir) => {
    const track = trackRef.current
    if (!track) return
    const item = track.querySelector(`.${styles.item}`)
    const itemW = item ? item.offsetWidth + 16 : 260
    track.scrollBy({ left: dir * itemW * 2, behavior: 'smooth' })
  }

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.btn} ${styles.prev}`} onClick={() => mover(-1)} aria-label="Anterior">&#8592;</button>
      <div className={styles.track} ref={trackRef}>
        {posts.map((url, i) => (
          <div key={i} className={styles.item}>
            <InstagramPost url={url} />
          </div>
        ))}
      </div>
      <button className={`${styles.btn} ${styles.next}`} onClick={() => mover(1)} aria-label="Siguiente">&#8594;</button>
    </div>
  )
}
