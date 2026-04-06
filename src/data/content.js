import emergeImg from '../assets/emerge.png'
import warnerImg from '../assets/warner.png'
import beautyouImg from '../assets/beautyou.png'
import moonImg from '../assets/moon.png'

import proworkPost1 from '../assets/pw 1.png'
import proworkPost2 from '../assets/pw 2.png'
import proworkPost3 from '../assets/pw 3.png'
import proworkPost4 from '../assets/pw 4.png'

import flashPost1 from '../assets/flash 1.png'
import flashPost2 from '../assets/flash 2.png'
import flashPost3 from '../assets/flash 3.png'
import flashPost4 from '../assets/flash 4.png'
import flashPost5 from '../assets/flash 5.png'

import unstaPost1 from '../assets/unsta 1.png'
import unstaPost2 from '../assets/unsta 2.png'

export const proyectos = [
  {
    id: 1,
    tag: 'Diseño gráfico · Swiss Design',
    titulo: 'Emerge — Poster suizo',
    desc: 'Pieza editorial de diseño suizo. El proyecto más visto en Behance. Composición tipográfica con rigor geométrico y fuerza visual.',
    img: emergeImg,
    url: 'https://www.behance.net/gallery/204110719/01-EMERGE-SWISS-DESIGN-FUNDAMENTALS',
  },
  {
    id: 2,
    tag: 'Motion · Broadcast',
    titulo: 'Warner Music Group Broadcast Pack',
    desc: 'Sistema de animaciones y piezas gráficas para broadcasting de una de las majors más importantes de la industria musical.',
    img: warnerImg,
    url: 'https://www.behance.net/gallery/157765497/Warner-Music-Group-BROADCAST-PACK',
  },
  {
    id: 3,
    tag: 'FUI · Motion · UI Design',
    titulo: 'Mission to the Moon — FUI',
    desc: 'Interfaz de usuario ficticia (Fictional User Interface) con estética espacial. Sistema gráfico de instrumentación interactiva.',
    img: moonImg,
    url: 'https://www.behance.net/gallery/186560773/Mission-to-the-Moon-FUI-Design',
  },
  {
    id: 4,
    tag: 'Identidad visual · Branding',
    titulo: 'Beautyou — Brief by Croca',
    desc: 'Desarrollo de identidad visual para marca de ropa interior femenina. Proyecto de branding completo con sistema gráfico y aplicaciones.',
    img: beautyouImg,
    url: 'https://www.behance.net/gallery/138887507/Beautyou-briefbycroca',
  },
]

export const experiencia = [
  {
    id: 'prowork',
    nombre: 'Grupo Prowork',
    periodo: 'Sept 2023 — Presente',
    rol: 'Diseñadora Gráfica',
    desc: 'Diseño de contenido visual para redes sociales de una empresa de merchandising promocional nacional. Producción regular de piezas para campañas estacionales, motion graphics y catálogos de producto.',
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
    rol: 'Diseñadora Gráfica — Mis Envíos · Logísticas Especiales · Flash',
    desc: 'Responsable del diseño visual para tres marcas del grupo empresarial. Realicé la identidad corporativa del grupo empresarial desde cero, diseño de logo, papelería y señalética.',
    posts: [
      { img: flashPost1, url: 'https://www.instagram.com/p/DIy7yJiuhGk/'},
      { img: flashPost2, url: 'https://www.instagram.com/misenvios/p/DLm20PttFLU/' },
      { img: flashPost3, url: 'https://www.instagram.com/p/DFu2dTDRFkE/' },
      { img: flashPost4, url: 'https://www.instagram.com/misenvios/p/DKudWIxMcw-/' },
      { img: flashPost5, url: 'https://www.instagram.com/p/DLFm_P3ur2y/' },
    ],
  },
  {
    id: 'unsta',
    nombre: 'UNSTA — Servicios CEO',
    periodo: 'Jun 2022 — Oct 2023',
    rol: 'Diseñadora Gráfica',
    desc: 'Producción de contenido multimedia para comunicación institucional universitaria: campañas de admisión, spots, GIFs y videos.',
    posts: [
      { img: unstaPost1, url: 'https://www.instagram.com/p/Cd5z-HXl-pq/' },
      { img: unstaPost2, url: 'https://www.instagram.com/p/CgCsOeElajD/' },
    ],
  },
]

export const skills = [
  'Identidad visual', 'Motion graphics', 'Diseño editorial',
  'Redes sociales', 'After Effects', 'Photoshop',
  'Illustrator', 'Figma', 'Premiere Pro', 'InDesign',
]
