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
          'Responsable de la definición y evolución de la identidad visual de la marca para Argentina y Chile.',
          'Diseño y producción de contenido para redes sociales, motion graphics, catálogos y materiales comerciales.',
          'Desarrollo de recursos visuales para equipos de marketing y ventas, adaptando campañas a formatos digitales e impresos.',
        ],
      },
      {
        rol: 'Diseñadora Gráfica',
        empresa: 'Grupo Flash',
        periodo: 'Sept 2024 — Sept 2025',
        items: [
          'Desarrollo de piezas gráficas y contenido digital para las distintas unidades de negocio del grupo en Argentina, Bolivia y la región NOA.',
          'Creación de la identidad visual inicial de Grupo Flash, incluyendo logotipo, sistema visual básico y aplicaciones institucionales para comunicación corporativa.',
          'Producción de contenido para redes sociales y materiales de comunicación en coordinación con equipos de marketing y community manager.',
        ],
      },
      {
        rol: 'Diseñadora Gráfica y Multimedial',
        empresa: 'Servicios CEO, UNSTA',
        periodo: 'Jun 2022 — Oct 2023',
        items: [
          'Diseño y producción de contenido multimedia para campañas institucionales, admisiones y comunicación universitaria.',
          'Desarrollo de piezas gráficas, animaciones, videos y recursos adaptados a múltiples plataformas y públicos.',
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
          'Responsible for defining and evolving the brand\'s visual identity for Argentina and Chile.',
          'Design and production of social media content, motion graphics, catalogs and commercial materials.',
          'Development of visual assets for marketing and sales teams, adapting campaigns across digital and print formats.',
        ],
      },
      {
        rol: 'Graphic Designer',
        empresa: 'Grupo Flash',
        periodo: 'Sept 2024 — Sept 2025',
        items: [
          'Development of graphic pieces and digital content for the group\'s business units across Argentina, Bolivia and the NOA region.',
          'Created the initial visual identity for Grupo Flash, including logo, basic visual system and institutional applications for corporate communication.',
          'Social media content production in coordination with marketing and community management teams.',
        ],
      },
      {
        rol: 'Graphic & Multimedia Designer',
        empresa: 'Servicios CEO, UNSTA',
        periodo: 'Jun 2022 — Oct 2023',
        items: [
          'Design and production of multimedia content for institutional campaigns, admissions and university communications.',
          'Development of graphic pieces, animations, videos and assets adapted to multiple platforms and audiences.',
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
