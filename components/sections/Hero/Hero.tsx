import styles from "./Hero.module.css";
import { portfolioData } from "@/data/portfolioData";
import Link from "next/link";
import Image from "next/image";
import profilePic from "@/public/images/FOTO.jpg";

export default function Hero() {
  const { personal, about } = portfolioData;

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.glowTop}></div>
      <div className={styles.glowBottom}></div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h2 className={styles.greeting}>Hola, soy</h2>
          <h1 className={styles.name}>{personal.name}</h1>
          <h3 className={styles.title}>{personal.title}</h3>

          <p className={styles.description}>{about}</p>

          <div className={styles.actions}>
            <a href="#" className={styles.primaryBtn}>
              Descargar CV
            </a>
            <Link href="#contact" className={styles.secondaryBtn}>
              Contáctame
            </Link>
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src={profilePic}
              alt={`Foto de ${personal.name}`}
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
