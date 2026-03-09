// src/pages/AjustesScreen.jsx
import React from 'react';
import BottomNav from '../components/BottomNav';
import { VERSION, FUENTES } from '../utils/constants';

const AjustesScreen = ({ state }) => {
  const { darkMode, setDarkMode, fontSize, setFontSize, pantalla, setPantalla, limpiarHistorial, totalEntradas } = state;
  const bg = darkMode ? '#0F1A08' : '#F4F8F0';
  const surface = darkMode ? '#1C2B10' : '#FFFFFF';
  const text = darkMode ? '#E8F5E9' : '#1A1A1A';
  const sub = darkMode ? '#81C784' : '#558B2F';
  const border = darkMode ? '#2D4418' : '#E8F5E9';
  const textSub = darkMode ? '#4A5940' : '#AAA';

  const Toggle = ({ value, onChange }) => (
    <button
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      style={{
        width: '48px', height: '26px', borderRadius: '13px',
        border: 'none', cursor: 'pointer',
        backgroundColor: value ? '#4A7C23' : (darkMode ? '#2D4418' : '#DDD'),
        position: 'relative', transition: 'background-color 0.25s',
        flexShrink: 0,
      }}
    >
      <div style={{
        position: 'absolute',
        top: '3px', left: value ? '25px' : '3px',
        width: '20px', height: '20px', borderRadius: '50%',
        backgroundColor: 'white', transition: 'left 0.25s',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      }} />
    </button>
  );

  const Section = ({ title, children }) => (
    <div style={{ marginBottom: '24px' }}>
      <h3 style={{
        color: textSub, margin: '0 0 10px',
        fontSize: '11px', fontWeight: '700',
        textTransform: 'uppercase', letterSpacing: '1.2px',
      }}>
        {title}
      </h3>
      <div style={{
        backgroundColor: surface, borderRadius: '16px',
        overflow: 'hidden', border: `1px solid ${border}`,
      }}>
        {children}
      </div>
    </div>
  );

  const Item = ({ icon, label, right, onClick, danger, isLast }) => (
    <div
      onClick={onClick}
      style={{
        padding: '15px 18px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: isLast ? 'none' : `1px solid ${border}`,
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '20px' }}>{icon}</span>
        <span style={{ fontSize: '15px', color: danger ? '#E53935' : text, fontWeight: '400' }}>
          {label}
        </span>
      </div>
      {right}
    </div>
  );

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
          ⚙️ Ajustes
        </h1>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', paddingBottom: '90px' }}>

        <Section title="Apariencia">
          <Item icon="🌙" label="Modo oscuro"
            right={<Toggle value={darkMode} onChange={setDarkMode} />}
          />
          <Item icon="🔤" label="Tamaño de fuente"
            isLast
            right={
              <div style={{ display: 'flex', gap: '6px' }}>
                {['pequeño', 'normal', 'grande'].map(s => (
                  <button key={s} onClick={() => setFontSize(s)} style={{
                    padding: '4px 10px', borderRadius: '20px', border: 'none',
                    fontSize: '11px', cursor: 'pointer', fontWeight: '600',
                    backgroundColor: fontSize === s ? '#4A7C23' : (darkMode ? '#2D4418' : '#E8F5E9'),
                    color: fontSize === s ? 'white' : sub,
                    textTransform: 'capitalize',
                  }}>{s}</button>
                ))}
              </div>
            }
          />
        </Section>

        <Section title="Estadísticas">
          <Item icon="📚" label="Total de palabras"
            right={<span style={{ color: sub, fontSize: '14px', fontWeight: '600' }}>{totalEntradas}</span>}
          />
          <Item icon="🌐" label="Idiomas"
            right={<span style={{ color: sub, fontSize: '14px' }}>4 idiomas</span>}
          />
          <Item icon="✅" label="Versión" isLast
            right={<span style={{ color: textSub, fontSize: '13px' }}>v{VERSION}</span>}
          />
        </Section>

        <Section title="Datos">
          <Item icon="🗑️" label="Limpiar historial" danger onClick={() => { limpiarHistorial(); alert('Historial eliminado'); }} isLast />
        </Section>

        <Section title="Fuentes académicas">
          {FUENTES.map((f, i) => (
            <Item key={i} icon="📖" label={f} isLast={i === FUENTES.length - 1} />
          ))}
        </Section>

        <Section title="Acerca de">
          <Item icon="ℹ️" label="Diccionario Awajún · Wampis"
            right={<span style={{ color: textSub, fontSize: '12px' }}>v{VERSION}</span>}
          />
          <Item icon="🎓" label="Tesis de Licenciatura · EIB" />
          <Item icon="🌿" label="Preservación de lenguas amazónicas" isLast />
        </Section>

        <p style={{
          textAlign: 'center', color: textSub,
          fontSize: '11px', marginTop: '10px', lineHeight: 1.8,
        }}>
          Diccionario Multilingüe Intercultural<br />
          Awajún · Wampis · Español · Inglés<br />
          © 2025 · Todos los derechos reservados<br />
          <span style={{ color: sub }}>Preservando lenguas originarias amazónicas</span>
        </p>
      </div>

      <BottomNav pantalla={pantalla} onNavigate={setPantalla} darkMode={darkMode} />
    </div>
  );
};

export default AjustesScreen;
