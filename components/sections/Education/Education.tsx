import styles from "./Education.module.css";
import { portfolioData } from "../../../data/portfolioData";

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

        {/* Specializing In (Terminal View) */}
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span></span><span></span><span></span>
            </div>
            <span className={styles.terminalTitle}>especialización.sh</span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.line}>
              <span className={styles.userHost}>emersson@ubuntu</span>
              <span className={styles.colon}>:</span>
              <span className={styles.path}>~</span>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>sudo apt upgrade especialización</span>
            </div>
            <div className={styles.systemMsg}>Leyendo lista de paquetes... Hecho</div>
            <div className={styles.systemMsg}>Actualizando conocimientos de software...</div>
            
            <div className={styles.verticalList}>
              {portfolioData.skills.learning.map((s, i) => (
                <div key={i} className={styles.roadmapItem}>
                  <span className={styles.status}>[INSTALANDO]</span> {s}...
                </div>
              ))}
            </div>
            
            <div className={styles.progressRow}>
              <span className={styles.progressLabel}>Progreso:</span>
              <div className={styles.textProgressBar}>
                [<span className={styles.progressChars}>==========================</span>]
              </div>
              <span className={styles.progressPercent}>75%</span>
            </div>
            <div className={styles.systemMsg}>Especialización en curso: Descargando nuevos módulos...</div>
          </div>
        </div>
      </div>
    </section>
  );
}
