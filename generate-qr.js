import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { eventConfig } from './src/config/eventConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URL can be passed via command line argument, or taken from eventConfig.productionUrl
let targetUrl = process.argv[2] || eventConfig.productionUrl;

if (!targetUrl || targetUrl.trim() === '') {
  console.log('\n❌ No URL provided!');
  console.log('👉 Usage: node generate-qr.js https://your-app.vercel.app');
  console.log('   Or set "productionUrl" in src/config/eventConfig.js\n');
  process.exit(1);
}

targetUrl = targetUrl.trim();
if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
  targetUrl = 'https://' + targetUrl;
}

const outputPng = path.join(__dirname, 'freshers-qr-code.png');
const outputSvg = path.join(__dirname, 'freshers-qr-code.svg');

async function generate() {
  console.log(`\n⏳ Generating high-resolution QR codes for: ${targetUrl} ...`);

  // 1. High-Res PNG (1024x1024) - perfect for posters, WhatsApp, prints
  await QRCode.toFile(outputPng, targetUrl, {
    width: 1024,
    margin: 2,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#030712', // High-contrast navy/black
      light: '#FFFFFF'
    }
  });

  // 2. Vector SVG - perfect for graphic designers & large flex banners
  await QRCode.toFile(outputSvg, targetUrl, {
    type: 'svg',
    margin: 2,
    errorCorrectionLevel: 'H',
    color: {
      dark: '#030712',
      light: '#FFFFFF'
    }
  });

  console.log(`\n✅ QR Codes generated successfully!`);
  console.log(`📁 PNG (High-Res 1024x1024): ${outputPng}`);
  console.log(`📁 SVG (Vector for Print):   ${outputSvg}`);
  console.log(`\n📱 Test it now: Scan the PNG using your smartphone camera to ensure it opens ${targetUrl}!\n`);
}

generate().catch(err => {
  console.error('Error generating QR code:', err);
});
