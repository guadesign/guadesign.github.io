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

export const skills = {
  es: ['Identidad visual', 'Motion graphics', 'Diseño editorial', 'Redes sociales', 'After Effects', 'Photoshop', 'Illustrator', 'Figma', 'Premiere Pro', 'InDesign'],
  en: ['Visual identity', 'Motion graphics', 'Editorial design', 'Social media', 'After Effects', 'Photoshop', 'Illustrator', 'Figma', 'Premiere Pro', 'InDesign'],
}

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
  // Nav
  navProyectos:    { es: 'Proyectos',   en: 'Projects' },
  navTrayectoria:  { es: 'Trayectoria', en: 'Experience' },
  navSobre:        { es: 'Sobre mí',    en: 'About' },
  navContacto:     { es: 'Contacto',    en: 'Contact' },

  // Hero
  heroTag:    { es: '✦ Disponible para proyectos freelance, part time & full time', en: '✦ Available for freelance, part time & full time projects' },
  heroFrase:  { es: 'Diseño que se ve bien\ny funciona mejor.', en: 'Design that looks good\nand works even better.' },
  heroCta1:   { es: 'Ver proyectos', en: 'View projects' },
  heroCta2:   { es: 'Let\'s talk',   en: 'Let\'s talk' },

  // Sobre
  sobreLabel:   { es: '01 — Sobre mí', en: '01 — About me' },
  sobreTitulo:  { es: 'Diseñadora multimedial\ncon criterio estético.', en: 'Multimedia designer\nwith aesthetic vision.' },
  sobreBio:     {
    es: 'Soy Guada, licenciada en Diseño Multimedial (UNSTA, Tucumán). Con más de 3 años de experiencia en identidad visual, motion design y contenido para redes sociales, trabajé en contextos de agencia, empresa y freelance gestionando múltiples marcas en simultáneo. Domino la suite Adobe y tengo criterio estético, atención al detalle y capacidad para adaptarme a distintos lenguajes de marca.',
    en: 'I\'m Guada, a Multimedia Design graduate (UNSTA, Tucumán). With over 3 years of experience in visual identity, motion design and social media content, I\'ve worked across agency, corporate and freelance settings managing multiple brands simultaneously. I work with the full Adobe suite and bring aesthetic sensibility, attention to detail and the ability to adapt to different brand languages.',
  },

  // Proyectos
  labelProyectos:  { es: '02 — Proyectos',       en: '02 — Projects' },
  tituloProyectos: { es: 'Trabajo seleccionado',  en: 'Selected work' },
  verBehance:      { es: 'Ver en Behance',        en: 'View on Behance' },

  // Experiencia
  expLabel:  { es: '03 — Trayectoria',         en: '03 — Experience' },
  expTitulo: { es: 'Experiencia profesional',   en: 'Professional experience' },
  expVerPost: { es: 'Ver post',                 en: 'View post' },

  // Contacto
  contactoTitulo: { es: '¿Trabajamos\njuntos?',          en: 'Let\'s work\ntogether.' },
  contactoSub:    { es: 'Estoy disponible para proyectos freelance, part time y full time.', en: 'Available for freelance, part time and full time projects.' },
  footer:         { es: '© 2026 Guada Eguiazabal — Diseñadora Multimedial, Tucumán, Argentina', en: '© 2026 Guada Eguiazabal — Multimedia Designer, Tucumán, Argentina' },
}

export const experiencia = [
  {
    id: 1,
    periodo: { es: '2024 — Presente', en: '2024 — Present' },
    nombre: 'Grupo Prowork',
    rol: { es: 'Diseñadora gráfica', en: 'Graphic Designer' },
    desc: {
      es: 'Diseño de contenido para redes sociales y materiales impresos para empresa de merchandising. Gestión de múltiples líneas de producto en simultáneo.',
      en: 'Social media content design and printed materials for a promotional merchandising company. Managing multiple product lines simultaneously.',
    },
    posts: [
      { img: pw1, url: 'https://www.instagram.com/grupoprowork/' },
      { img: pw2, url: 'https://www.instagram.com/grupoprowork/' },
      { img: pw3, url: 'https://www.instagram.com/grupoprowork/' },
      { img: pw4, url: 'https://www.instagram.com/grupoprowork/' },
    ],
  },
  {
    id: 2,
    periodo: { es: '2022 — 2024', en: '2022 — 2024' },
    nombre: 'Grupo Flash',
    rol: { es: 'Diseñadora gráfica', en: 'Graphic Designer' },
    desc: {
      es: 'Gestión visual de múltiples marcas del grupo logístico. Identidad, redes sociales y diseño de comunicación interna y externa.',
      en: 'Visual management of multiple brands within a logistics group. Identity, social media and internal/external communications design.',
    },
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
    periodo: { es: '2022 — 2023', en: '2022 — 2023' },
    nombre: 'Servicios CEO — UNSTA',
    rol: { es: 'Diseñadora', en: 'Designer' },
    desc: {
      es: 'Diseño de piezas institucionales y comunicación para la universidad.',
      en: 'Institutional design pieces and communications for the university.',
    },
    posts: [
      { img: unsta1, url: 'https://www.instagram.com/' },
      { img: unsta2, url: 'https://www.instagram.com/' },
    ],
  },
]
