"use client";

import { useState, useEffect } from "react";
import styles from "./ImageViewer.module.css";

interface ImageViewerProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function ImageViewer({ images, initialIndex, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(0.75);
  const [rotation, setRotation] = useState(0);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setZoom(0.75);
    setRotation(0);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setZoom(0.75);
    setRotation(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, images.length]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button 
        className={styles.closeBtn} 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Cerrar visor"
      >
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navegación Izquierda */}
      <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev}>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className={styles.viewerContainer} onClick={(e) => e.stopPropagation()}>
        <div 
          className={styles.imageWrapper}
          style={{ 
            transform: `scale(${zoom}) rotate(${rotation}deg)` 
          }}
        >
          <img 
            src={images[currentIndex]} 
            alt={`Vista ampliada ${currentIndex + 1}`} 
            className={styles.image}
            draggable={false}
          />
        </div>
      </div>

      {/* Navegación Derecha */}
      <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={handleNext}>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className={styles.controls} onClick={(e) => e.stopPropagation()}>
        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
        
        <div className={styles.separator}></div>

        <button className={styles.controlBtn} onClick={handleZoomOut} title="Alejar">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        
        <span className={styles.zoomLabel}>
          {Math.round(zoom * 100)}%
        </span>

        <button className={styles.controlBtn} onClick={handleZoomIn} title="Acercar">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>

        <div className={styles.separator}></div>

        <button className={styles.controlBtn} onClick={handleRotate} title="Rotar">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );
}
