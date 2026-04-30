import styles from "./Achievements.module.css";
import { portfolioData } from "../../data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className={styles.achievementsSection}>
      <div className="container">
        <h2 className="section-title">Logros Destacados</h2>
        
        <div className={styles.grid}>
          {achievements.map((achieve, idx) => (
            <div key={idx} className={`${styles.card} glass-panel`}>
              <div className={styles.diplomaPlaceholder}>
                {/* Aquí pondremos la imagen real del diploma */}
                <span>Diploma / Imagen<br/>{achieve.title.substring(0, 15)}...</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{achieve.title}</h3>
                <p className={styles.description}>{achieve.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
