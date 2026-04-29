import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={`${styles.header} glass-panel`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Emersson<span>.dev</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="#about">Sobre mí</Link>
          <Link href="#experience">Experiencia</Link>
          <Link href="#projects">Proyectos</Link>
          <Link href="#contact">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
