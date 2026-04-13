# Stack Técnico

## Principio fundamental
**Un solo archivo HTML. Sin build tools. Sin dependencias npm.**
Restricción de hosting: WebEmpresa shared hosting — sin Node.js, sin procesos persistentes.

## Frontend
- **HTML/CSS/JS vanilla** — todo en `index.html`
- **Canvas 2D API** — procesamiento de imagen píxel a píxel
- **Google Fonts** — Cormorant Garamond + Inter (única dependencia externa)

## Procesamiento de imagen
```
loadImage() → originalImage (HTMLImageElement)
  ↓
applyFilters() — lee sliders, construye objeto p
  ↓
processPixels(imageData.data, p) — bucle píxel a píxel
  ↓
applyVignette(ctx, w, h, vignette) — gradiente radial
  ↓
putImageData() → canvas visible
```

**Exportación**: canvas temporal 1080×1350, sharpenImageData() (Laplacian 0.45), toDataURL JPEG 0.93

## Variables clave
```js
let originalImage = null;   // nunca modificar
let activePreset  = null;   // key del preset activo

const PRESETS = { ... }         // 15 presets con sus valores
const PRESET_ICONS = { ... }    // 15 SVGs inline
const sliders = { ... }         // 11 inputs range
const vals = { ... }            // 11 spans de valor
```

## Sistema de diseño (tokens CSS)
```css
--bg:      #ffffff
--panel:   #f8f8f6
--border:  #e0ddd8
--text:    #1a1a1a
--muted:   #aaa
--accent:  #C8201A  /* rojo Leica */
--font-serif: Cormorant Garamond 300/400
--font-sans:  Inter 300/400/500
```

## Hosting y despliegue
- WebEmpresa shared hosting
- Despliegue manual: descargar index.html de GitHub → subir por File Manager
- Repositorio: github.com/danirete12/the-noir-studio (rama master)

## Restricciones técnicas conocidas
- Sin Web Workers (todavía) — processPixels bloquea el hilo principal ~200-400ms en imágenes grandes
- Sin WebGL — Canvas 2D puro, sin GPU
- Sin backend — todo procesamiento en cliente

## Próximas mejoras técnicas priorizadas
1. LUT precalculada (3-5× velocidad sin cambiar arquitectura)
2. Curvas tonales
3. HSL por canal
4. Web Worker para no bloquear hilo
