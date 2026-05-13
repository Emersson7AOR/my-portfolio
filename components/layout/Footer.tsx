import styles from "./Footer.module.css";
import { portfolioData } from "../../data/portfolioData";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Todos los derechos reservados.</p>
        <div className={styles.links}>
          <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
