// src/components/WordCard.jsx
import React, { memo } from 'react';
import { IDIOMAS } from '../utils/constants';

const WordCard = memo(({ entrada, isFavorite, onToggleFavorite, onSelect, darkMode }) => {
  const surface = darkMode ? '#1C2B10' : '#FFFFFF';
  const border = darkMode ? '#2D4418' : '#E8F5E9';
  const text = darkMode ? '#E8F5E9' : '#1A1A1A';
  const sub = darkMode ? '#9CCC65' : '#558B2F';

  const handleFav = (e) => {
    e.stopPropagation();
    onToggleFavorite(entrada.id);
  };

  return (
    <article
      onClick={() => onSelect(entrada)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(entrada)}
      style={{
        backgroundColor: surface,
        borderRadius: '20px',
        padding: '18px 20px',
        marginBottom: '10px',
        border: `1px solid ${border}`,
        cursor: 'pointer',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="word-card"
    >
      {/* Línea decorativa izquierda */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: '4px',
        background: 'linear-gradient(180deg, #4A7C23, #8BC34A)',
        borderRadius: '20px 0 0 20px',
      }} />

      <div style={{ paddingLeft: '8px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div>
            <h3 style={{
              margin: 0, color: text,
              fontSize: '17px', fontWeight: '600',
              fontFamily: "'Playfair Display', serif",
            }}>
              {entrada.es}
            </h3>
            <p style={{ margin: '3px 0 0', fontSize: '11px', color: sub, fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {entrada.cat} {entrada.gram && `· ${entrada.gram}`}
            </p>
          </div>
          <button
            onClick={handleFav}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            style={{
              background: 'none', border: 'none',
              fontSize: '20px', color: isFavorite ? '#FFD700' : (darkMode ? '#4A5940' : '#CCC'),
              transition: 'transform 0.2s, color 0.2s',
              padding: '4px',
              flexShrink: 0,
            }}
          >
            {isFavorite ? '⭐' : '☆'}
          </button>
        </div>

        {/* Idiomas */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {['en', 'aw', 'wa'].map(key => {
            const idioma = IDIOMAS[key];
            const valor = entrada[key];
            if (!valor) return null;
            return (
              <span
                key={key}
                style={{
                  backgroundColor: darkMode ? `${idioma.color}25` : idioma.bg,
                  color: idioma.color,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  display: 'flex', alignItems: 'center', gap: '5px',
                }}
              >
                <span style={{ fontSize: '14px' }}>{idioma.bandera}</span>
                {valor}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
});

WordCard.displayName = 'WordCard';
export default WordCard;
