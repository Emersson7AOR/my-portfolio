export const portfolioData = {
  personal: {
    name: "Emersson Rodrigo Álvarez Ordinola",
    title: "Desarrollador de Software",
    email: "rodrigoalvarezordinola@gmail.com",
    phone: "271-740-67-82",
    github: "https://github.com/EmerssonA7OR",
    facebook: "Emersson Rodrigo Álvarez"
  },
  about: "Estudiante de Ingeniería de Software con enfoque en aplicaciones web de alto impacto. Especializado en el desarrollo de soluciones full-stack y visualización de datos complejos.",
  experience: [
    {
      role: "Desarrollador de Software Médico en equipo",
      company: "Expediente Clínico Médico",
      period: "En desarrollo actual",
      descriptionShort: "Plataforma de gestión clínica con React y Supabase, optimizando procesos médicos y seguridad en PostgreSQL.",
      descriptionFull: "Lidero el desarrollo integral de una plataforma de gestión clínica utilizando React y Supabase para optimizar el flujo de registro y seguimiento de pacientes. Diseñé una arquitectura de base de datos robusta en PostgreSQL que asegura la integridad y disponibilidad de los datos médicos sensibles. Optimicé la interfaz de usuario para garantizar una experiencia fluida en el entorno clínico, enfocada en la reducción de tiempos administrativos.",
      images: [
        "/images/exp-clinic/login-clinic.webp",
        "/images/exp-clinic/patients-clinic.webp",
        "/images/exp-clinic/recipe-clinic.webp"
      ]
    },
    {
      role: "Desarrollador de Software Médico en equipo",
      company: "Proyecto OneViewer - LANIG",
      period: "Pasado/Actual",
      descriptionShort: "Visualizador DICOM de alto rendimiento con PACS Orthanc y Cornerstone3D para diagnóstico radiológico.",
      descriptionFull: "Desarrolló un ecosistema de visualización de imágenes médicas de alto rendimiento utilizando el estándar DICOM para garantizar la precisión en el diagnóstico clínico. Optimicé la interoperabilidad del sistema mediante la integración de servidores PACS (Orthanc), permitiendo una gestión fluida de archivos y metadatos médicos. Implementé bibliotecas de visualización avanzada como Cornerstone3D para el renderizado eficiente de estudios radiológicos en el navegador. Aseguré el rendimiento clínico del visor mediante el procesamiento eficiente de metadatos en el servidor, mejorando los tiempos de carga de imágenes diagnósticas.",
      images: [
        "/images/viewer/multimodal-viewer.webp",
        "/images/viewer/multi-site-viewer.webp",
        "/images/viewer/send-whatsapp3-viewer.webp"
      ],
      link: "https://oneviewer-landing.oneclinic.com.mx/" // Enlace de ejemplo, ajusta si es necesario
    },
    {
      role: "Desarrollador de Software",
      company: "Proyecto CRISTAL - Plataforma PyMES",
      period: "Finalizado",
      descriptionShort: "Plataforma de gestión de inventario y ventas para PyMES con Angular, SpringBoot y MongoDB.",
      descriptionFull: "Plataforma integral de gestión de inventario y ventas diseñada para empresas PyMES. Utiliza una arquitectura moderna con Angular para el frontend, SpringBoot para el backend y MongoDB para la persistencia de datos. Incluye dashboard de métricas, gestión de stock y vistas optimizadas para móviles.",
      images: [
        "/images/cristal/web1.webp",
        "/images/cristal/web2.webp",
        "/images/cristal/movil1.webp",
        "/images/cristal/movil2.webp"
      ],
      link: "https://cristal-platform.web.app/"
    },
    {
      role: "Desarrollador de Software",
      company: "EMALI - Aplicación Móvil Alzheimer",
      period: "Finalizado",
      descriptionShort: "App móvil para detección temprana de Alzheimer mediante pruebas cognitivas y seguimiento con React/Ionic.",
      descriptionFull: "Aplicación móvil que facilita el acceso a historiales médicos, estados de estudios y realización de pruebas para la detección de la enfermedad del Alzheimer. Desarrollada con Angular, Ionic, Python (Machine Learning) y Supabase.",
      images: [
        "/images/emali/movil1.jpg.webp",
        "/images/emali/movil3.webp",
        "/images/emali/movil4.webp",
        "/images/emali/movil5.jpg.webp",
        "/images/emali/movil6.jpg.webp"
      ],
      link: "https://emali-page.netlify.app/"
    },
    {
      role: "Desarrollador de Software",
      company: "EMALI - Expediente Clínico Web para pacientes con Alzheimer",
      period: "Finalizado",
      descriptionShort: "Sistema web para gestión de pacientes con Alzheimer y análisis clínico de expedientes con Angular y Firebase.",
      descriptionFull: "Aplicación web que facilita la gestión integral de pacientes con la enfermedad del Alzheimer y datos relacionados. Permite a los especialistas administrar historiales médicos, visualizar expedientes detallados y generar reportes estadísticos para el seguimiento del progreso clínico.",
      images: [
        "/images/emali/web1.webp",
        "/images/emali/web2.webp",
        "/images/emali/web3.webp",
        "/images/emali/web4.webp",
        "/images/emali/web5.webp"
      ],
      link: "https://github.com/emaliplatform/alzheimer-mobile-app"
    },
    {
      role: "Desarrollador Frontend/Mobile",
      company: "Tienda Isabel",
      period: "Finalizado",
      descriptionShort: "App multiplataforma con Ionic/Angular y Firebase para control de inventario y pagos QR.",
      descriptionFull: "Desarrollo de una aplicación multiplataforma utilizando Ionic y Angular. Implementación de Firebase para gestión de inventario en tiempo real y reportes. Creación de un sistema de pago mediante código QR.",
      images: []
    },
  ],
  education: [
    {
      degree: "Técnico Superior Universitario en Desarrollo de Software Multiplataforma",
      institution: "Universidad Tecnológica del Centro de Veracruz (UTCV)"
    },
    {
      degree: "Técnico en Ofimática",
      institution: "Centro de Estudios Tecnológicos Industriales y de Servicios No. 143"
    }
  ],
  achievements: [
    {
      title: "Proyecto EMALI",
      institution: "CEIAT UNAM / ExpoCiencias",
      year: "2024 - 2025",
      description: "Plataforma para la detección temprana del Alzheimer mediante resonancia magnética y machine learning.",
      highlights: [
        "Publicado como artículo científico por el CEIAT de la UNAM.",
        "Seleccionado para ponencia magistral.",
        "Acreditación para la fase nacional de ExpoCiencias Tampico 2025."
      ],
      links: [
        { label: "Ver Certificado", url: "https://drive.google.com/file/d/128ju2aOMdff_sFr4MZavjIbScIiO4v6H/view?usp=drive_link" }, // User said they have links, I'll use placeholders for now or wait for them
        { label: "Acreditación", url: "https://drive.google.com/file/d/1jXAYRj1eCATPtCI1kFgkHfstRUZreQsq/view?usp=drive_link" }
      ],
      images: [
        "/images/achievements/emali-xalapa.webp",
        "/images/achievements/expo-cienciasRegional2025-2.webp",
        "/images/achievements/stand-emali-tampico.webp",
        "/images/achievements/initial-event-tampico.webp",
        "/images/achievements/group-pretampico.webp"
      ]
    },
    {
      title: "Proyecto CRISTAL",
      institution: "UTCV / Talent Land / ExpoCiencias",
      year: "2024 - 2025",
      description: "Sistema gestor y predictivo de inventarios con machine learning para PyMES.",
      highlights: [
        "Segundo lugar en Expotecnologías UTCV.",
        "Seleccionado para la fase nacional de ExpoCiencias Tabasco 2024.",
        "Invitación a Talent Land Jalisco 2025.",
        "Segundo lugar en Hackaton Talent Land."
      ],
      links: [
        { label: "Acreditación Tabasco", url: "https://drive.google.com/file/d/1bUArhQ217v0TltCyrS-0mhE0_QPOYI4a/view?usp=drive_link" },
        { label: "Acreditación Talent Land", url: "https://drive.google.com/file/d/18LjoLPgAwx1QDP7sbJHmJT2xROT6Yzqj/view?usp=drive_link" },
        { label: "Certificado Expotecnologías", url: "https://drive.google.com/file/d/1seInn3VUzmJjCjbaPbELcif8rYGIV4F1/view?usp=drive_link" }
      ],
      images: [
        "/images/achievements/cristal.webp",
        "/images/achievements/stand-cristal-tabasco.webp",
        "/images/achievements/expo-tecnologias-1.webp",
        "/images/achievements/expo-tecnologias-2.webp",
        "/images/achievements/expo-cienciasTabasco2.webp",
        "/images/achievements/expo-cienciasTabasco3.webp",
        "/images/achievements/expo-cienciasTabasco4.webp",
        "/images/achievements/expo-cienciasTabasco5.webp",
        "/images/achievements/expo-ciencias2024-1.webp",
        "/images/achievements/expo-ciencias2024-2.webp"
      ]
    }
  ],
  skills: {
    medical: ["DICOM", "Orthanc PACS", "Cornerstone3D"],
    frontend: ["Angular", "React", "Next.js", "Bootstrap", "Angular Material", "Ionic", "HTML5", "CSS3"],
    backend: ["Node.js", "Express", "NestJS", "RESTful APIs"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Firebase (Firestore)"],
    languages: ["JavaScript", "TypeScript", "Python", "Java", "PHP"],
    other: ["Docker", "Machine Learning", "Scrum", "Extreme Programming (XP)"]
  },
  aptitudes: [
    "Responsabilidad", "Trabajo en equipo", "Disponibilidad", "Adaptabilidad"
  ]
};
