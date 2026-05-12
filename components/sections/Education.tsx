import styles from "./Education.module.css";
import { portfolioData } from "../../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className={styles.educationSection}>
      <div className="container">
        <h2 className="section-title">Formación Académica</h2>
        
        <div className={styles.timeline}>
          {education.map((edu, idx) => (
            <div key={idx} className={`${styles.timelineItem} glass-panel`}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <div className={styles.info}>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <h4 className={styles.institution}>{edu.institution}</h4>
                  </div>
                  <span className={styles.period}>{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
