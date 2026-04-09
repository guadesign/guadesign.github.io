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
    tag: { spa: 'Diseño gráfico · Swiss Design', eng: 'Graphic Design · Swiss Design' },
    titulo: 'Emerge — Poster suizo',
    desc: { 
      spa: 'Pieza editorial de diseño suizo. El proyecto más visto en Behance. Composición tipográfica con rigor geométrico y fuerza visual.',
      eng: 'Swiss design editorial piece. Most viewed project on Behance. Typographic composition with geometric rigor and visual strength.'
    },
    img: emergeImg,
    url: 'https://www.behance.net/gallery/204110719/01-EMERGE-SWISS-DESIGN-FUNDAMENTALS',
  },
  {
    id: 2,
    tag: { spa: 'Motion · Broadcast', eng: 'Motion · Broadcast' },
    titulo: 'Warner Music Group Broadcast Pack',
    desc: {
      spa: 'Sistema de animaciones y piezas gráficas para broadcasting de una de las majors más importantes de la industria musical.',
      eng: 'Animation system and graphic pieces for broadcasting for one of the major labels in the music industry.'
    },
    img: warnerImg,
    url: 'https://www.behance.net/gallery/157765497/Warner-Music-Group-BROADCAST-PACK',
  },
  {
    id: 3,
    tag: { spa: 'FUI · Motion · UI Design', eng: 'FUI · Motion · UI Design' },
    titulo: 'Mission to the Moon — FUI',
    desc: {
      spa: 'Interfaz de usuario ficticia (Fictional User Interface) con estética espacial. Sistema gráfico de instrumentación interactiva.',
      eng: 'Fictional User Interface (FUI) with space aesthetics. Graphic system for interactive instrumentation.'
    },
    img: moonImg,
    url: 'https://www.behance.net/gallery/186560773/Mission-to-the-Moon-FUI-Design',
  },
  {
    id: 4,
    tag: { spa: 'Identidad visual · Branding', eng: 'Visual Identity · Branding' },
    titulo: 'Beautyou — Brief by Croca',
    desc: {
      spa: 'Desarrollo de identidad visual para marca de ropa interior femenina. Proyecto de branding completo con sistema gráfico y aplicaciones.',
      eng: 'Visual identity development for a women\'s underwear brand. Full branding project including graphic system and applications.'
    },
    img: beautyouImg,
    url: 'https://www.behance.net/gallery/138887507/Beautyou-briefbycroca',
  },
]

export const experiencia = [
  {
    id: 'prowork',
    nombre: 'Grupo Prowork',
    periodo: { spa: 'Sept 2023 — Presente', eng: 'Sept 2023 — Present' },
    rol: { spa: 'Diseñadora Gráfica', eng: 'Graphic Designer' },
    desc: {
      spa: 'Diseño de contenido visual para redes sociales de una empresa de merchandising promocional nacional.',
      eng: 'Visual content design for social media for a national promotional merchandising company.'
    },
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
    periodo: { spa: 'Sept 2024 — Jul 2025', eng: 'Sept 2024 — Jul 2025' },
    rol: { 
      spa: 'Diseñadora Gráfica — Mis Envíos · Logísticas Especiales · Flash', 
      eng: 'Graphic Designer — Special Logistics · Flash' 
    },
    desc: {
      spa: 'Responsable del diseño visual para tres marcas del grupo empresarial. Realicé la identidad corporativa del grupo empresarial desde cero.',
      eng: 'Responsible for the visual design of three brands within the corporate group. Developed the corporate identity from scratch.'
    },
    posts: [
      { img: flashPost1, url: 'https://www.instagram.com/misenvios/p/DKudWIxMcw-/' },
      { img: flashPost2, url: 'https://www.instagram.com/misenvios/p/DLm20PttFLU/' },
      { img: flashPost3, url: 'https://www.instagram.com/p/DLFm_P3ur2y/' },
      { img: flashPost4, url: 'https://www.instagram.com/p/DKrvZQpOod5/' },
      { img: flashPost5, url: 'https://www.instagram.com/p/DFu2dTDRFkE/' },
    ],
  },
  {
    id: 'unsta',
    nombre: 'UNSTA — Servicios CEO',
    periodo: { spa: 'Jun 2022 — Oct 2023', eng: 'Jun 2022 — Oct 2023' },
    rol: { spa: 'Diseñadora Gráfica', eng: 'Graphic Designer' },
    desc: {
      spa: 'Producción de contenido multimedia para comunicación institucional universitaria.',
      eng: 'Multimedia content production for university institutional communication.'
    },
    posts: [
      { img: unstaPost1, url: 'https://www.instagram.com/p/Cd5z-HXl-pq/' },
      { img: unstaPost2, url: 'https://www.instagram.com/p/CgCsOeElajD/' },
    ],
  },
]

export const skills = [
  'Visual Identity', 'Motion Graphics', 'Editorial Design',
  'Social Media', 'After Effects', 'Photoshop',
  'Illustrator', 'Figma', 'Premiere Pro', 'InDesign',
]

export const labels = {
  labelProyectos: { spa: '02 — Selección', eng: '02 — Selection' },
  tituloProyectos: { spa: 'Proyectos destacados', eng: 'Featured Projects' },
  labelExp: { spa: '03 — Trayectoria', eng: '03 — Experience' },
  tituloExp: { spa: 'Experiencia profesional', eng: 'Professional Experience' },
  labelSkills: { spa: '04 — Habilidades', eng: '04 — Skills' },
  verPost: { spa: 'Ver post', eng: 'View post' },
  verBehance: { spa: 'Ver en Behance', eng: 'View on Behance' }
}
