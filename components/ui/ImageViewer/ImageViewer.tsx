"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./ImageViewer.module.css";

interface ImageViewerProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function ImageViewer({ images, initialIndex, onClose }: ImageViewerProps) {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleZoomIn = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const newZoom = Math.max(zoom - 0.25, 0.5);
    setZoom(newZoom);
    if (newZoom <= 1) setOffset({ x: 0, y: 0 });
  };

  const handleRotate = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setRotation((prev) => (prev + 90) % 360);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setZoom(1);
    setRotation(0);
    setOffset({ x: 0, y: 0 });
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setZoom(1);
    setRotation(0);
    setOffset({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setStartPos({ x: clientX - offset.x, y: clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setOffset({
      x: clientX - startPos.x,
      y: clientY - startPos.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    setMounted(true);
    const originalStyles = {
      overflow: document.body.style.overflow,
      htmlOverflow: document.documentElement.style.overflow
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = originalStyles.overflow;
      document.documentElement.style.overflow = originalStyles.htmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, images.length]);

  if (!mounted) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose} onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
      <button 
        className={styles.closeBtn} 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Cerrar visor"
      >
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={handlePrev}>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div 
        className={styles.viewerContainer} 
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
      >
        <div 
          className={styles.imageWrapper}
          style={{ 
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom}) rotate(${rotation}deg)`,
            transition: isDragging ? 'none' : undefined
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
    </div>,
    document.body
  );
}
