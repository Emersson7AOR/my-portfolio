"use client";

import { useState, useRef } from "react";
import styles from "./Experience.module.css";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import ImageViewer from "@/components/ui/ImageViewer/ImageViewer";

export default function Experience() {
  const { experience } = portfolioData;
  const [viewerState, setViewerState] = useState<{ images: string[], index: number } | null>(null);
  
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scroll = (index: number, direction: 'left' | 'right') => {
    const container = scrollRefs.current[index];
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <h2 className="section-title">Experiencia & Proyectos</h2>
        
        <div className={styles.timeline}>
          {experience.map((exp, idx) => (
            <div key={idx} className={`${styles.timelineItem} glass-panel`}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <div className={styles.companyInfo}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  {exp.period && <span className={styles.period}>{exp.period}</span>}
                </div>
                
                <p className={styles.descriptionShort}>{exp.descriptionShort}</p>
                <p className={styles.descriptionFull}>{exp.descriptionFull}</p>
                
                {exp.images && exp.images.length > 0 && (
                  <div className={styles.carouselContainer}>
                    {exp.images.length > 1 && (
                      <div className={styles.imageCount}>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{exp.images.length} fotos</span>
                      </div>
                    )}
                    
                    <div className={styles.carouselWrapper}>
                      {exp.images.length > 1 && (
                        <>
                          <button 
                            className={`${styles.navBtn} ${styles.prevBtn}`} 
                            onClick={() => scroll(idx, 'left')}
                            aria-label="Anterior"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                          <button 
                            className={`${styles.navBtn} ${styles.nextBtn}`} 
                            onClick={() => scroll(idx, 'right')}
                            aria-label="Siguiente"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 5l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                        </>
                      )}
                      
                      <div 
                        className={styles.carouselScroll}
                        ref={el => { scrollRefs.current[idx] = el; }}
                      >
                        {exp.images.map((img, i) => {
                          const handleOpen = (e: React.MouseEvent | React.PointerEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setViewerState({ images: exp.images, index: i });
                          };
                          return (
                            <button 
                              key={i} 
                              className={styles.carouselItem}
                              onClick={handleOpen}
                              onPointerUp={handleOpen}
                              aria-label={`Ver imagen ${i + 1}`}
                            >
                              <Image 
                                src={img} 
                                alt={`${exp.company} - Screenshot ${i + 1}`}
                                fill
                                className={styles.projectImage}
                                loading="eager"
                                priority={i === 0}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {exp.link ? (
                      <div className={styles.carouselFooter}>
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                          Ir a landing page
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    ) : (
                      <p className={styles.carouselHint}>Usa las flechas para explorar los detalles →</p>
                    )}
                  </div>
                )}
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
