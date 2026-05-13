import styles from "./About.module.css";
import { portfolioData } from "../../../data/portfolioData";

export default function About() {
  const { aboutTechnical, skills } = portfolioData;

  const iconMap: Record<string, string> = {
    "Node.js": "/icons/node.webp",
    "Express": "/icons/express-logo.webp",
    "PostgreSQL": "/icons/PostgreSQL.webp",
    "Supabase": "/icons/supabase.webp",
    "Firebase": "/icons/firebase.webp",
    "Ionic": "/icons/ionic-framework.webp",
    "React": "/icons/react_ts.webp",
    "Angular": "/icons/angular.webp",
    "Tailwind": "/icons/Tailwind.webp",
    "Cloudflare": "/icons/cloudflare.webp",
    "Docker": "/icons/docker.webp",
    "Linux": "/icons/ubuntu.webp",
    "Windows": "/icons/windows.webp",
    "Cursor": "/icons/cursor.webp",
    "Antigravity": "/icons/antigravity-icon.webp",
    "ClickUp": "/icons/Clickup.webp",
    "Git": "/icons/git.webp"
  };

  const renderIconStack = (skillList: string[]) => (
    <div className={styles.iconStack}>
      {skillList.map((skill, index) => (
        <div key={index} className={styles.iconWrapper} title={skill}>
          {iconMap[skill] ? (
            <img src={iconMap[skill]} alt={skill} className={styles.techIcon} />
          ) : (
            <span className={styles.skillInitial}>{skill[0]}</span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <h2 className="section-title">Stack Tecnológico & Ecosistema de Desarrollo</h2>
        
        <div className={styles.commandCenter}>
          {/* Main Intelligence Hub */}
          <div className={`${styles.hub} glass-panel`}>
            <div className={styles.hubHeader}>
              <div className={styles.scanner}></div>
              <h3>Inteligencia del Sistema</h3>
            </div>
            <div className={styles.hubBody}>
              <p>{aboutTechnical}</p>
            </div>
            <div className={styles.hubFooter}>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.label}>Estado</span>
                  <span className={styles.value}>Activo</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Nivel</span>
                  <span className={styles.value}>Full-Stack</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Idioma</span>
                  <span className={styles.value}>ES / EN (Técnico)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Functional Modules */}
          <div className={styles.modules}>
            <div className={`${styles.module} glass-panel`}>
              <div className={styles.moduleHeader}>
                <span className={styles.moduleType}>Motor</span>
                <h4>Backend & Persistencia</h4>
              </div>
              {renderIconStack(skills.backend)}
            </div>

            <div className={`${styles.module} glass-panel`}>
              <div className={styles.moduleHeader}>
                <span className={styles.moduleType}>Interfaz</span>
                <h4>Frontend & Móvil</h4>
              </div>
              {renderIconStack(skills.frontend)}
            </div>

            <div className={`${styles.module} glass-panel`}>
              <div className={styles.moduleHeader}>
                <span className={styles.moduleType}>Nube</span>
                <h4>Infraestructura & Entorno</h4>
              </div>
              {renderIconStack(skills.infrastructure)}
            </div>

            <div className={`${styles.module} glass-panel`}>
              <div className={styles.moduleHeader}>
                <span className={styles.moduleType}>Flujo</span>
                <h4>Agilidad Optimizada con IA</h4>
              </div>
              {renderIconStack(skills.tools)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
