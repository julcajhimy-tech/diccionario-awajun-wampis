// src/pages/HistorialScreen.jsx
import React from 'react';
import BottomNav from '../components/BottomNav';
import { IDIOMAS } from '../utils/constants';

const HistorialScreen = ({ state }) => {
  const { darkMode, pantalla, setPantalla, historial, limpiarHistorial, seleccionarPalabra } = state;
  const bg = darkMode ? '#0F1A08' : '#F4F8F0';
  const surface = darkMode ? '#1C2B10' : '#FFFFFF';
  const text = darkMode ? '#E8F5E9' : '#1A1A1A';
  const sub = darkMode ? '#81C784' : '#558B2F';
  const border = darkMode ? '#2D4418' : '#E8F5E9';

  const formatTime = (ts) => {
    if (!ts) return '';
    const d = new Date(ts);
    const now = new Date();
    const diff = now - d;
    if (diff < 3600000) return `Hace ${Math.round(diff / 60000)} min`;
    if (diff < 86400000) return `Hace ${Math.round(diff / 3600000)} h`;
    return d.toLocaleDateString('es-PE', { day: 'numeric', month: 'short' });
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: bg }}>
      <div style={{
        paddingTop: '52px', paddingBottom: '20px',
        paddingLeft: '20px', paddingRight: '20px',
        background: 'linear-gradient(160deg, #1A3A08, #2D5016)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <div>
          <h1 style={{
            color: 'white', margin: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: '26px', fontWeight: '700',
          }}>📜 Historial</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', margin: '4px 0 0', fontSize: '13px' }}>
            {historial.length} consulta{historial.length !== 1 ? 's' : ''}
          </p>
        </div>
        {historial.length > 0 && (
          <button
            onClick={limpiarHistorial}
            style={{
              background: 'rgba(255,255,255,0.15)', border: 'none',
              borderRadius: '10px', padding: '8px 14px',
              color: 'white', fontSize: '12px', cursor: 'pointer',
            }}
          >
            🗑️ Limpiar
          </button>
        )}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px', paddingBottom: '90px' }}>
        {historial.length > 0 ? (
          historial.map((entrada, i) => (
            <div
              key={`${entrada.id}-${i}`}
              onClick={() => seleccionarPalabra(entrada)}
              style={{
                backgroundColor: surface,
                borderRadius: '14px', padding: '14px 16px',
                marginBottom: '8px',
                border: `1px solid ${border}`,
                cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: text }}>
                  {entrada.es}
                </p>
                <p style={{ margin: '4px 0 0', fontSize: '12px', color: sub }}>
                  🟢 {entrada.aw} · 🔵 {entrada.wa}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontSize: '11px', color: darkMode ? '#4A5940' : '#BBB' }}>
                  {formatTime(entrada.timestamp)}
                </p>
                <span style={{
                  display: 'inline-block', marginTop: '4px',
                  backgroundColor: darkMode ? '#2D4418' : '#E8F5E9',
                  color: sub, padding: '2px 8px',
                  borderRadius: '20px', fontSize: '10px',
                }}>
                  {entrada.cat}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', paddingTop: '80px' }}>
            <span style={{ fontSize: '60px', opacity: 0.3 }}>📜</span>
            <p style={{ color: sub, marginTop: '20px', fontSize: '16px', fontWeight: '600' }}>
              Sin historial aún
            </p>
            <p style={{ color: darkMode ? '#4A5940' : '#AAA', fontSize: '13px', marginTop: '8px' }}>
              Las palabras que consultes aparecerán aquí
            </p>
          </div>
        )}
      </div>

      <BottomNav pantalla={pantalla} onNavigate={setPantalla} darkMode={darkMode} />
    </div>
  );
};

export default HistorialScreen;
