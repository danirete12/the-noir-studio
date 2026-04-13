# Informe Pre-Lanzamiento — The Noir Studio
**Fecha:** 2026-04-13
**Objetivo:** Lanzamiento domingo 2026-04-20
**Metodología:** Sesión de reflexión simultánea con los 9 agentes del equipo

---

## Resumen ejecutivo

El producto tiene base sólida: identidad visual coherente, flujo de 30-60 segundos de carga a exportación, 15 presets con criterio editorial. **Pero 4 pendientes bloquean o condicionan el lanzamiento del domingo.** El equipo está dividido: 2 agentes dicen lanzar, 5 dicen que no está listo, 2 lo condicionan.

**Pendientes críticos identificados:**
1. Histograma en tiempo real
2. Dominio propio con HTTPS
3. og:image en el head (Open Graph incompleto)
4. Testeo en iOS Safari y Android Chrome

---

## Informe por departamento

---

### 🎨 Director de Arte

**Posición:** No está listo — falta cerrar

La identidad visual es sólida y coherente: el sistema de diseño está bien definido, sin fisuras entre la definición de marca y la implementación en CSS. El tagline "Sin scroll. Sin distracciones. Solo tu foto." está ejecutado con disciplina real en el código.

**El problema es el checklist.** Faltan 7 días y ningún must-have tiene tilde. No hay histograma, no hay dominio propio, mobile sin testear, preset pages sin verificar.

El Open Graph existe pero **no hay `og:image`** en el head, lo que inutiliza el card de Twitter y Facebook en el momento del lanzamiento — el primer impacto visual cuando alguien comparte el enlace será una caja gris vacía.

**Recomendación:** Priorizar brutalmente. Histograma o dominio, no los dos a la vez. El resto puede esperar al sprint siguiente.

---

### 🏷️ Brand Manager

**Posición:** No está listo — falta el dominio

El territorio de marca es sólido. The Noir Studio tiene identidad real, no aspiracional: el rojo Leica, los presets como referencias culturales, la obsesión por no competir con la foto. Eso aguanta.

**La preocupación principal es el dominio.** El marketing depende de comunidades de fotografía donde la credibilidad lo es todo. Llegar sin dominio propio a esas comunidades es llegar sin tarjeta de visita. Una URL de WebEmpresa o GitHub Pages comunica proyecto de hobby, no herramienta seria.

El histograma es importante para la audiencia declarada (fotógrafos que vienen de Lightroom), pero puede esperar una semana si el dominio está resuelto.

**Recomendación:** Dominio + testeo mobile antes que cualquier otra cosa. El histograma puede esperar. El lanzamiento sin URL limpia, no.

---

### 📢 Jefe de Marketing

**Posición:** No está listo — mobile y dominio primero

La propuesta diferencial es genuina: pantalla fija, presets con nombre de autor, cero fricción. Eso no es marketing inflado.

**Gap entre lo que hay y lo que falta:** UI en español (ya hecho), histograma, mobile testeado, dominio limpio, 5 preset pages. Demasiado para una semana solo.

**Canal más rápido para el lanzamiento:** no es SEO, es comunidad. Reddit (r/analog, r/photoshopbattles) y grupos de fotografía hispanohablante pueden generar las primeras 200 sesiones en 48 horas si el antes/después es impactante visualmente.

**La decisión con más impacto a largo plazo** que está en el backlog: watermark opcional en exportación. Cada foto publicada con "Editado con The Noir Studio" es un anuncio gratuito dirigido exactamente a la audiencia objetivo.

**Recomendación:** Priorizar mobile + URL limpia. Post-lanzamiento inmediato: watermark opcional.

---

### 📷 Experto en Fotografía

**Posición:** No está listo — el histograma es el único bloqueante real

El pipeline de 10 pasos es funcional y los 15 presets son coherentes con sus referencias. La decisión de mover curvas tonales y HSL al post-lanzamiento es acertada.

**El histograma es el único pendiente crítico real para el domingo.** Sin él, un fotógrafo que viene de Lightroom edita a ciegas: no sabe si está quemando altas luces o aplastando sombras. Esa es la diferencia entre una herramienta editorial y un filtro de Instagram con nombre bonito — y la audiencia declarada nota exactamente esa diferencia.

La ausencia de curvas y HSL no bloquea el lanzamiento. Son herramientas pro que pueden llegar en el siguiente sprint sin afectar la credibilidad del MVP.

**Veredicto:** Si el histograma se implementa esta semana, se lanza con dignidad. Sin él, se lanza mal posicionado respecto a la audiencia que se quiere conquistar.

---

### 🧭 UX Designer

**Posición:** No está lista — faltan dos must-haves explícitos

El happy path es sólido: 30-60 segundos de cargar a exportar es una ventaja real. El botón "Cambiar foto" ya está implementado, eso resuelve el principal punto de no-retorno del flujo.

**Lo que falta según los propios goals.md:**
- Histograma en tiempo real → no implementado
- Indicador de overflow en barra de presets → no implementado

Problemas tolerables en v1 (no bloquean): sin toast de confirmación de carga, toggle de preset no obvio para el usuario nuevo, atajos de teclado no documentados en la UI.

**El riesgo para la tasa de exportación:** si el usuario no sabe que puede cambiar de foto sin recargar, y no entiende que el clic en preset activo resetea todo, el funnel se rompe antes de llegar a exportar.

