"use client";

import { useState } from "react";
import styles from "./Achievements.module.css";
import { portfolioData } from "../../data/portfolioData";
import ImageViewer from "../ui/ImageViewer/ImageViewer";

export default function Achievements() {
  const { achievements } = portfolioData;
  const [viewerState, setViewerState] = useState<{ images: string[], index: number } | null>(null);

  return (
    <section id="achievements" className={styles.achievementsSection}>
      <div className="container">
        <h2 className="section-title">Reconocimientos y Logros</h2>
        
        <div className={styles.grid}>
          {achievements.map((achieve, idx) => (
            <div key={idx} className={`${styles.card} glass-panel`}>
              <div className={styles.header}>
                <div className={styles.meta}>
                  <span className={styles.institution}>{achieve.institution}</span>
                  <span className={styles.year}>{achieve.year}</span>
                </div>
                <h3 className={styles.title}>{achieve.title}</h3>
              </div>

              <div className={styles.content}>
                <p className={styles.description}>{achieve.description}</p>
                
                <ul className={styles.highlights}>
                  {achieve.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>

                <div className={styles.footer}>
                  <div className={styles.links}>
                    {achieve.links.map((link, lIdx) => (
                      <a 
                        key={lIdx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <div className={styles.gallery}>
                    {achieve.images.map((img, imgIdx) => {
                      const handleOpen = (e: React.MouseEvent | React.PointerEvent) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setViewerState({ images: achieve.images, index: imgIdx });
                      };
                      return (
                        <button 
                          key={imgIdx} 
                          className={styles.thumbnail}
                          onClick={handleOpen}
                          onPointerUp={handleOpen}
                          aria-label={`Ver imagen ${imgIdx + 1} de ${achieve.title}`}
                        >
                          <img src={img} alt={`${achieve.title} visual ${imgIdx + 1}`} loading="eager" />
                          <div className={styles.thumbnailOverlay}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {viewerState && (
        <ImageViewer 
          images={viewerState.images} 
          initialIndex={viewerState.index}
          onClose={() => setViewerState(null)} 
        />
      )}
    </section>
  );
}
