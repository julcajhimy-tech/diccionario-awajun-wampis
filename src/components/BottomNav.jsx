// src/components/BottomNav.jsx
import React, { memo } from 'react';

const NAV_ITEMS = [
  { id: 'home',      icon: '🏠', label: 'Inicio' },
  { id: 'buscar',    icon: '🔍', label: 'Buscar' },
  { id: 'favoritos', icon: '⭐', label: 'Favoritos' },
  { id: 'historial', icon: '📜', label: 'Historial' },
  { id: 'ajustes',   icon: '⚙️', label: 'Ajustes' },
];

const BottomNav = memo(({ pantalla, onNavigate, darkMode }) => {
  const bg = darkMode ? '#1C2B10' : '#FFFFFF';
  const border = darkMode ? '#2D4418' : '#E8F5E9';
  const activeColor = '#4A7C23';
  const inactiveColor = darkMode ? '#4A5940' : '#AAAAAA';

  // Normalizar pantalla activa para el nav
  const pantallaNav = ['detalle'].includes(pantalla) ? 'buscar' : pantalla;

  return (
    <nav
      role="navigation"
      aria-label="Navegación principal"
      style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '72px',
        backgroundColor: bg,
        borderTop: `1px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 4px',
        zIndex: 100,
        boxShadow: darkMode ? '0 -4px 20px rgba(0,0,0,0.4)' : '0 -4px 20px rgba(0,0,0,0.06)',
      }}
    >
      {NAV_ITEMS.map(item => {
        const isActive = pantallaNav === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? 'page' : undefined}
            aria-label={item.label}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '3px', background: 'none', border: 'none',
              padding: '8px 12px', borderRadius: '12px',
              transition: 'all 0.2s ease',
              flex: 1,
              transform: isActive ? 'translateY(-2px)' : 'none',
            }}
          >
            <span style={{
              fontSize: '22px',
              filter: isActive ? 'none' : 'grayscale(50%) opacity(0.6)',
              transition: 'filter 0.2s',
            }}>
              {item.icon}
            </span>
            <span style={{
              fontSize: '10px', fontWeight: isActive ? '700' : '400',
              color: isActive ? activeColor : inactiveColor,
              letterSpacing: '0.3px',
              transition: 'color 0.2s',
            }}>
              {item.label}
            </span>
            {isActive && (
              <div style={{
                position: 'absolute',
                bottom: '8px',
                width: '4px', height: '4px',
                borderRadius: '50%',
                backgroundColor: activeColor,
              }} />
            )}
          </button>
        );
      })}
    </nav>
  );
});

BottomNav.displayName = 'BottomNav';
export default BottomNav;
