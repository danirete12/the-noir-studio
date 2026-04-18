// Genera los iconos PNG necesarios para la PWA/TWA
// Ejecutar: node generate-icons.mjs
// Requiere: npm install canvas (solo para generación local)

import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';

const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

function drawIcon(size) {
  const c = createCanvas(size, size);
  const ctx = c.getContext('2d');

  // Fondo blanco
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);

  // Cuadrado rojo Leica centrado (ratio del logo-mark original)
  const pad = size * 0.18;
  const sq = size - pad * 2;
  ctx.fillStyle = '#C8201A';
  ctx.fillRect(pad, pad, sq, sq);

  // "N" blanca minimalista (trazo, no relleno)
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = size * 0.07;
  ctx.lineCap = 'square';
  const m = size * 0.30;
  const top = size * 0.32;
  const bot = size * 0.68;
  ctx.beginPath();
  ctx.moveTo(m, bot);
  ctx.lineTo(m, top);
  ctx.lineTo(size - m, bot);
  ctx.lineTo(size - m, top);
  ctx.stroke();

  return c.toBuffer('image/png');
}

for (const size of SIZES) {
  const buf = drawIcon(size);
  writeFileSync(`icons/icon-${size}.png`, buf);
  console.log(`✓ icon-${size}.png`);
}

// Maskable icon (con más padding para el área segura)
function drawMaskable(size) {
  const c = createCanvas(size, size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#C8201A';
  ctx.fillRect(0, 0, size, size);
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = size * 0.07;
  ctx.lineCap = 'square';
  const m = size * 0.38;
  const top = size * 0.38;
  const bot = size * 0.62;
  ctx.beginPath();
  ctx.moveTo(m, bot);
  ctx.lineTo(m, top);
  ctx.lineTo(size - m, bot);
  ctx.lineTo(size - m, top);
  ctx.stroke();
  return c.toBuffer('image/png');
}

writeFileSync('icons/icon-512-maskable.png', drawMaskable(512));
console.log('✓ icon-512-maskable.png (maskable)');
console.log('\nIconos generados en /icons/');
