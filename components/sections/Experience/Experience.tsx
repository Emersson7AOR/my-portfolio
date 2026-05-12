"use client";

import { useState } from "react";
import styles from "./Experience.module.css";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import ImageViewer from "@/components/ui/ImageViewer/ImageViewer";

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                    <div className={styles.carouselScroll}>
                      {exp.images.map((img, i) => (
                        <div 
                          key={i} 
                          className={styles.carouselItem}
                          onClick={() => setSelectedImage(img)}
                          style={{ cursor: 'zoom-in' }}
                        >
                          <Image 
                            src={img} 
                            alt={`${exp.company} - Screenshot ${i + 1}`}
                            fill
                            className={styles.projectImage}
                          />
                        </div>
                      ))}
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
                      <p className={styles.carouselHint}>Desliza para explorar los detalles →</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageViewer 
          src={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </section>
  );
}
