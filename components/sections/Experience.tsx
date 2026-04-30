import styles from "./Experience.module.css";
import { portfolioData } from "../../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <h2 className="section-title">Experiencia & Proyectos</h2>
        
        <div className={styles.timeline}>
          {experience.map((exp, idx) => (
            <div key={idx} className={`${styles.timelineItem} glass-panel`}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company} {exp.period && <span className={styles.period}>| {exp.period}</span>}</h4>
                <p className={styles.description}>{exp.description}</p>
                
                {/* Carrusel de Imágenes para el Proyecto */}
                <div className={styles.carouselContainer}>
                  <div className={styles.carouselScroll}>
                    {/* Placeholder para las imágenes del proyecto. Reemplazar con <Image /> reales luego */}
                    <div className={styles.carouselItem}>Imagen 1<br/>{exp.company}</div>
                    <div className={styles.carouselItem}>Imagen 2<br/>{exp.company}</div>
                    <div className={styles.carouselItem}>Imagen 3<br/>{exp.company}</div>
                  </div>
                  <p className={styles.carouselHint}>Desliza para ver más →</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
