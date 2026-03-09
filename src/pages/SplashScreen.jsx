// src/pages/SplashScreen.jsx
import React, { useEffect } from 'react';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const t = setTimeout(onFinish, 2800);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(160deg, #1A3A08 0%, #2D5016 50%, #4A7C23 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Círculos decorativos */}
      {[...Array(3)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${200 + i * 120}px`,
          height: `${200 + i * 120}px`,
          borderRadius: '50%',
          border: `1px solid rgba(255,255,255,${0.06 - i * 0.015})`,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />
      ))}

      {/* Hoja decorativa superior */}
      <div style={{
        position: 'absolute', top: '-20px', right: '-30px',
        fontSize: '140px', opacity: 0.08,
        transform: 'rotate(-30deg)',
      }}>🌿</div>
      <div style={{
        position: 'absolute', bottom: '-20px', left: '-30px',
        fontSize: '120px', opacity: 0.08,
        transform: 'rotate(20deg)',
      }}>🍃</div>

      {/* Contenido principal */}
      <div style={{
        textAlign: 'center', zIndex: 10,
        animation: 'fadeIn 0.6s ease forwards',
      }}>
        {/* Escudo / Logo */}
        <div style={{
          width: '96px', height: '96px', borderRadius: '28px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '52px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
          animation: 'pulse 2s ease-in-out infinite',
        }}>
          📚
        </div>

        <h1 style={{
          color: 'white', margin: '0 0 8px',
          fontFamily: "'Playfair Display', serif",
          fontSize: '28px', fontWeight: '700',
          letterSpacing: '-0.5px',
          textShadow: '0 2px 8px rgba(0,0,0,0.3)',
        }}>
          Diccionario
        </h1>
        <h2 style={{
          color: 'rgba(255,255,255,0.9)', margin: '0 0 6px',
          fontFamily: "'Playfair Display', serif",
          fontSize: '22px', fontWeight: '400',
          fontStyle: 'italic',
        }}>
          Awajún · Wampis
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.6)',
          fontSize: '13px', margin: '16px 0 0',
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '1px', textTransform: 'uppercase',
        }}>
          Español · Inglés · Lenguas Originarias
        </p>
      </div>

      {/* Indicador de carga */}
      <div style={{
        position: 'absolute', bottom: '60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
      }}>
        <div style={{
          width: '120px', height: '3px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '2px', overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #8BC34A, #C5E1A5)',
            borderRadius: '2px',
            animation: 'shimmer 2.5s ease forwards',
            width: '100%',
            transformOrigin: 'left',
          }} />
        </div>
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '11px', letterSpacing: '0.5px',
        }}>
          Preservando lenguas amazónicas
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
