// src/components/SearchBar.jsx
import React, { memo, useRef, useEffect } from 'react';

const SearchBar = memo(({ value, onChange, onClear, autoFocus, placeholder, darkMode }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (autoFocus && ref.current) {
      setTimeout(() => ref.current?.focus(), 100);
    }
  }, [autoFocus]);

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      backgroundColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.95)',
      borderRadius: '14px',
      padding: '12px 16px',
      border: darkMode ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.6)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
    }}>
      <span style={{ fontSize: '18px', flexShrink: 0, opacity: 0.7 }}>🔍</span>
      <input
        ref={ref}
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder || 'Buscar en 4 idiomas...'}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        aria-label="Buscar palabra"
        style={{
          flex: 1, border: 'none', outline: 'none',
          fontSize: '15px', fontFamily: "'DM Sans', sans-serif",
          backgroundColor: 'transparent',
          color: darkMode ? '#E8F5E9' : '#1A1A1A',
        }}
      />
      {value && (
        <button
          onClick={onClear}
          aria-label="Limpiar búsqueda"
          style={{
            background: darkMode ? 'rgba(255,255,255,0.15)' : '#E8F5E9',
            border: 'none', borderRadius: '50%',
            width: '24px', height: '24px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '12px', color: darkMode ? '#E8F5E9' : '#558B2F',
            flexShrink: 0, transition: 'all 0.2s',
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
});

SearchBar.displayName = 'SearchBar';
export default SearchBar;
