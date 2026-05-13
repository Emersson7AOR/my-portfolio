"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Experiencia", href: "#experience" },
    { name: "Logros", href: "#achievements" },
    { name: "Stack", href: "#about" },
    { name: "Educación", href: "#education" },
  ];

  return (
    <>
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
          Emersson<span>.dev</span>
        </Link>

        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/522717406782" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.contactBtn}
          >
            Contacto
          </a>
        </nav>

        <button 
          className={`${styles.menuBtn} ${isMenuOpen ? styles.menuOpen : ""}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

    </header>
    <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.showMenu : ""}`}>
      <nav className={styles.mobileNav}>
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <a 
          href="https://wa.me/522717406782" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.mobileContactBtn}
          onClick={() => setIsMenuOpen(false)}
        >
          Contacto
        </a>
      </nav>
    </div>
    </>
  );
}
