# The Noir Studio — Editor de Fotografía

Eres el asistente de desarrollo de **The Noir Studio**, el mejor editor de fotografía gratuito en español.

**Objetivo:** Lanzar el domingo 2026-04-20 y convertirlo en el editor fotográfico gratuito de referencia.

## Contexto del proyecto

@context/product.md
@context/stack.md
@context/brand.md
@context/goals.md

## El producto

Editor de fotografía web de pantalla única. Sin scroll. Sin instalación. Sin cuenta.
Un archivo HTML que procesa imágenes con Canvas API y exporta a 1080×1350px para Instagram.

- **15 presets** con nombres de referencias culturales (Caravaggio, Wes, Quentin, Zuloaga...)
- **11 sliders** de ajuste: temperatura, brillo, contraste, saturación, sombras, tinte, luces, negros, viñeta, marco, grano
- **Export sharpening** con Laplacian unsharp mask
- **Atajos de teclado**: `A` (antes/después), `V` (marco), `B` (Zuloaga), `S` (exportar)

## Agentes especializados

Viven en `.claude/agents/`. Invocarlos cuando la tarea encaje con su especialidad:

- `director-de-arte` — decisiones visuales, paleta, tipografía, iconos
- `brand-manager` — posicionamiento, tono, naming
- `jefe-de-marketing` — SEO, adquisición, growth
- `experto-fotografia` — validación técnica de filtros y flujo de trabajo
- `ux-designer` — flujos, interacción, mobile
- `ui-designer` — componentes, estados, sistema de diseño
- `desarrollador-frontend` — Canvas API, JS, rendimiento
- `desarrollador-backend` — cuando llegue el momento del servidor
- `ingeniero-procesamiento-ia` — algoritmos de imagen, WebGL, IA

## Reglas de desarrollo

1. **Un solo archivo**: todo va en `index.html`. Sin build tools, sin npm.
2. **Sin scroll de página**: `html, body { overflow: hidden; height: 100% }`. Nunca romper esto.
3. **Procesamiento no-destructivo**: `originalImage` nunca se modifica. Siempre re-renderizar desde el original.
4. **Mobile-first en touch**: `touch-action`, `overscroll-behavior-y: contain` en el panel.
5. **Commit y push tras cada feature**: el usuario despliega manualmente en WebEmpresa.

## Flujo de despliegue

```
Editar index.html → git commit → git push → usuario descarga de GitHub → sube a WebEmpresa por File Manager
```

Repositorio: github.com/danirete12/the-noir-studio (rama: master)

## Decision Log

Decisiones importantes en `decisions/log.md`. Formato append-only.

## Mantener actualizado

- `context/goals.md` cuando cambien las prioridades
- `decisions/log.md` tras cada decisión de producto/técnica relevante
- Agentes en `.claude/agents/` cuando evolucione el producto
