# 📚 Diccionario Awajún · Wampis

> **Diccionario multilingüe interactivo de lenguas originarias amazónicas del Perú**
> Español · Inglés · Awajún · Wampis

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/Licencia-MIT-green)](LICENSE)
[![Version](https://img.shields.io/badge/Versión-1.0.0-brightgreen)]()
[![Palabras](https://img.shields.io/badge/Palabras-5128-forestgreen)]()
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://pages.github.com/)

---

## 🌿 Descripción

El **Diccionario Awajún · Wampis** es una aplicación web interactiva de código abierto para la **preservación y difusión de las lenguas originarias Awajún y Wampis**, habladas por pueblos indígenas de la selva amazónica del Perú (regiones Amazonas, Loreto y San Martín).

Desarrollado como parte de una **Tesis de Licenciatura en Educación Tecnológica**, este proyecto integra fuentes académicas primarias de cuatro diccionarios publicados entre 2008 y 2021, ofreciendo acceso digital gratuito a más de **5,128 entradas** en cuatro idiomas.

---

## 🚀 Demo en línea

🔗 **[Ver diccionario en vivo](https://<TU_USUARIO>.github.io/diccionario-awajun-wampis)**

---

## ✨ Características

| Función | Descripción |
|---|---|
| 🔍 **Búsqueda multilingüe** | Busca desde cualquiera de los 4 idiomas simultáneamente |
| 📂 **63 categorías temáticas** | Flora, Fauna, Familia, Verbos, Números, y más |
| ⭐ **Favoritos** | Guarda palabras de interés con persistencia local |
| 📜 **Historial** | Registro automático de las últimas 50 consultas |
| 🌙 **Modo oscuro** | Tema adaptable a preferencias del usuario |
| 📤 **Compartir** | Comparte entradas via Web Share API o portapapeles |
| 📱 **Diseño responsivo** | Optimizado para móvil y escritorio |
| 🔊 **Pronunciación** | *(Próximamente)* Audio de pronunciación nativa |
| ✨ **Palabra del día** | Palabra aleatoria diaria para aprendizaje continuo |

---

## 🗃️ Base de datos

### Estadísticas del diccionario

| Métrica | Valor |
|---|---|
| **Total de entradas** | 5,128 |
| **Idiomas** | Español, Inglés, Awajún, Wampis |
| **Categorías temáticas** | 63 |
| **Pares AW+WA verificados** | 1,521 (29.7%) |
| **Con ejemplo en Awajún** | 1,417 (28%) |
| **Con categoría gramatical** | 4,365 (85%) |

### Fuentes académicas primarias

1. **Diccionario Awajún-Castellano** — FORMABIAP / AIDESEP, Iquitos 2011
2. **Diccionario Preliminar Awajún** — Versión 2008
3. **Diccionario Wampis** — *Papi iisar wampis tura apach chicham nekatin*, 2018
4. **Vocabulario Pedagógico Awajún** — Material EIB, 2021

---

## 📁 Estructura del proyecto

```
diccionario-awajun-wampis/
├── public/
│   └── index.html              # HTML base con fuentes Google
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── BottomNav.jsx       # Navegación inferior
│   │   ├── SearchBar.jsx       # Barra de búsqueda
│   │   └── WordCard.jsx        # Tarjeta de palabra
│   ├── data/
│   │   └── diccionario.json    # Base de datos del diccionario
│   ├── hooks/
│   │   └── useDiccionario.js   # Hook central de estado
│   ├── pages/                  # Pantallas de la aplicación
│   │   ├── SplashScreen.jsx    # Pantalla de bienvenida
│   │   ├── HomeScreen.jsx      # Inicio con categorías
│   │   ├── BuscarScreen.jsx    # Búsqueda avanzada
│   │   ├── DetalleScreen.jsx   # Detalle de palabra
│   │   ├── FavoritosScreen.jsx # Palabras guardadas
│   │   ├── HistorialScreen.jsx # Historial de consultas
│   │   └── AjustesScreen.jsx   # Configuración
│   ├── utils/
│   │   └── constants.js        # Constantes y configuración
│   ├── App.jsx                 # Componente raíz
│   ├── index.js                # Entry point
│   └── index.css               # Estilos globales
├── .gitignore
├── package.json
├── FICHA_TECNICA.md
└── README.md
```

---

## 🛠️ Instalación y desarrollo local

### Prerrequisitos
- Node.js 18+ y npm 9+

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/<TU_USUARIO>/diccionario-awajun-wampis.git
cd diccionario-awajun-wampis

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm start
# → Abre http://localhost:3000
```

### Comandos disponibles

```bash
npm start       # Servidor de desarrollo (hot reload)
npm run build   # Build de producción → carpeta /build
npm test        # Ejecutar tests
```

---

## 🌐 Despliegue en GitHub Pages

```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Agregar a package.json:
#    "predeploy": "npm run build",
#    "deploy": "gh-pages -d build"

# 3. Publicar
npm run deploy
```

El sitio quedará disponible en:
`https://<TU_USUARIO>.github.io/diccionario-awajun-wampis`

---

## 📦 Actualizar la base de datos

El diccionario está en `src/data/diccionario.json`. Para agregar entradas:

```json
{
  "id": 999999,
  "cat": "Flora",
  "es": "Aguaje",
  "en": "Aguaje palm",
  "aw": "Áchu",
  "wa": "achu",
  "gram": "s.",
  "example_aw": "Áchu yuwata",
  "source": "diccionario_awajun_2011"
}
```

El campo `source` acepta:
- `maestro_original`
- `dic_awajun_2011`
- `dic_prelim_2008`
- `dic_wampis_2018`
- `vocabulario_pedagogico_2021`

---

## 🤝 Cómo contribuir

1. **Fork** del repositorio
2. Crea una rama: `git checkout -b mejora/nueva-funcionalidad`
3. Realiza tus cambios
4. **Pull Request** con descripción clara

### Áreas prioritarias de contribución
- ✅ Verificación y corrección de entradas Wampis (684 pendientes)
- 🔊 Grabaciones de audio de pronunciación nativa
- 🌍 Traducciones adicionales
- 📱 Mejoras de accesibilidad
- 🧪 Tests unitarios

---

## 📄 Licencia

MIT © 2025. Proyecto académico de preservación lingüística.

El contenido lingüístico proviene de fuentes publicadas con fines educativos.
Se reconoce y agradece el trabajo de los autores originales de los diccionarios fuente.

---

## 📧 Contacto

Para colaboraciones académicas, correcciones lingüísticas o reportar errores:

- **Issues**: [GitHub Issues](https://github.com/<TU_USUARIO>/diccionario-awajun-wampis/issues)

---

<div align="center">
  <p>🌿 <em>Preservando las lenguas originarias amazónicas del Perú</em> 🌿</p>
  <p><strong>Awajún · Wampis · Español · Inglés</strong></p>
</div>
