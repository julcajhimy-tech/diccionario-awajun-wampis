// src/App.jsx — Componente raíz del Diccionario Awajún · Wampis

import React from 'react';
import { useDiccionario } from './hooks/useDiccionario';
import SplashScreen   from './pages/SplashScreen';
import HomeScreen     from './pages/HomeScreen';
import BuscarScreen   from './pages/BuscarScreen';
import DetalleScreen  from './pages/DetalleScreen';
import FavoritosScreen from './pages/FavoritosScreen';
import HistorialScreen from './pages/HistorialScreen';
import AjustesScreen  from './pages/AjustesScreen';

// Marco de teléfono para presentación web
const PhoneFrame = ({ children, darkMode }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '40px 20px',
    background: darkMode
      ? 'radial-gradient(ellipse at top, #1C2B10 0%, #0A0F06 100%)'
      : 'radial-gradient(ellipse at top, #E8F5E9 0%, #F4F8F0 100%)',
    fontFamily: "'DM Sans', sans-serif",
  }}>
    {/* Título escritorio */}
    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '28px', fontWeight: '700',
        color: darkMode ? '#8BC34A' : '#2D5016',
        margin: '0 0 6px',
        letterSpacing: '-0.5px',
      }}>
        📚 Diccionario Awajún · Wampis
      </h1>
      <p style={{
        color: darkMode ? '#558B2F' : '#888',
        fontSize: '13px', margin: 0,
        letterSpacing: '0.5px',
      }}>
        Español · Inglés · Lenguas Originarias Amazónicas del Perú
      </p>
    </div>

    {/* Contenedor estilo teléfono */}
    <div style={{
      width: '390px',
      height: '844px',
      borderRadius: '48px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: darkMode
        ? '0 40px 80px rgba(0,0,0,0.8), 0 0 0 1px #2D4418'
        : '0 40px 80px rgba(45,80,22,0.25), 0 0 0 1px #C8E6C9',
      border: darkMode ? '3px solid #2D4418' : '3px solid #C8E6C9',
      background: darkMode ? '#0F1A08' : '#F4F8F0',
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '130px', height: '34px',
        backgroundColor: darkMode ? '#050A03' : '#1A1A1A',
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px',
        zIndex: 200,
      }} />
      {children}
    </div>

    {/* Footer */}
    <p style={{
      color: darkMode ? '#2D4418' : '#CCC',
      fontSize: '11px', marginTop: '20px', textAlign: 'center',
    }}>
      Optimizado para móvil · También disponible como PWA
    </p>
  </div>
);

const App = () => {
  const state = useDiccionario();
  const { pantalla, setPantalla, darkMode } = state;

  const renderPantalla = () => {
    switch (pantalla) {
      case 'splash':     return <SplashScreen onFinish={() => setPantalla('home')} />;
      case 'home':       return <HomeScreen state={state} />;
      case 'buscar':     return <BuscarScreen state={state} />;
      case 'detalle':    return <DetalleScreen state={state} />;
      case 'favoritos':  return <FavoritosScreen state={state} />;
      case 'historial':  return <HistorialScreen state={state} />;
      case 'ajustes':    return <AjustesScreen state={state} />;
      default:           return <HomeScreen state={state} />;
    }
  };

  return (
    <PhoneFrame darkMode={darkMode}>
      {renderPantalla()}
    </PhoneFrame>
  );
};

export default App;
