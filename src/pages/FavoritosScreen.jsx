// src/pages/FavoritosScreen.jsx
import React from 'react';
import BottomNav from '../components/BottomNav';
import WordCard from '../components/WordCard';

const FavoritosScreen = ({ state }) => {
  const { darkMode, pantalla, setPantalla, palabrasFavoritas, favoritos, toggleFavorito, seleccionarPalabra } = state;
  const bg = darkMode ? '#0F1A08' : '#F4F8F0';
  const text = darkMode ? '#E8F5E9' : '#1A1A1A';
  const sub = darkMode ? '#81C784' : '#558B2F';

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: bg }}>
      <div style={{
        paddingTop: '52px', paddingBottom: '20px',
        paddingLeft: '20px', paddingRight: '20px',
        background: 'linear-gradient(160deg, #1A3A08, #2D5016)',
      }}>
        <h1 style={{
          color: 'white', margin: 0,
          fontFamily: "'Playfair Display', serif",
          fontSize: '26px', fontWeight: '700',
        }}>
          ⭐ Favoritos
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', margin: '4px 0 0', fontSize: '13px' }}>
          {palabrasFavoritas.length} palabra{palabrasFavoritas.length !== 1 ? 's' : ''} guardada{palabrasFavoritas.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', paddingBottom: '90px' }}>
        {palabrasFavoritas.length > 0 ? (
          palabrasFavoritas.map(entrada => (
            <WordCard
              key={entrada.id}
              entrada={entrada}
              isFavorite={true}
              onToggleFavorite={toggleFavorito}
              onSelect={seleccionarPalabra}
              darkMode={darkMode}
            />
          ))
        ) : (
          <div style={{ textAlign: 'center', paddingTop: '80px' }}>
            <span style={{ fontSize: '60px', opacity: 0.3 }}>⭐</span>
            <p style={{ color: sub, marginTop: '20px', fontSize: '16px', fontWeight: '600' }}>
              Sin favoritos aún
            </p>
            <p style={{ color: darkMode ? '#4A5940' : '#AAA', fontSize: '13px', marginTop: '8px' }}>
              Toca la estrella ☆ en cualquier palabra para guardarla
            </p>
          </div>
        )}
      </div>

      <BottomNav pantalla={pantalla} onNavigate={setPantalla} darkMode={darkMode} />
    </div>
  );
};

export default FavoritosScreen;
