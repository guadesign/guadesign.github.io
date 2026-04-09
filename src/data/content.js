import beautyou from '../assets/beautyou.png'
import emerge from '../assets/emerge.png'
import moon from '../assets/moon.png'
import warner from '../assets/warner.png'

import flash1 from '../assets/flash-1.jpg'
import flash2 from '../assets/flash-2.jpg'
import flash3 from '../assets/flash-3.jpg'
import flash4 from '../assets/flash-4.jpg'
import flash5 from '../assets/flash-5.jpg'

import pw1 from '../assets/pw-1.jpg'
import pw2 from '../assets/pw-2.jpg'
import pw3 from '../assets/pw-3.jpg'
import pw4 from '../assets/pw-4.png'

import unsta1 from '../assets/unsta-1.jpg'
import unsta2 from '../assets/unsta-2.jpg'

export const skills = [
  'Identidad visual',
  'Motion graphics',
  'Diseño editorial',
  'Redes sociales',
  'After Effects',
  'Photoshop',
  'Illustrator',
  'Figma',
  'Premiere Pro',
  'InDesign',
]

export const proyectos = [
  {
    id: 1,
    titulo: 'Warner Music Group — Broadcast Pack',
    tag: { es: 'Motion Design', en: 'Motion Design' },
    desc: {
      es: 'Pack de gráficas animadas para broadcasting y redes sociales.',
      en: 'Animated graphics pack for broadcasting and social media.',
    },
    img: warner,
    url: 'https://www.behance.net/itsmeguadi',
  },
  {
    id: 2,
    titulo: 'Emerge — Swiss Design Poster',
    tag: { es: 'Diseño Editorial', en: 'Editorial Design' },
    desc: {
      es: 'Exploración tipográfica con sistema de grilla suizo.',
      en: 'Typographic exploration using a Swiss grid system.',
    },
    img: emerge,
    url: 'https://www.behance.net/itsmeguadi',
  },
  {
    id: 3,
    titulo: 'Mission to the Moon — FUI',
    tag: { es: 'UI / Motion', en: 'UI / Motion' },
    desc: {
      es: 'Interfaz ficticia de usuario para una misión espacial.',
      en: 'Fictional user interface for a space mission.',
    },
    img: moon,
    url: 'https://www.behance.net/itsmeguadi',
  },
  {
    id: 4,
    titulo: 'Beautyou — Identidad Visual',
    tag: { es: 'Identidad Visual', en: 'Visual Identity' },
    desc: {
      es: 'Desarrollo de marca completo para estudio de belleza.',
      en: 'Full brand development for a beauty studio.',
    },
    img: beautyou,
    url: 'https://www.behance.net/itsmeguadi',
  },
]

export const labels = {
  labelProyectos: { es: '02 — PROYECTOS', en: '02 — PROJECTS' },
  tituloProyectos: { es: 'Trabajo seleccionado', en: 'Selected work' },
  verBehance: { es: 'Ver en Behance', en: 'View on Behance' },
}

export const experiencia = [
  {
    id: 1,
    periodo: '2024 — Presente',
    nombre: 'Grupo Prowork',
    rol: 'Diseñadora gráfica',
    desc: 'Diseño de contenido para redes sociales y materiales impresos para empresa de merchandising. Gestión de múltiples líneas de producto en simultáneo.',
    posts: [
      { img: pw1, url: 'https://www.instagram.com/grupoprowork/' },
      { img: pw2, url: 'https://www.instagram.com/grupoprowork/' },
      { img: pw3, url: 'https://www.instagram.com/grupoprowork/' },
      { img: pw4, url: 'https://www.instagram.com/grupoprowork/' },
    ],
  },
  {
    id: 2,
    periodo: '2022 — 2024',
    nombre: 'Grupo Flash',
    rol: 'Diseñadora gráfica',
    desc: 'Gestión visual de múltiples marcas del grupo logístico. Identidad, redes sociales y diseño de comunicación interna y externa.',
    posts: [
      { img: flash1, url: 'https://www.instagram.com/grupoflash/' },
      { img: flash2, url: 'https://www.instagram.com/grupoflash/' },
      { img: flash3, url: 'https://www.instagram.com/grupoflash/' },
      { img: flash4, url: 'https://www.instagram.com/grupoflash/' },
      { img: flash5, url: 'https://www.instagram.com/grupoflash/' },
    ],
  },
  {
    id: 3,
    periodo: '2022 — 2023',
    nombre: 'Servicios CEO — UNSTA',
    rol: 'Diseñadora',
    desc: 'Diseño de piezas institucionales y comunicación para la universidad.',
    posts: [
      { img: unsta1, url: 'https://www.instagram.com/' },
      { img: unsta2, url: 'https://www.instagram.com/' },
    ],
  },
]
