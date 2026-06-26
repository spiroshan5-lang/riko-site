"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/riko-logo.png";

export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Fade out loader after 2.5s, matching loader.html
    const t = setTimeout(() => setDone(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #0B0B0B;
          z-index: 99999;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          transition: opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), visibility 1.2s;
        }
        .preloader-logo-container {
          position: relative;
          width: 150px;
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0.9);
          animation: preloader-zoomIn 1.5s ease-out forwards;
        }
        .preloader-logo {
          width: 120px;
          height: 120px;
          object-fit: contain;
          border-radius: 50%;
          filter: drop-shadow(0 0 15px rgba(201,168,106,0.3));
          z-index: 2;
        }
        .preloader-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid transparent;
          border-top-color: #C9A86A;
          border-bottom-color: #C9A86A;
          border-radius: 50%;
          animation: preloader-rotateRing 3s linear infinite;
        }
        .preloader-glow {
          position: absolute;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,106,0.15) 0%, transparent 70%);
          animation: preloader-pulseGlow 2s ease-in-out infinite alternate;
        }
        .preloader-text {
          margin-top: 30px;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 200;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #8E8E8E;
          animation: preloader-fadePulse 1.8s ease-in-out infinite;
        }
        @keyframes preloader-rotateRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes preloader-pulseGlow {
          0% { transform: scale(0.95); opacity: 0.5; }
          100% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes preloader-fadePulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes preloader-zoomIn {
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div
        className="preloader-overlay"
        style={{
          opacity: done ? 0 : 1,
          visibility: done ? "hidden" : "visible",
          pointerEvents: done ? "none" : "all",
        }}
      >
        <div className="preloader-logo-container">
          <div className="preloader-glow" />
          <div className="preloader-ring" />
          <Image src={logo} alt="RIKO Crest" className="preloader-logo" />
        </div>
        <div className="preloader-text">Riko Experience</div>
      </div>
    </>
  );
}
