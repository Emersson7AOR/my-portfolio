"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ImageViewer.module.css";

interface ImageViewerProps {
  src: string;
  onClose: () => void;
}

export default function ImageViewer({ src, onClose }: ImageViewerProps) {
  const [zoom, setZoom] = useState(0.75);
  const [rotation, setRotation] = useState(0);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);

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

      <div className={styles.viewerContainer} onClick={(e) => e.stopPropagation()}>
        <div 
          className={styles.imageWrapper}
          style={{ 
            transform: `scale(${zoom}) rotate(${rotation}deg)` 
          }}
        >
          <img 
            src={src} 
            alt="Vista ampliada" 
            className={styles.image}
            draggable={false}
          />
        </div>
      </div>

      <div className={styles.controls} onClick={(e) => e.stopPropagation()}>
        <button className={styles.controlBtn} onClick={handleZoomOut} title="Alejar">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        
        <span style={{ color: 'white', minWidth: '40px', textAlign: 'center', lineHeight: '40px' }}>
          {Math.round(zoom * 100)}%
        </span>

        <button className={styles.controlBtn} onClick={handleZoomIn} title="Acercar">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>

        <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)', margin: '0 0.5rem' }}></div>

        <button className={styles.controlBtn} onClick={handleRotate} title="Rotar">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );
}
