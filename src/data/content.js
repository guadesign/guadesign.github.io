import beautyou from '../assets/beautyou.png'
import emerge from '../assets/emerge.png'
import moon from '../assets/moon.png'
import warner from '../assets/warner.png'
import zodiane from '../assets/zodiane.png'

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
    url: 'https://www.behance.net/gallery/157765497/Warner-Music-Group-BROADCAST-PACK',
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
    url: 'https://www.behance.net/gallery/204110719/01-EMERGE-SWISS-DESIGN-FUNDAMENTALS',
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
    url: 'https://www.behance.net/gallery/186560773/Mission-to-the-Moon-FUI-Design',
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
    url: 'https://www.behance.net/gallery/138887507/Beautyou-briefbycroca',
  },
  {
    id: 5,
    titulo: 'Zodiane Perfumes — Branding',
    tag: { es: 'Identidad Visual', en: 'Visual Identity' },
    desc: {
      es: 'Identidad de marca para perfumeria nicho. Desarrollo de nombre, logo y sistema visual.',
      en: 'Brand identity for a niche perfumery. Name, logo and full visual system development.',
    },
    img: zodiane,
    url: 'https://bradingzodianeguadi.myportfolio.com',
  },
]

export const labels = {
  navProyectos:   { es: 'Proyectos',   en: 'Projects' },
  navTrayectoria: { es: 'Trayectoria', en: 'Experience' },
  navSobre:       { es: 'Sobre mí',    en: 'About' },
  navContacto:    { es: 'Contacto',    en: 'Contact' },

  heroTag:   { es: 'Disponible para proyectos freelance, part time & full time', en: 'Available for freelance, part time & full time projects' },
  heroFrase: { es: 'Diseño que se ve bien y funciona mejor.', en: 'Design that looks good and works even better.' },
  heroCta1:  { es: 'Ver proyectos', en: 'View projects' },
  heroCta2:  { es: 'Hablemos', en: 'Get in touch' },

  sobreLabel: { es: '01 — Sobre mí', en: '01 — About me' },
  sobreBio: {
    es: 'Soy Guada, licenciada en Diseño Multimedial (UNSTA, Tucumán). Con más de 3 años de experiencia en identidad visual, motion design y contenido para redes sociales, trabajé en contextos de agencia, empresa y freelance gestionando múltiples marcas en simultáneo. Domino la suite Adobe y tengo criterio estético, atención al detalle y capacidad para adaptarme a distintos lenguajes de marca.',
    en: 'I am Guada, a Multimedia Design graduate (UNSTA, Tucumán). With over 3 years of experience in visual identity, motion design and social media content, I have worked across agency, corporate and freelance settings managing multiple brands simultaneously. I work with the full Adobe suite and bring aesthetic sensibility, attention to detail and the ability to adapt to different brand languages.',
  },

  labelProyectos:  { es: '02 — Proyectos',      en: '02 — Projects' },
  tituloProyectos: { es: 'Trabajo seleccionado', en: 'Selected work' },
  verBehance:      { es: 'Ver en Behance',       en: 'View on Behance' },

  expLabel:   { es: '03 — Trayectoria',       en: '03 — Experience' },
  expTitulo:  { es: 'Experiencia profesional', en: 'Professional experience' },
  expVerPost: { es: 'Ver post', en: 'View post' },

  contactoSub: { es: 'Estoy disponible para proyectos freelance, part time y full time.', en: 'Available for freelance, part time and full time projects.' },
  footer: { es: '2026 Guada Eguiazabal — Diseñadora Multimedial, Tucumán, Argentina', en: '2026 Guada Eguiazabal — Multimedia Designer, Tucuman, Argentina' },
}

export const experiencia = [
  {
    id: 1,
    periodo: { es: 'Sept 2025 — Presente', en: 'Sept 2025 — Present' },
    nombre: 'Grupo Prowork',
    rol: { es: 'Diseñadora gráfica', en: 'Graphic Designer' },
    desc: {
      es: 'Responsable de la definición y evolución de la identidad visual de la marca para Argentina y Chile. Diseño y producción de contenido para redes sociales, motion graphics, catálogos y materiales comerciales. Desarrollo de recursos visuales para equipos de marketing y ventas, adaptando campañas a formatos digitales e impresos.',
      en: 'Responsible for defining and evolving the brand\'s visual identity for Argentina and Chile. Design and production of social media content, motion graphics, catalogs and commercial materials. Development of visual assets for marketing and sales teams, adapting campaigns across digital and print formats.',
    },
    posts: [
      { img: pw1, url: 'https://www.instagram.com/prowork.merchandising/p/DRmd0p4CNnH/' },
      { img: pw2, url: 'https://www.instagram.com/p/DTsQUCnAXC8/' },
      { img: pw3, url: 'https://www.instagram.com/p/DV_Bm9ej54s/' },
      { img: pw4, url: 'https://www.instagram.com/p/DR7ERT6iCei/' },
    ],
  },
  {
    id: 2,
    periodo: { es: 'Sept 2024 — Sept 2025', en: 'Sept 2024 — Sept 2025' },
    nombre: 'Grupo Flash',
    rol: { es: 'Diseñadora gráfica', en: 'Graphic Designer' },
    desc: {
      es: 'Desarrollo de piezas gráficas y contenido digital para las distintas unidades de negocio del grupo en Argentina, Bolivia y la región NOA. Creación de la identidad visual inicial de Grupo Flash, incluyendo logotipo, sistema visual básico y aplicaciones institucionales. Producción de contenido para redes en coordinación con marketing y community manager.',
      en: 'Development of graphic pieces and digital content for the group\'s different business units across Argentina, Bolivia and the NOA region. Created the initial visual identity for Grupo Flash, including logo, basic visual system and institutional applications. Social media content production in coordination with marketing and community management teams.',
    },
    posts: [
      { img: flash1, url: 'https://www.instagram.com/p/DIy7yJiuhGk/' },
      { img: flash2, url: 'https://www.instagram.com/misenvios/p/DLm20PttFLU/' },
      { img: flash3, url: 'https://www.instagram.com/p/DFu2dTDRFkE/' },
      { img: flash4, url: 'https://www.instagram.com/misenvios/p/DKudWIxMcw-/' },
      { img: flash5, url: 'https://www.instagram.com/p/DLFm_P3ur2y/' },
    ],
  },
  {
    id: 3,
    periodo: { es: 'Jun 2022 — Oct 2023', en: 'Jun 2022 — Oct 2023' },
    nombre: 'Servicios CEO — UNSTA',
    rol: { es: 'Diseñadora gráfica y multimedial', en: 'Graphic & Multimedia Designer' },
    desc: {
      es: 'Diseño y producción de contenido multimedia para campañas institucionales, admisiones y comunicación universitaria. Desarrollo de piezas gráficas, animaciones, videos y recursos adaptados a múltiples plataformas y públicos.',
      en: 'Design and production of multimedia content for institutional campaigns, admissions and university communications. Development of graphic pieces, animations, videos and assets adapted to multiple platforms and audiences.',
    },
    posts: [
      { img: unsta1, url: 'https://www.instagram.com/p/CgCsOeElajD/' },
      { img: unsta2, url: 'https://www.instagram.com/p/Cd5z-HXl-pq' },
    ],
  },
]
