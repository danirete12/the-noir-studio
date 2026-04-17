# Plan de Lanzamiento — The Noir Studio
**Hoy:** martes 2026-04-14 · **Objetivo:** domingo 2026-04-20 · **Días restantes:** 6

---

## El producto ahora mismo

```
┌─────────────────────────────────────────────────────────────┐
│                    THE NOIR STUDIO                          │
│                                                             │
│  ✅ UI en español          ✅ 15 presets con criterio       │
│  ✅ og:image completo      ✅ Export 1080×1350 Instagram    │
│  ✅ Overflow indicator     ✅ Antes/Después (tecla A)       │
│  ✅ Cambiar foto           ✅ Identidad visual coherente    │
│  ✅ Sin dependencias npm   ✅ 30–60s de carga a exportar    │
│                                                             │
│  Pendiente de decisión ──────────────────────────────────►  │
│  ⏳ Histograma             ⏳ Dominio propio               │
│  ⏳ Testeo mobile                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## La decisión que define la semana

```
                   ¿Histograma en el domingo?
                            │
              ┌─────────────┴─────────────┐
             SÍ                           NO
              │                            │
    ┌─────────▼──────────┐      ┌──────────▼─────────┐
    │  Mar–Jue: código   │      │  Más tiempo para   │
    │  Canvas histogram  │      │  dominio + mobile  │
    │  requestAnimFrame  │      │  testing + pulido  │
    │  overlay en canvas │      │                    │
    └─────────┬──────────┘      └──────────┬─────────┘
              │                            │
              └──────────┬─────────────────┘
                         │
                    Vie–Sáb
                    Dominio + HTTPS
                    Testeo mobile
                    Posts de lanzamiento
                         │
                    DOMINGO 20
                    Publicación en
                    comunidades foto
```

---

## Los 3 pendientes reales antes del domingo

### 1. Histograma ⏳ — *Decisión tuya*

```
Qué es:   Overlay en el canvas que muestra la distribución de luces/sombras
          en tiempo real mientras editas.

Por qué   El fotógrafo que viene de Lightroom edita a ciegas sin él.
importa:  Sin histograma = filtro de Instagram con nombre bonito.
          Con histograma = herramienta editorial seria.

Esfuerzo: Medio. ~4–6h de implementación.
          getImageData → contar luminancia píxel a píxel → dibujar
          en canvas superpuesto → requestAnimationFrame.

Riesgo:   Ninguno arquitectural. Es un canvas nuevo encima del canvas
          existente. No toca el pipeline de píxeles.

Veredicto del equipo: 5 agentes dicen que es el único bloqueante real
          para la credibilidad con la audiencia declarada (fotógrafos).
```

### 2. Dominio propio ⏳ — *Compra externa*

```
Qué es:   thenoirstudio.com / thenoirstudio.es u otro dominio limpio
          apuntando al hosting de WebEmpresa con HTTPS.

Por qué   Las comunidades de fotografía (Reddit, grupos foto) valoran
importa:  la credibilidad. Una URL de WebEmpresa comunica "hobby project".
          Un dominio propio comunica "herramienta seria".

Esfuerzo: Bajo técnico. Alto en decisión: ¿qué dominio? ¿qué TLD?
          Una vez comprado: apuntar DNS a WebEmpresa, activar SSL,
          actualizar og:image URL en el <head> (una línea de código).

Riesgo:   Propagación DNS puede tardar 24–48h. Comprar hoy o mañana.
```

### 3. Testeo mobile ⏳ — *Dispositivo físico*

```
Qué es:   Abrir la URL en un iPhone (Safari) y en un Android (Chrome)
          y usar el editor de verdad: cargar foto, aplicar preset,
          desplazar la barra, exportar.

Por qué   iOS Safari tiene comportamiento errático con overflow:hidden
importa:  en body + barra de URL dinámica. Puede romper el layout.
          Sin testear = riesgo de primera impresión rota en mobile.

Qué testear:
          □ El layout no se rompe al aparecer/desaparecer la barra de URL
          □ La barra de presets hace scroll horizontal sin problema
          □ Los sliders son usables con el dedo
          □ La foto se carga correctamente
          □ El botón Exportar funciona (descarga el archivo)
          □ No hay freeze notable en fotos de 12MP+

Esfuerzo: Bajo. ~1h de testing real.
```

---

## Calendario propuesto

```
MAR 14 ──── HOY
            └── Decidir: ¿histograma sí o no en el domingo?

MIÉ 15 ──── Si histograma SÍ: implementar
            Si histograma NO: avanzar dominio + pulido

JUE 16 ──── Comprar dominio (si no está hecho)
            DNS tarda 24–48h → urgente antes del viernes

VIE 17 ──── Verificar HTTPS en el dominio nuevo
            Actualizar og:image URL en el código → push
            Testeo mobile iOS + Android

SÁB 18 ──── Buffer: fix de cualquier bug de mobile
            Preparar los posts de lanzamiento
            Redactar el texto para cada comunidad

DOM 19 ──── Publicar en comunidades (noche del sábado / madrugada)
            ─ r/analog, r/analogphotography, r/photoshopbattles
            ─ Grupos de fotografía hispanohablante en Facebook/Discord
            ─ Tweet con antes/después visual

DOM 20 ──── THE NOIR STUDIO · LIVE
```

---

## Los posts de lanzamiento (qué decir, dónde)

```
REDDIT (r/analog, r/analoguefilm, grupos hispanos)
├── Antes/Después visual — imprescindible, es el gancho
├── "Hice un editor web gratuito para fotógrafos analógicos"
├── Sin registro, sin instalación, resultado en 60 segundos
└── Enlace directo

TWITTER/X
├── Hilo corto: el problema → la solución → el editor
├── Antes/Después con el preset más fotogénico (Caravaggio o Wes)
└── No usar emojis en la imagen (regla de marca)

COMUNIDADES HISPANOHABLANTES
├── Grupos de Lightroom, VSCO, fotografía en español
├── Mensaje en español, con referencia a la audiencia específica
└── Enfatizar: gratuito, sin cuenta, exporta para Instagram
```

---

## Métricas que importan el día 1

```
Objetivo mes 1         Lo que mides el domingo
─────────────────      ──────────────────────────────
500 sesiones únicas    Cuántos clics desde los posts
Tasa export > 30%      ¿Quién llega, exporta o se va?
1 mención espontánea   Alguien comparte una foto editada
```

---

## Lo que no entra el domingo (y está bien)

```
🔜 Edición multi-foto    → Post-lanzamiento (refactor de estado)
🔜 Histograma (si decide no)
🔜 Curvas tonales        → Sprint 2
🔜 HSL por canal         → Sprint 2
🔜 Web Worker            → Sprint 2 (cuando haya usuarios que lo justifiquen)
🔜 Watermark opcional    → Growth loop, cuando haya tráfico
🔜 Email capture         → Cuando haya tráfico que capture
🔜 5 preset pages SEO    → Sprint 2 (infraestructura ya existe con ?tool=)
```

---

*Actualizado 2026-04-14*
