// src/pages/DetalleScreen.jsx
import React from 'react';
import { IDIOMAS } from '../utils/constants';

const DetalleScreen = ({ state }) => {
  const {
    palabraSeleccionada: entrada,
    setPantalla, darkMode,
    favoritos, toggleFavorito,
  } = state;

  if (!entrada) { setPantalla('buscar'); return null; }

  const bg = darkMode ? '#0F1A08' : '#F4F8F0';
  const surface = darkMode ? '#1C2B10' : '#FFFFFF';
  const text = darkMode ? '#E8F5E9' : '#1A1A1A';
  const sub = darkMode ? '#81C784' : '#558B2F';
  const border = darkMode ? '#2D4418' : '#E8F5E9';
  const isFav = favoritos.includes(entrada.id);

  const idiomas = [
    { key: 'es', label: 'Español',  valor: entrada.es },
    { key: 'en', label: 'Inglés',   valor: entrada.en },
    { key: 'aw', label: 'Awajún',   valor: entrada.aw },
    { key: 'wa', label: 'Wampis',   valor: entrada.wa },
  ].filter(i => i.valor);

  const handleShare = async () => {
    const txt = `${entrada.es} | ${entrada.en} | 🟢 ${entrada.aw} | 🔵 ${entrada.wa}`;
    if (navigator.share) {
      await navigator.share({ title: `Diccionario: ${entrada.es}`, text: txt });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(txt);
      alert('¡Copiado al portapapeles!');
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: bg }}>
      {/* Header */}
      <div style={{
        paddingTop: '52px', paddingBottom: '28px',
        paddingLeft: '20px', paddingRight: '20px',
        background: 'linear-gradient(160deg, #1A3A08, #4A7C23)',
        textAlign: 'center', position: 'relative',
      }}>
        {/* Botón volver */}
        <button
          onClick={() => setPantalla('buscar')}
          aria-label="Volver"
          style={{
            position: 'absolute', left: '16px', top: '52px',
            background: 'rgba(255,255,255,0.15)', border: 'none',
            borderRadius: '10px', padding: '8px 12px',
            color: 'white', fontSize: '16px', cursor: 'pointer',
          }}
        >
          ← Volver
        </button>

        {/* Favorito */}
        <button
          onClick={() => toggleFavorito(entrada.id)}
          aria-label={isFav ? 'Quitar favorito' : 'Agregar favorito'}
          style={{
            position: 'absolute', right: '16px', top: '52px',
            background: 'rgba(255,255,255,0.15)', border: 'none',
            borderRadius: '10px', padding: '8px 12px',
            fontSize: '20px', cursor: 'pointer',
          }}
        >
          {isFav ? '⭐' : '☆'}
        </button>

        {/* Título */}
        <h1 style={{
          color: 'white', margin: '16px 0 6px',
          fontFamily: "'Playfair Display', serif",
          fontSize: '36px', fontWeight: '700',
          letterSpacing: '-1px',
        }}>
          {entrada.es}
        </h1>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {entrada.cat && (
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white', padding: '5px 14px',
              borderRadius: '20px', fontSize: '12px', fontWeight: '500',
            }}>
              {entrada.cat}
            </span>
          )}
          {entrada.gram && (
            <span style={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.85)', padding: '5px 14px',
              borderRadius: '20px', fontSize: '12px', fontStyle: 'italic',
            }}>
              {entrada.gram}
            </span>
          )}
        </div>
      </div>

      {/* Cuerpo scrollable */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', paddingBottom: '30px' }}>

        {/* Tarjeta de traducciones */}
        <div style={{
          backgroundColor: surface,
          borderRadius: '20px',
          overflow: 'hidden',
          marginBottom: '16px',
          border: `1px solid ${border}`,
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        }}>
          {idiomas.map((item, i) => {
            const idioma = IDIOMAS[item.key];
            return (
              <div key={item.key} style={{
                padding: '16px 20px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                borderBottom: i < idiomas.length - 1 ? `1px solid ${border}` : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '22px' }}>{idioma.bandera}</span>
                  <div>
                    <p style={{ margin: 0, fontSize: '11px', color: sub, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {item.label}
                    </p>
                    <p style={{
                      margin: '2px 0 0', fontSize: '18px', fontWeight: '600',
                      color: idioma.color,
                      fontFamily: item.key === 'es' ? 'inherit' : "'Playfair Display', serif",
                    }}>
                      {item.valor}
                    </p>
                  </div>
                </div>

                {/* Botón de pronunciación (visual) */}
                {(item.key === 'aw' || item.key === 'wa') && (
                  <button
                    aria-label={`Pronunciar en ${item.label}`}
                    title="Pronunciación (próximamente)"
                    style={{
                      backgroundColor: `${idioma.color}18`,
                      border: `1px solid ${idioma.color}30`,
                      borderRadius: '50%', width: '40px', height: '40px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '18px', cursor: 'not-allowed', opacity: 0.6,
                    }}
                  >
                    🔊
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Ejemplo de uso */}
        {entrada.example_aw && (
          <div style={{
            backgroundColor: surface,
            borderRadius: '16px',
            padding: '18px',
            marginBottom: '16px',
            border: `1px solid ${border}`,
          }}>
            <h3 style={{ color: sub, margin: '0 0 12px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
              📝 Ejemplo en Awajún
            </h3>
            <p style={{
              color: '#2E7D32', margin: 0,
              fontSize: '15px', fontStyle: 'italic', lineHeight: 1.6,
            }}>
              "{entrada.example_aw}"
            </p>
          </div>
        )}

        {/* Fuente */}
        {entrada.source && (
          <div style={{
            backgroundColor: darkMode ? '#1C2B10' : '#F1F8E9',
            borderRadius: '12px', padding: '12px 16px',
            marginBottom: '16px',
            border: `1px solid ${border}`,
          }}>
            <p style={{ margin: 0, fontSize: '11px', color: sub }}>
              📚 Fuente: <span style={{ fontStyle: 'italic' }}>{entrada.source.replace(/_/g, ' ')}</span>
            </p>
          </div>
        )}

        {/* Acciones */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
          <button
            onClick={() => toggleFavorito(entrada.id)}
            style={{
              flex: 1, padding: '14px',
              background: isFav
                ? 'linear-gradient(135deg, #F57F17, #FFB300)'
                : (darkMode ? '#1C2B10' : '#F9FBE7'),
              border: `1px solid ${isFav ? '#FFB300' : border}`,
              borderRadius: '14px',
              color: isFav ? 'white' : sub,
              fontSize: '14px', fontWeight: '600',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'all 0.2s',
            }}
          >
            {isFav ? '⭐ En favoritos' : '☆ Añadir favorito'}
          </button>

          <button
            onClick={handleShare}
            style={{
              flex: 1, padding: '14px',
              background: 'linear-gradient(135deg, #2D5016, #4A7C23)',
              border: 'none', borderRadius: '14px',
              color: 'white',
              fontSize: '14px', fontWeight: '600',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            📤 Compartir
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalleScreen;
