import emergeImg from '../assets/emerge.png'
import warnerImg from '../assets/warner.png'
import beautyouImg from '../assets/beautyou.png'
import moonImg from '../assets/moon.png'

import proworkPost1 from '../assets/pw-1.jpg'
import proworkPost2 from '../assets/pw-2.jpg'
import proworkPost3 from '../assets/pw-3.jpg'
import proworkPost4 from '../assets/pw-4.png'

import flashPost1 from '../assets/flash-1.jpg'
import flashPost2 from '../assets/flash-2.jpg'
import flashPost3 from '../assets/flash-3.jpg'
import flashPost4 from '../assets/flash-4.jpg'
import flashPost5 from '../assets/flash-5.jpg'

import unstaPost1 from '../assets/unsta-1.jpg'
import unstaPost2 from '../assets/unsta-2.jpg'

export const proyectos = [
  {
    id: 1,
    tag: 'Diseño gráfico · Swiss Design',
    titulo: 'Emerge — Poster suizo',
    desc: 'Pieza editorial de diseño suizo. El proyecto más visto en Behance.',
    img: emergeImg,
    url: 'https://www.behance.net/gallery/204110719/01-EMERGE-SWISS-DESIGN-FUNDAMENTALS',
  },
  {
    id: 2,
    tag: 'Motion · Broadcast',
    titulo: 'Warner Music Group',
    desc: 'Sistema de animaciones para broadcasting de la industria musical.',
    img: warnerImg,
    url: 'https://www.behance.net/gallery/157765497/Warner-Music-Group-BROADCAST-PACK',
  }
]

export const experiencia = [
  {
    id: 'prowork',
    nombre: 'Grupo Prowork',
    periodo: 'Sept 2023 — Presente',
    rol: 'Diseñadora Gráfica',
    desc: 'Diseño de contenido visual para redes sociales de merchandising promocional nacional.',
    posts: [
      { img: proworkPost1, url: 'https://www.instagram.com/prowork.merchandising/p/DRmd0p4CNnH/' },
      { img: proworkPost2, url: 'https://www.instagram.com/p/DTsQUCnAXC8/' },
      { img: proworkPost3, url: 'https://www.instagram.com/p/DV_Bm9ej54s/' },
      { img: proworkPost4, url: 'https://www.instagram.com/prowork.merchandising/reel/DPW5p3fCcaj/' },
    ],
  },
  {
    id: 'flash',
    nombre: 'Grupo Flash',
    periodo: 'Sept 2024 — Jul 2025',
    rol: 'Diseñadora Gráfica',
    desc: 'Responsable del diseño visual e identidad corporativa del grupo.',
    posts: [
      { img: flashPost1, url: 'https://www.instagram.com/misenvios/p/DKudWIxMcw-/' },
      { img: flashPost2, url: 'https://www.instagram.com/misenvios/p/DLm20PttFLU/' },
      { img: flashPost3, url: 'https://www.instagram.com/p/DLFm_P3ur2y/' },
      { img: flashPost4, url: 'https://www.instagram.com/p/DKrvZQpOod5/' },
      { img: flashPost5, url: 'https://www.instagram.com/p/DFu2dTDRFkE/' },
    ],
  }
]

export const skills = [
  'Visual Identity', 'Motion Graphics', 'Editorial Design', 'Figma'
]
