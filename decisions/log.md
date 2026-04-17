# Decision Log

Append-only. Cuando se tome una decisión importante, regístrala aquí.

Formato:
[YYYY-MM-DD] DECISION: ... | REASONING: ... | CONTEXT: ...

---

[2026-04-12] DECISION: Vanilla JS + Canvas 2D sin frameworks | REASONING: WebEmpresa shared hosting no puede servir apps Node.js; un archivo HTML es suficiente para el scope actual; cero fricción de despliegue | CONTEXT: Evaluamos React+Tailwind+Fabric.js, descartado

[2026-04-12] DECISION: Rechazar stack React+Fabric.js+UTIF.js | REASONING: Requiere build tools incompatibles con WebEmpresa; UTIF.js no hace revelado RAW real; añade complejidad sin valor para el MVP | CONTEXT: Propuesta inicial de modernización del stack

[2026-04-12] DECISION: Presets con nombres de referencias culturales | REASONING: Diferenciación vs VSCO/Afterlight; conversación con el usuario que sabe (guiño cultural); cada nombre es una búsqueda SEO potencial | CONTEXT: Naming de los 15 presets

[2026-04-12] DECISION: Barra de presets horizontal en top (no en panel derecho) | REASONING: Libera el panel derecho para sliders; la barra horizontal funciona como filmstrip de Lightroom; mejor en mobile como carrusel | CONTEXT: Reorganización del layout

[2026-04-12] DECISION: Iconos SVG estáticos por preset (no thumbnails de la foto del usuario) | REASONING: Los thumbnails requerían processPixels por cada preset al cargar; los iconos son instantáneos, coherentes con el sistema de diseño, y funcionan sin foto cargada | CONTEXT: El usuario quería thumbnails tipo Lightroom inicialmente

[2026-04-12] DECISION: Paleta blanca (fondo #ffffff) en lugar de negro | REASONING: El usuario lo pidió; evoca estudio de fotografía diurno en lugar de cuarto oscuro; más cerca de la estética Leica | CONTEXT: Cambio de tema oscuro a claro

[2026-04-12] DECISION: Acento rojo #C8201A (estilo Leica) en lugar de dorado | REASONING: El rojo es más técnico/preciso (instrumento de precisión), el dorado era más editorial/lujoso; el usuario lo eligió | CONTEXT: Cambio de color de acento

[2026-04-13] DECISION: UI completamente en español | REASONING: La audiencia principal es hispanohablante; la mezcla español/inglés en la UI era inconsistente (solo el brand name permanece en inglés) | CONTEXT: Review del Director de Arte en sesión multi-agente

[2026-04-13] DECISION: 9 agentes especializados en .claude/agents/ | REASONING: Cada agente tiene contexto específico del proyecto para tomar decisiones desde su perspectiva sin necesidad de briefing en cada sesión | CONTEXT: El usuario quiere un ecosistema de subagentes para el proyecto

[2026-04-13] DECISION: Lanzamiento objetivo domingo 2026-04-20 | REASONING: El producto tiene suficiente funcionalidad para un MVP público; el usuario quiere validar con usuarios reales lo antes posible | CONTEXT: Planificación post-sesión multi-agente

[2026-04-14] DECISION: Edición multi-foto → post-lanzamiento | REASONING: Requiere refactorizar el modelo de datos central (originalImage → array de fotos con estado por foto); el MVP de una foto es suficiente para validar con usuarios reales | CONTEXT: Análisis de la feature confirmó que es trabajo significativo, no un tweak; el lanzamiento del domingo no lo necesita

[2026-04-14] DECISION: Histograma → post-lanzamiento | REASONING: El usuario considera que el producto lanza bien sin él; prioridad es dominio propio + testeo mobile antes del domingo | CONTEXT: Pregunta abierta del informe multi-agente resuelta
