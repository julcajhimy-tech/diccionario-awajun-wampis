// src/hooks/useDiccionario.js
// Hook central que gestiona todo el estado del diccionario

import { useState, useEffect, useMemo, useCallback } from 'react';
import diccionarioData from '../data/diccionario.json';

// Normalizar texto para búsqueda (quitar tildes, minúsculas)
const normalizar = (str = '') =>
  str.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

export const useDiccionario = () => {
  // ── Estado principal ──
  const [busqueda, setBusqueda] = useState('');
  const [categoriaActiva, setCategoriaActiva] = useState(null);
  const [palabraSeleccionada, setPalabraSeleccionada] = useState(null);
  const [favoritos, setFavoritos] = useState(() => {
    try { return JSON.parse(localStorage.getItem('daw_favoritos') || '[]'); }
    catch { return []; }
  });
  const [historial, setHistorial] = useState(() => {
    try { return JSON.parse(localStorage.getItem('daw_historial') || '[]'); }
    catch { return []; }
  });
  const [darkMode, setDarkMode] = useState(() => {
    try { return JSON.parse(localStorage.getItem('daw_dark') || 'false'); }
    catch { return false; }
  });
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('daw_fontsize') || 'normal';
  });
  const [idiomaOrigen, setIdiomaOrigen] = useState('es');
  const [idiomaDestino, setIdiomaDestino] = useState('aw');
  const [pantalla, setPantalla] = useState('splash');

  // ── Persistencia ──
  useEffect(() => {
    localStorage.setItem('daw_favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  useEffect(() => {
    localStorage.setItem('daw_historial', JSON.stringify(historial));
  }, [historial]);

  useEffect(() => {
    localStorage.setItem('daw_dark', JSON.stringify(darkMode));
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('daw_fontsize', fontSize);
  }, [fontSize]);

  // ── Categorías únicas ──
  const categorias = useMemo(() => {
    const map = {};
    diccionarioData.forEach(e => {
      if (e.cat && !map[e.cat]) {
        map[e.cat] = (map[e.cat] || 0) + 1;
      }
    });
    // Contar
    const conteo = {};
    diccionarioData.forEach(e => {
      conteo[e.cat] = (conteo[e.cat] || 0) + 1;
    });
    return Object.entries(conteo)
      .sort((a, b) => b[1] - a[1])
      .map(([nombre, cantidad]) => ({ nombre, cantidad }));
  }, []);

  // ── Palabras del día (rotación diaria) ──
  const palabraDelDia = useMemo(() => {
    const hoy = new Date().toDateString();
    const idx = Math.abs(
      hoy.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
    ) % diccionarioData.length;
    return diccionarioData[idx];
  }, []);

  // ── Búsqueda filtrada ──
  const resultados = useMemo(() => {
    const q = normalizar(busqueda);
    let lista = diccionarioData;

    if (categoriaActiva) {
      lista = lista.filter(e => e.cat === categoriaActiva);
    }

    if (!q) return lista.slice(0, 50); // Mostrar primeras 50 si no hay búsqueda

    // Filtra la lista para encontrar todas las coincidencias (exactas y parciales)
    return lista.filter(e =>
      normalizar(e.es).includes(q) ||
      normalizar(e.en).includes(q) ||
      normalizar(e.aw).includes(q) ||
      normalizar(e.wa).includes(q)
    )
    // Ordena los resultados para priorizar las coincidencias exactas
    .sort((a, b) => {
      // Comprueba si 'a' es una coincidencia exacta
      const aIsExact = normalizar(a.es) === q || normalizar(a.en) === q || normalizar(a.aw) === q || normalizar(a.wa) === q;
      // Comprueba si 'b' es una coincidencia exacta
      const bIsExact = normalizar(b.es) === q || normalizar(b.en) === q || normalizar(b.aw) === q || normalizar(b.wa) === q;

      if (aIsExact && !bIsExact) {
        return -1; // 'a' viene antes que 'b'
      }
      if (!aIsExact && bIsExact) {
        return 1; // 'b' viene antes que 'a'
      }
      return 0; // El orden no cambia si ambos son del mismo tipo (exacto o parcial)
    })
    .slice(0, 100);
  }, [busqueda, categoriaActiva]);

  // ── Acciones ──
  const toggleFavorito = useCallback((id) => {
    setFavoritos(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  }, []);

  const seleccionarPalabra = useCallback((palabra) => {
    setPalabraSeleccionada(palabra);
    setPantalla('detalle');
    // Agregar al historial (máximo 50)
    setHistorial(prev => {
      const sinDuplicado = prev.filter(h => h.id !== palabra.id);
      return [{ ...palabra, timestamp: Date.now() }, ...sinDuplicado].slice(0, 50);
    });
  }, []);

  const limpiarHistorial = useCallback(() => {
    setHistorial([]);
    localStorage.removeItem('daw_historial');
  }, []);

  const swapIdiomas = useCallback(() => {
    setIdiomaOrigen(prev => idiomaDestino);
    setIdiomaDestino(prev => idiomaOrigen);
  }, [idiomaOrigen, idiomaDestino]);

  const palabrasFavoritas = useMemo(() =>
    diccionarioData.filter(e => favoritos.includes(e.id)),
    [favoritos]
  );

  // Total de entradas
  const totalEntradas = diccionarioData.length;

  return {
    // Estado
    busqueda, setBusqueda,
    categoriaActiva, setCategoriaActiva,
    palabraSeleccionada, setPalabraSeleccionada,
    favoritos, toggleFavorito, palabrasFavoritas,
    historial, limpiarHistorial,
    darkMode, setDarkMode,
    fontSize, setFontSize,
    idiomaOrigen, setIdiomaOrigen,
    idiomaDestino, setIdiomaDestino,
    pantalla, setPantalla,
    // Datos derivados
    categorias,
    resultados,
    palabraDelDia,
    totalEntradas,
    // Acciones
    seleccionarPalabra,
    swapIdiomas,
  };
};