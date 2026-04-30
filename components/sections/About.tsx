import styles from "./About.module.css";
import { portfolioData } from "../../data/portfolioData";

export default function About() {
  const { about, skills, aptitudes } = portfolioData;

  const renderSkillCategory = (title: string, skillList: string[]) => (
    <div className={styles.skillCategory}>
      <h4 className={styles.categoryTitle}>{title}</h4>
      <div className={styles.skillTags}>
        {skillList.map((skill, index) => (
          <span key={index} className={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <h2 className="section-title">Sobre Mí & Habilidades</h2>
        
        <div className={styles.content}>
          <div className={`${styles.textContent} glass-panel`}>
            <h3>Mi Enfoque</h3>
            <p>{about}</p>
            
            <h3 className={styles.mt4}>Aptitudes Principales</h3>
            <ul className={styles.aptitudesList}>
              {aptitudes.map((aptitude, i) => (
                <li key={i}>
                  <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {aptitude}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.skillsGrid}>
            {renderSkillCategory("Tecnología Médica", skills.medical)}
            {renderSkillCategory("Frontend", skills.frontend)}
            {renderSkillCategory("Backend & APIs", skills.backend)}
            {renderSkillCategory("Bases de Datos", skills.database)}
            {renderSkillCategory("Lenguajes", skills.languages)}
            {renderSkillCategory("Otras Herramientas", skills.other)}
          </div>
        </div>
      </div>
    </section>
  );
}
