// src/pages/BuscarScreen.jsx
import React from 'react';
import BottomNav from '../components/BottomNav';
import SearchBar from '../components/SearchBar';
import WordCard from '../components/WordCard';
import { IDIOMAS } from '../utils/constants';

const BuscarScreen = ({ state }) => {
  const {
    darkMode, pantalla, setPantalla,
    busqueda, setBusqueda, categoriaActiva, setCategoriaActiva,
    resultados, favoritos, toggleFavorito, seleccionarPalabra,
    idiomaOrigen, setIdiomaOrigen, idiomaDestino, setIdiomaDestino, swapIdiomas,
  } = state;

  const bg = darkMode ? '#0F1A08' : '#F4F8F0';
  const sub = darkMode ? '#81C784' : '#558B2F';
  const textSub = darkMode ? '#9CCC65' : '#888';

  const selectStyle = {
    flex: 1,
    padding: '10px 12px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '13px',
    fontWeight: '500',
    fontFamily: "'DM Sans', sans-serif",
    backgroundColor: 'rgba(255,255,255,0.9)',
    cursor: 'pointer',
    color: '#1A1A1A',
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: bg }}>
      {/* Header con búsqueda */}
      <div style={{
        paddingTop: '52px', paddingBottom: '14px',
        paddingLeft: '16px', paddingRight: '16px',
        background: 'linear-gradient(160deg, #1A3A08 0%, #2D5016 100%)',
      }}>
        <SearchBar
          value={busqueda}
          onChange={setBusqueda}
          onClear={() => { setBusqueda(''); setCategoriaActiva(null); }}
          autoFocus={true}
          darkMode={false}
        />

        {/* Selector de idiomas */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '10px', alignItems: 'center' }}>
          <select
            value={idiomaOrigen}
            onChange={e => setIdiomaOrigen(e.target.value)}
            style={selectStyle}
            aria-label="Idioma origen"
          >
            {Object.values(IDIOMAS).map(i => (
              <option key={i.key} value={i.key}>{i.bandera} {i.nombre}</option>
            ))}
          </select>

          <button
            onClick={swapIdiomas}
            aria-label="Intercambiar idiomas"
            style={{
              background: 'rgba(255,255,255,0.2)', border: 'none',
              borderRadius: '10px', width: '38px', height: '38px',
              color: 'white', fontSize: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            ⇄
          </button>

          <select
            value={idiomaDestino}
            onChange={e => setIdiomaDestino(e.target.value)}
            style={selectStyle}
            aria-label="Idioma destino"
          >
            {Object.values(IDIOMAS).map(i => (
              <option key={i.key} value={i.key}>{i.bandera} {i.nombre}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Contenido */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', paddingBottom: '90px' }}>
        {/* Filtro de categoría activa */}
        {categoriaActiva && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            backgroundColor: darkMode ? '#1C2B10' : '#E8F5E9',
            borderRadius: '10px', padding: '10px 14px',
            marginBottom: '12px',
          }}>
            <span style={{ fontSize: '13px', color: sub, fontWeight: '600' }}>
              📂 {categoriaActiva}
            </span>
            <button
              onClick={() => setCategoriaActiva(null)}
              style={{
                background: 'none', border: 'none',
                color: sub, fontSize: '18px', cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
        )}

        {/* Contador */}
        <p style={{ color: textSub, fontSize: '13px', margin: '0 0 12px' }}>
          <strong style={{ color: sub }}>{resultados.length}</strong> resultado{resultados.length !== 1 ? 's' : ''}
          {busqueda && ` para "${busqueda}"`}
          {categoriaActiva && ` en ${categoriaActiva}`}
        </p>

        {/* Resultados */}
        {resultados.length > 0 ? (
          resultados.map(entrada => (
            <WordCard
              key={entrada.id}
              entrada={entrada}
              isFavorite={favoritos.includes(entrada.id)}
              onToggleFavorite={toggleFavorito}
              onSelect={seleccionarPalabra}
              darkMode={darkMode}
              idiomaOrigen={idiomaOrigen}
              idiomaDestino={idiomaDestino}
            />
          ))
        ) : (
          <div style={{ textAlign: 'center', paddingTop: '60px' }}>
            <span style={{ fontSize: '52px', opacity: 0.3 }}>🔍</span>
            <p style={{ color: textSub, marginTop: '16px', fontSize: '15px' }}>
              Sin resultados para "<strong>{busqueda}</strong>"
            </p>
            <p style={{ color: textSub, fontSize: '13px', marginTop: '8px' }}>
              Intenta buscar en Awajún, Wampis, Español o Inglés
            </p>
          </div>
        )}
      </div>

      <BottomNav pantalla={pantalla} onNavigate={setPantalla} darkMode={darkMode} />
    </div>
  );
};

export default BuscarScreen;