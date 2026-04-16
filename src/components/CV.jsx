import React from 'react'
import styles from './CV.module.css'

const cvData = {
  es: {
    subtitulo: 'Diseñadora Multimedial',
    contactoTitulo: 'contacto',
    items: [
      { icon: 'be', texto: 'behance.com/itsmeguadi', url: 'https://behance.net/itsmeguadi' },
      { icon: '@', texto: 'mguadalupeeguiazabal@gmail.com', url: 'mailto:mguadalupeeguiazabal@gmail.com' },
      { icon: 'tel', texto: '+54 9 3814457642', url: 'tel:+5493814457642' },
      { icon: 'web', texto: 'guadesign.github.io', url: 'https://guadesign.github.io' },
      { icon: 'loc', texto: 'San Miguel de Tucumán, Argentina', url: null },
    ],
    sobreTitulo: 'sobre mí',
    sobreTexto: 'Soy diseñadora multimedial con más de 3 años de experiencia en identidad visual, motion design y contenido para redes sociales. Trabajé en contextos de empresa y freelance, gestionando múltiples marcas en simultáneo y colaborando con equipos de marketing. Domino la suite Adobe completa y tengo criterio estético, atención al detalle y capacidad de adaptarme a distintos lenguajes de marca.',
    formacionTitulo: 'formación',
    formacion: [
      { titulo: 'Licenciatura en Diseño Multimedial', lugar: 'Universidad del Norte Santo Tomás de Aquino (UNSTA)' },
    ],
    habilidadesTitulo: 'habilidades',
    habilidades: ['Illustrator', 'InDesign', 'Photoshop', 'Figma', 'After Effects', 'Canva', 'Premiere Pro', 'CapCut'],
    idiomaTitulo: 'idioma',
    idiomas: [{ lang: 'Inglés', nivel: 'C1' }, { lang: 'Español', nivel: 'nativo' }],
    expTitulo: 'experiencia',
    experiencia: [
      {
        rol: 'Diseñadora Gráfica',
        empresa: 'Grupo Prowork',
        periodo: 'Sept 2025 — Presente',
        items: [
          'Diseño de contenido visual para redes sociales de una empresa nacional de merchandising promocional, con producción regular de piezas para campañas estacionales.',
          'Creación de motion graphics y catálogos de producto en coordinación directa con el equipo de marketing.',
          'Adaptación de formatos visuales para distintas plataformas (feed, stories, catálogos impreso, folleteria).',
        ],
      },
      {
        rol: 'Diseñadora Gráfica',
        empresa: 'Grupo Flash',
        periodo: 'Sept 2024 — Jul 2025',
        items: [
          'Responsable del diseño visual para tres marcas del grupo logístico: Mis Envíos, Logísticas Especiales y Grupo Flash.',
          'Desarrollé la identidad corporativa del grupo desde cero, incluyendo el diseño del logo, papelería institucional y senalética.',
          'Produje contenido para redes sociales en colaboración con el equipo de CM y marketing, manteniendo coherencia visual entre las tres marcas.',
        ],
      },
      {
        rol: 'Diseñadora Gráfica',
        empresa: 'Servicios CEO, UNSTA',
        periodo: 'Jun 2022 — Oct 2023',
        items: [
          'Producción de contenido multimedia para comunicación institucional universitaria: campañas de admisión, spots, GIFs y videos.',
          'Diseño gráfico para comunicación interna y externa de la institución, con entrega en múltiples formatos y plataformas.',
          'Experiencia de trabajo en entorno institucional con plazos ajustados y alta producción de piezas.',
        ],
      },
    ],
  },
  en: {
    subtitulo: 'Multimedia Designer',
    contactoTitulo: 'contact',
    items: [
      { icon: 'web', texto: 'guadesign.github.io', url: 'https://guadesign.github.io' },
      { icon: 'be', texto: 'behance.com/itsmeguadi', url: 'https://behance.net/itsmeguadi' },
      { icon: '@', texto: 'mguadalupeeguiazabal@gmail.com', url: 'mailto:mguadalupeeguiazabal@gmail.com' },
      { icon: 'tel', texto: '+54 9 3814457642', url: 'tel:+5493814457642' },
      { icon: 'loc', texto: 'San Miguel de Tucuman, Argentina', url: null },
    ],
    sobreTitulo: 'about me',
    sobreTexto: "I'm a multimedia designer with over 3 years of experience in visual identity, motion design and social media content. I've worked in agency, corporate and freelance environments, managing multiple brands simultaneously and collaborating with marketing teams. I'm proficient in the full Adobe suite and bring aesthetic sensibility, attention to detail and adaptability across different brand languages.",
    formacionTitulo: 'education',
    formacion: [
      { titulo: "Bachelor's in Multimedia Design", lugar: 'Universidad del Norte Santo Tomas de Aquino (UNSTA)' },
    ],
    habilidadesTitulo: 'skills',
    habilidades: ['Illustrator', 'InDesign', 'Photoshop', 'Figma', 'After Effects', 'Canva', 'Premiere Pro', 'CapCut'],
    idiomaTitulo: 'language',
    idiomas: [{ lang: 'English', nivel: 'C1' }, { lang: 'Spanish', nivel: 'native' }],
    expTitulo: 'work experience',
    experiencia: [
      {
        rol: 'Graphic Designer',
        empresa: 'Grupo Prowork',
        periodo: 'Sept 2025 — Present',
        items: [
          'Visual content creation for social media at a promotional merchandising company, with regular production of pieces for seasonal campaigns.',
          'Motion graphics and product catalog creation in direct coordination with the marketing team.',
          'Adaptation of visual formats across platforms (feed, stories, printed catalogs, flyers).',
        ],
      },
      {
        rol: 'Graphic Designer',
        empresa: 'Grupo Flash',
        periodo: 'Sept 2024 — Jul 2025',
        items: [
          'Responsible for visual design across three brands within the logistics group: Mis Envios, Logisticas Especiales and Grupo Flash.',
          "Developed the group's corporate identity from scratch, including logo design, institutional stationery and signage.",
          'Produced social media content in collaboration with the community management and marketing team, maintaining visual consistency across all three brands.',
        ],
      },
      {
        rol: 'Graphic Designer',
        empresa: 'Servicios CEO, UNSTA',
        periodo: 'Jun 2022 — Oct 2023',
        items: [
          'Multimedia content production for university institutional communication: admission campaigns, spots, GIFs and videos.',
          'Graphic design for internal and external institutional communication, delivered across multiple formats and platforms.',
          'Experience working in an institutional environment with tight deadlines and high piece output.',
        ],
      },
    ],
  },
}

