import styles from "./Education.module.css";
import { portfolioData } from "../../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className={styles.educationSection}>
      <div className="container">
        <h2 className="section-title">Formación Académica</h2>
        
        <div className={styles.list}>
          {education.map((edu, idx) => (
            <div key={idx} className={`${styles.item} glass-panel`}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className={styles.content}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <h4 className={styles.institution}>{edu.institution}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
