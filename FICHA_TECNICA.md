# FICHA TÉCNICA
## Diccionario Multilingüe Interactivo Awajún · Wampis

---

| Campo | Detalle |
|---|---|
| **Nombre del proyecto** | Diccionario Multilingüe Interactivo Awajún · Wampis |
| **Tipo de proyecto** | Aplicación web de código abierto (Open Source) |
| **Versión** | 1.0.0 |
| **Fecha de publicación** | 2025 |
| **Repositorio** | https://github.com/<TU_USUARIO>/diccionario-awajun-wampis |
| **URL de producción** | https://<TU_USUARIO>.github.io/diccionario-awajun-wampis |
| **Licencia** | MIT |

---

## 1. Descripción general

El **Diccionario Multilingüe Interactivo Awajún · Wampis** es una herramienta digital de acceso libre desarrollada para la preservación, difusión y enseñanza de las lenguas originarias Awajún (Aguaruna) y Wampis (Huambisa), pertenecientes a la familia lingüística Jivaroana y habladas en la región amazónica del Perú.

El proyecto integra más de **5,128 entradas lexicográficas** compiladas a partir de cuatro fuentes académicas primarias, ofreciendo búsqueda simultánea en español, inglés, awajún y wampis, con soporte para categorías temáticas, favoritos, historial y modo oscuro.

---

## 2. Objetivos

### Objetivo general
Desarrollar una aplicación web interactiva, escalable y de acceso gratuito que permita consultar, aprender y preservar el vocabulario de las lenguas Awajún y Wampis.

### Objetivos específicos
- Digitalizar y unificar cuatro diccionarios impresos en una única base de datos estructurada
- Ofrecer búsqueda multilingüe simultánea en cuatro idiomas
- Publicar el proyecto en GitHub para permitir contribuciones colaborativas de hablantes nativos, lingüistas y educadores
- Desarrollar una interfaz accesible y optimizada para dispositivos móviles
- Sentar las bases para futuras versiones con audio de pronunciación y ejercicios de aprendizaje

---

## 3. Stack tecnológico

| Componente | Tecnología | Versión |
|---|---|---|
| **Framework UI** | React | 18.2.0 |
| **Lenguaje** | JavaScript (ES2022) | — |
| **Estilos** | CSS-in-JS + CSS Variables | — |
| **Tipografía** | Playfair Display + DM Sans | Google Fonts |
| **Build tool** | Create React App | 5.0.1 |
| **Hosting** | GitHub Pages | — |
| **Control de versiones** | Git / GitHub | — |
| **Persistencia local** | localStorage API | Web API nativa |
| **Compartir** | Web Share API | Web API nativa |
| **Formatos de datos** | JSON, CSV | — |

---

## 4. Arquitectura del sistema

```
┌─────────────────────────────────────────────────┐
│                  App.jsx (raíz)                  │
│                                                   │
│  ┌─────────────────────────────────────────────┐ │
│  │           useDiccionario (hook)             │ │
│  │  Estado global · Búsqueda · Persistencia    │ │
│  └─────────────────────────────────────────────┘ │
│                                                   │
│  ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │
│  │ Páginas  │ │Componentes│ │     Datos        │  │
│  │          │ │          │ │                  │  │
│  │ Splash   │ │ WordCard  │ │ diccionario.json │  │
│  │ Home     │ │ SearchBar │ │ 5,128 entradas   │  │
│  │ Buscar   │ │ BottomNav │ │ 63 categorías    │  │
│  │ Detalle  │ │          │ │ 4 idiomas        │  │
│  │ Favoritos│ └──────────┘ └──────────────────┘  │
│  │ Historial│                                     │
│  │ Ajustes  │                                     │
│  └──────────┘                                     │
└─────────────────────────────────────────────────┘
```

### Patrón de diseño
- **Custom Hook centralizado** (`useDiccionario`): gestiona todo el estado de la aplicación
- **Componentes puros memoizados** (`memo`): evitan re-renders innecesarios
- **Single Page Application (SPA)**: navegación por estado sin recarga de página
- **Props drilling controlado**: el estado se pasa como objeto único `state`

---

## 5. Base de datos lingüística

### Estructura de una entrada

```json
{
  "id": 230001,
  "cat": "Salud",
  "es": "Corazón",
  "en": "Heart",
  "aw": "Anentái",
  "wa": "Anentai",
  "gram": "s.",
  "example_aw": "Anentái pegkeg ajawai",
  "source": "maestro_original"
}
```

### Campos del esquema

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | Integer | Identificador único |
| `cat` | String | Categoría temática (63 posibles) |
| `es` | String | Glosa en español |
| `en` | String | Glosa en inglés |
| `aw` | String | Palabra en Awajún |
| `wa` | String | Palabra en Wampis |
| `gram` | String | Categoría gramatical (s., v., adj., etc.) |
| `example_aw` | String | Oración de ejemplo en Awajún |
| `source` | String | Fuente académica de origen |