export default function CV({ lang }) {
  const d = cvData[lang]

  return (
    <div className={styles.cvPage}>
      <div className={styles.cvWrap}>

        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.nombre}>Guada<br />Eguiazabal</h1>
            <p className={styles.subtitulo}>{d.subtitulo}</p>
          </div>
          <div className={styles.star}>★</div>
        </div>

        <div className={styles.body}>

          <div className={styles.colLeft}>

            <div className={styles.bloque}>
              <h2 className={styles.secTitulo}>{d.contactoTitulo}</h2>
              <ul className={styles.contactList}>
                {d.items.map((item, i) => (
                  <li key={i}>
                    {item.url
                      ? <a href={item.url} target="_blank" rel="noreferrer">{item.texto}</a>
                      : <span>{item.texto}</span>
                    }
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.bloque}>
              <h2 className={styles.secTitulo}>{d.sobreTitulo}</h2>
              <p className={styles.sobreTexto}>{d.sobreTexto}</p>
            </div>

            <div className={styles.bloque}>
              <h2 className={styles.secTitulo}>{d.formacionTitulo}</h2>
              {d.formacion.map((f, i) => (
                <div key={i}>
                  <p className={styles.formTitulo}>{f.titulo}</p>
                  <p className={styles.formLugar}>{f.lugar}</p>
                </div>
              ))}
            </div>

            <div className={styles.bloque}>
              <h2 className={styles.secTitulo}>{d.habilidadesTitulo}</h2>
              <div className={styles.skillsGrid}>
                {d.habilidades.map((h, i) => (
                  <span key={i} className={styles.skillChip}>{h}</span>
                ))}
              </div>
            </div>

            <div className={styles.bloque}>
              <h2 className={styles.secTitulo}>{d.idiomaTitulo}</h2>
              {d.idiomas.map((id, i) => (
                <p key={i} className={styles.idioma}>
                  <strong>{id.lang}</strong> — {id.nivel}
                </p>
              ))}
            </div>

          </div>

          <div className={styles.colRight}>
            <h2 className={styles.secTitulo}>{d.expTitulo}</h2>
            {d.experiencia.map((exp, i) => (
              <div key={i} className={styles.expBloque}>
                <div className={styles.expHeader}>
                  <div>
                    <p className={styles.expRol}>{exp.rol}</p>
                    <p className={styles.expEmpresa}>{exp.empresa}</p>
                  </div>
                  <span className={styles.expPeriodo}>{exp.periodo}</span>
                </div>
                <ul className={styles.expItems}>
                  {exp.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