**Recomendación:** Cerrar histograma e indicador de overflow antes del domingo. Son los únicos must-haves sin tachar que afectan directamente a la percepción del producto.

---

### 🖼️ UI Designer

**Posición:** Listo — lanzar

El diseño visual está implementado y es coherente con el sistema de marca. Tokens CSS correctos (`--accent` ya renombrado desde `--gold`), tipografía Cormorant + Inter con escala y letter-spacing correctos, sin border-radius, sombra solo en el canvas. El layout fijo sin scroll de página ejecuta el tagline con coherencia visual.

**Asuntos menores para el backlog inmediato (no bloquean el lanzamiento):**
- Fade-out en los extremos de la barra de presets para señalizar overflow
- Mayor diferenciación visual entre "Exportar" y "Resetear todo"
- El scrollbar del panel tiene `border-radius: 2px` que rompe la regla de cero radios

**Veredicto:** El diseño visual no es el problema. Lanzar.

---

### 💻 Desarrollador Frontend

**Posición:** Condicional — depende de histograma y mobile

El código es sólido para un MVP: arquitectura de un solo archivo bien pensada, pipeline de píxeles correcto, exportación a 1080×1350 funcional. No hay deuda técnica peligrosa.

**Tres riesgos reales para el domingo:**

1. **Procesamiento bloqueante en móvil:** en iOS con fotos de 12MP+, la UI se congela varios segundos durante `applyFilters()`. No hay Web Workers todavía. Puede matar la primera impresión en móvil.

2. **Histograma no implementado:** si está en el must-have del checklist y no existe, es el bloqueante más gordo antes del lanzamiento.

3. **Safari móvil y `overflow: hidden` en body:** comportamiento errático con la barra de URL dinámica de iOS. El layout puede romperse visualmente en iPhone sin testeo específico.

**Recomendación:** El lanzamiento del domingo es viable si el histograma existe y mobile no rompe. Si el histograma aún no está construido, sacarlo del must-have o posponer el lanzamiento.

---

### 🗄️ Desarrollador Backend

**Posición:** Listo — sin backend es correcto

El lanzamiento sin backend es completamente viable. El producto es deliberadamente cliente-side, y eso es una fortaleza estructural, no una deuda técnica.

**Riesgos reales de infraestructura:**
- WebEmpresa shared hosting: si genera más tráfico del esperado el primer día, puede throttlear. No hay CDN ni fallback.
- Sin HTTPS verificado + dominio propio, el Open Graph y el posicionamiento quedan incompletos.
- Sin analytics server-side, las métricas de éxito del lanzamiento dependen de lo que haya configurado en cliente.

**Lo que no hace falta el domingo:** backend, base de datos, autenticación, API.

**Lo que sí hace falta:** dominio propio funcionando con HTTPS antes del lanzamiento. Todo lo demás es post-lanzamiento.

**Veredicto:** La arquitectura actual es la correcta para este momento. El backend llega cuando el primer usuario pida guardar sus presets.

---

### ⚙️ Ingeniero de Procesamiento

**Posición:** Condicional — los riesgos no son de procesamiento

El pipeline Canvas 2D CPU es funcional. Los 200-400ms de exportación son tolerables para un MVP. No hay riesgos bloqueantes de procesamiento para el lanzamiento.

**Los riesgos reales identificados no son de imagen:**
- Histograma pendiente en el checklist
- Mobile sin testear (iOS Safari, Android Chrome)
- Sin dominio propio ni og:image

**La deuda técnica más visible para un fotógrafo con criterio:** la temperatura/warmth usa `+28R +8G -22B` como aproximación plana, lo que produce resultados incorrectos en altas luces. Es el ajuste más usado y el que más diferencia la percepción de calidad. La conversión RGB→XYZ con Bradford transform es el fix correcto — pero es post-lanzamiento, no bloqueante.

**Recomendación:** Ningún problema de procesamiento bloquea el domingo. Los bloqueantes son los mismos que el resto del equipo señala.

---

## Cuadro de votación

| Agente | ¿Listo el domingo? | Bloqueante principal |
|---|---|---|
| Director de Arte | ❌ No | og:image + dominio |
| Brand Manager | ❌ No | Dominio propio |
| Jefe de Marketing | ❌ No | Mobile + dominio |
| Experto en Fotografía | ❌ No | Histograma |
| UX Designer | ❌ No | Histograma + overflow indicator |
| **UI Designer** | **✅ Sí** | — |
| Desarrollador Frontend | ⚠️ Condicional | Histograma + Safari móvil |
| **Desarrollador Backend** | **✅ Sí** | — |
| Ingeniero de Procesamiento | ⚠️ Condicional | Histograma + dominio |

---

## Decisión pendiente

**El equipo identifica 4 pendientes reales antes del domingo:**

| Pendiente | Impacto | Esfuerzo estimado |
|---|---|---|
| **og:image** | Alto — sin él el card de redes sociales queda vacío | Bajo — necesita una imagen estática |
| **Dominio propio** | Alto — credibilidad en comunidades | Bajo técnico, coste económico |
| **Histograma en tiempo real** | Alto — credibilidad con fotógrafos pro | Medio — Canvas + requestAnimationFrame |
| **Testeo mobile iOS/Android** | Alto — riesgo de layout roto en Safari | Bajo — necesita un dispositivo físico |

**La pregunta que define el plan de la semana:**
> ¿El histograma es un must-have para el domingo o lo movemos al sprint siguiente?

---
*Informe generado en sesión multi-agente — 2026-04-13*