### Estadísticas de la base de datos

| Métrica | Valor | Porcentaje |
|---|---|---|
| Total de entradas | 5,128 | 100% |
| Con traducción inglés | 5,128 | 100% |
| Con palabra Awajún real | 4,434 | 86.5% |
| Con palabra Wampis real | 2,215 | 43.2% |
| Pares AW+WA verificados | 1,521 | 29.7% |
| Con categoría gramatical | 4,365 | 85.1% |
| Con ejemplo en Awajún | 1,417 | 27.6% |
| Entradas pendientes revisión | 684 | 13.3% |

### Fuentes académicas

| Fuente | Año | Institución | Entradas |
|---|---|---|---|
| Diccionario Awajún-Castellano | 2011 | FORMABIAP / AIDESEP | 4,600 |
| Diccionario Preliminar Awajún | 2008 | — | 977 |
| Diccionario Wampis | 2018 | Comunidad Wampis | 1,066 |
| Vocabulario Pedagógico EIB | 2021 | MINEDU | 183 |

---

## 6. Funcionalidades implementadas

### v1.0.0 (actual)
- [x] Búsqueda multilingüe simultánea (ES, EN, AW, WA)
- [x] Búsqueda con normalización de tildes y mayúsculas
- [x] Filtrado por 63 categorías temáticas
- [x] Vista detalle con todas las traducciones
- [x] Sistema de favoritos con persistencia (localStorage)
- [x] Historial de consultas (últimas 50)
- [x] Modo oscuro persistente
- [x] Ajuste de tamaño de fuente
- [x] Palabra del día (rotación diaria por fecha)
- [x] Compartir entrada (Web Share API / clipboard)
- [x] Selector de idioma origen/destino con swap
- [x] Diseño responsivo estilo mobile-first
- [x] Animaciones y transiciones suaves
- [x] Pantalla de bienvenida (splash)

### v2.0.0 (planificado)
- [ ] Audio de pronunciación nativa (grabaciones MP3)
- [ ] Modo sin conexión (PWA / Service Worker)
- [ ] Ejercicios de práctica y flashcards
- [ ] Búsqueda por imagen (cámara)
- [ ] Panel de administración para agregar entradas
- [ ] API REST pública
- [ ] Versión nativa Android / iOS (React Native)
- [ ] Soporte para más lenguas originarias peruanas

---

## 7. Criterios de calidad y accesibilidad

- **Semántica HTML**: uso de `<article>`, `<nav>`, `<h1-h3>`, `role`, `aria-label`
- **Navegación por teclado**: `tabIndex`, `onKeyDown` en elementos interactivos
- **Contraste de color**: paleta validada para WCAG 2.1 AA
- **Fuentes legibles**: tipografía serif + sans-serif de alta legibilidad
- **Performance**: componentes memoizados, búsqueda limitada a 100 resultados
- **Persistencia**: favoritos, historial, modo oscuro y tamaño de fuente en localStorage

---

## 8. Despliegue y mantenimiento

### Flujo de actualización de datos

```
Fuente nueva (PDF / Excel)
        ↓
  Python: parseo y limpieza
        ↓
  diccionario_vX_final.json
        ↓
  Copiar a src/data/diccionario.json
        ↓
  git commit + push
        ↓
  npm run deploy → GitHub Pages
```

### Versionado semántico
El proyecto sigue **Semantic Versioning** (SemVer):
- `MAJOR.MINOR.PATCH`
- `1.0.0` → versión inicial estable

---

## 9. Equipo y reconocimientos

**Desarrollo técnico**: Elaborado con asistencia de inteligencia artificial (Anthropic Claude)

**Contenido lingüístico**: Los autores de los diccionarios fuente:
- Profesores awajún del FORMABIAP (AIDESEP / ISEPL)
- Comunidades Wampis
- Ministerio de Educación del Perú (MINEDU)
- Lingüistas colaboradores de las cuencas del Marañón, Cenepa, Santiago y Nieva

**Dedicatoria**: A los pueblos Awajún y Wampis, guardianes de la Amazonía peruana, y a todos los docentes de Educación Intercultural Bilingüe (EIB) que trabajan por preservar sus lenguas y culturas.

---

## 10. Referencias

- FORMABIAP / AIDESEP. (2011). *Diccionario Awajún-Castellano*. Iquitos: ISEPL.
- Corbera Mori, Á. (2011). Presentación. En *Diccionario Awajún-Castellano*. FORMABIAP.
- Ministerio de Educación del Perú. (2009). Resolución Directoral N° 2554-2009-ED. Alfabeto oficial Awajún.
- MINEDU. (2021). *Awajún Chicham Jintiatin Etejamu: Vocabulario Pedagógico Awajún*. Lima.
- Organización Wampis. (2018). *Papi iisar wampis tura apach chicham nekatin*. Diccionario Wampis.

---

*Documento generado: 2025 · Versión del documento: 1.0*
