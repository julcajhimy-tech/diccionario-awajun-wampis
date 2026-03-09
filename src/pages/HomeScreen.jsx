// src/pages/HomeScreen.jsx
import React from 'react';
import BottomNav from '../components/BottomNav';
import SearchBar from '../components/SearchBar';
import { CATEGORIA_EMOJIS, CATEGORIA_COLORES, IDIOMAS } from '../utils/constants';

const HomeScreen = ({ state }) => {
  const {
    darkMode, pantalla, setPantalla, categorias,
    palabraDelDia, totalEntradas,
    busqueda, setBusqueda, setCategoriaActiva,
    seleccionarPalabra,
  } = state;

  const bg = darkMode ? '#0F1A08' : '#F4F8F0';
  const surface = darkMode ? '#1C2B10' : '#FFFFFF';
  const text = darkMode ? '#E8F5E9' : '#1A1A1A';
  const sub = darkMode ? '#81C784' : '#558B2F';
  const border = darkMode ? '#2D4418' : '#E8F5E9';

  // Colores para la tarjeta Glassmorphism
  const glassTextColor = darkMode ? '#FFFFFF' : '#1A2B10';
  const glassSubTextColor = darkMode ? 'rgba(255, 255, 255, 0.75)' : '#4A7C23';
  const glassTagBg = darkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(74, 124, 35, 0.1)';
  const glassTagTextColor = darkMode ? '#FFFFFF' : '#2D5016';
  const glassBorderColor = darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(45, 80, 22, 0.25)';

  const handleCategoryClick = (cat) => {
    setCategoriaActiva(cat);
    setPantalla('buscar');
  };

  // Top 9 categorías
  const topCats = categorias.slice(0, 9);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: bg }}>
      {/* Header */}
      <div style={{
        paddingTop: '52px', paddingBottom: '20px',
        paddingLeft: '20px', paddingRight: '20px',
        background: 'linear-gradient(160deg, #1A3A08 0%, #2D5016 60%, #4A7C23 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '100px', opacity: 0.07 }}>🌿</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', margin: '0 0 4px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Diccionario Multilingüe
            </p>
            <h1 style={{
              color: 'white', margin: 0,
              fontFamily: "'Playfair Display', serif",
              fontSize: '24px', fontWeight: '700',
            }}>
              Awajún · Wampis
            </h1>
          </div>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderRadius: '12px', padding: '8px 12px',
            textAlign: 'center',
          }}>
            <p style={{ color: 'white', margin: 0, fontSize: '18px', fontWeight: '700' }}>{totalEntradas}</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '10px' }}>palabras</p>
          </div>
        </div>
        {/* Barra de búsqueda en header */}
        <div onClick={() => setPantalla('buscar')} style={{ cursor: 'pointer' }}>
          <SearchBar
            value={busqueda}
            onChange={(v) => { setBusqueda(v); setPantalla('buscar'); }}
            onClear={() => setBusqueda('')}
            placeholder="Buscar en 4 idiomas..."
            darkMode={false}
          />
        </div>
      </div>

      {/* Contenido scrollable */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', paddingBottom: '90px' }}>

        {/* Palabra del día */}
        {palabraDelDia && (
          <>
            <h2 style={{ color: sub, margin: '0 0 12px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
              ✨ Palabra del día
            </h2>
            <div
              onClick={() => seleccionarPalabra(palabraDelDia)}
              style={{
                background: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.5)',
                borderRadius: '24px',
                padding: '16px', // Padding reducido
                marginBottom: '20px', // Margen inferior reducido
                cursor: 'pointer',
                position: 'relative', 
                overflow: 'hidden',
                border: `1px solid ${glassBorderColor}`,
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(12px)', // Aumentamos el desenfoque
              }}
            >
              <div style={{ position: 'absolute', right: '-10px', top: '-10px', fontSize: '80px', opacity: darkMode ? 0.1 : 0.05 }}>🌿</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    color: glassTextColor, margin: '0 0 4px',
                    fontFamily: "'Lora', serif", // Nueva fuente aplicada
                    fontSize: '24px', // Tamaño de fuente reducido
                    fontWeight: '600', // Ajuste de peso para la nueva fuente
                  }}>
                    {palabraDelDia.es}
                  </h3>
                  <p style={{ color: glassSubTextColor, margin: '0 0 14px', fontSize: '12px', fontStyle: 'italic' }}>
                    {palabraDelDia.cat} · {palabraDelDia.gram || 'sustantivo'}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {[
                      { flag: '🇬🇧', val: palabraDelDia.en },
                      { flag: '🟢', val: palabraDelDia.aw },
                      { flag: '🔵', val: palabraDelDia.wa },
                    ].map(({ flag, val }) => val && (
                      <span key={flag} style={{
                        backgroundColor: glassTagBg,
                        color: glassTagTextColor, 
                        padding: '3px 8px', // Padding de etiquetas reducido
                        borderRadius: '20px', fontSize: '12px',
                        fontWeight: '500',
                      }}>
                        {flag} {val}
                      </span>
                    ))}
                  </div>
                </div>
                <span style={{ fontSize: '36px', flexShrink: 0, opacity: darkMode ? 1 : 0.7 }}>📖</span>
              </div>
              {palabraDelDia.example_aw && (
                <p style={{
                  color: glassSubTextColor,
                  margin: '14px 0 0', fontSize: '13px',
                  fontStyle: 'italic', 
                  borderTop: `1px solid ${glassBorderColor}`,
                  paddingTop: '12px',
                }}>
                  🟢 "{palabraDelDia.example_aw}"
                </p>
              )}
            </div>
          </>
        )}

        {/* Categorías */}
        <h2 style={{ color: sub, margin: '0 0 12px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
          📂 Categorías
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px', marginBottom: '24px',
        }}>
          {topCats.map(({ nombre, cantidad }) => {
            const emoji = CATEGORIA_EMOJIS[nombre] || '📌';
            const color = CATEGORIA_COLORES[nombre] || '#4A7C23';
            return (
              <div
                key={nombre}
                onClick={() => handleCategoryClick(nombre)}
                style={{
                  backgroundColor: surface,
                  border: `1px solid ${border}`,
                  borderRadius: '16px',
                  padding: '14px 10px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <span style={{ fontSize: '26px' }}>{emoji}</span>
                <p style={{ margin: '6px 0 2px', fontSize: '11px', color: text, fontWeight: '600' }}>
                  {nombre}
                </p>
                <p style={{ margin: 0, fontSize: '10px', color: sub }}>
                  {cantidad}
                </p>
              </div>
            );
          })}
        </div>

        {/* Idiomas del diccionario */}
        <h2 style={{ color: sub, margin: '0 0 12px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
          🌐 Idiomas
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {Object.values(IDIOMAS).map(idioma => (
            <div key={idioma.key} style={{
              backgroundColor: surface,
              border: `1px solid ${border}`,
              borderRadius: '14px',
              padding: '14px',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <span style={{ fontSize: '24px' }}>{idioma.bandera}</span>
              <div>
                <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: idioma.color }}>{idioma.nombre}</p>
                <p style={{ margin: 0, fontSize: '10px', color: sub }}>
                  {idioma.key === 'aw' ? 'Lengua originaria' : idioma.key === 'wa' ? 'Lengua originaria' : 'Referencia'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav pantalla={pantalla} onNavigate={setPantalla} darkMode={darkMode} />
    </div>
  );
};

export default HomeScreen;