#!/usr/bin/env node
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const OUTPUT_PATH = path.join(projectRoot, 'client/public/og-default.jpg');
const WIDTH = 1200;
const HEIGHT = 630;

async function generateOGImage() {
  console.log('🎨 Generating OG default image...\n');

  // Create SVG with text
  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(37, 99, 235);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(29, 78, 216);stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradient)"/>
      
      <!-- Brand Name -->
      <text 
        x="50%" 
        y="45%" 
        font-family="Arial, sans-serif" 
        font-size="72" 
        font-weight="bold" 
        fill="white" 
        text-anchor="middle"
        dominant-baseline="middle">
        DFW Pristine
      </text>
      
      <text 
        x="50%" 
        y="55%" 
        font-family="Arial, sans-serif" 
        font-size="72" 
        font-weight="bold" 
        fill="white" 
        text-anchor="middle"
        dominant-baseline="middle">
        Power Washing
      </text>
      
      <!-- Tagline -->
      <text 
        x="50%" 
        y="70%" 
        font-family="Arial, sans-serif" 
        font-size="32" 
        fill="rgba(255,255,255,0.9)" 
        text-anchor="middle"
        dominant-baseline="middle">
        Professional Pressure Washing in DFW
      </text>
      
      <!-- Bottom line -->
      <rect x="100" y="${HEIGHT - 10}" width="${WIDTH - 200}" height="5" fill="rgba(255,255,255,0.3)" rx="2"/>
    </svg>
  `;

  try {
    // Generate image from SVG
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(OUTPUT_PATH);

    const stats = await fs.stat(OUTPUT_PATH);
    const sizeKB = (stats.size / 1024).toFixed(1);

    console.log(`✅ OG image created: ${path.relative(projectRoot, OUTPUT_PATH)}`);
    console.log(`   Dimensions: ${WIDTH}x${HEIGHT}`);
    console.log(`   File size: ${sizeKB}KB`);
    
    if (stats.size > 200 * 1024) {
      console.log(`   ⚠️  Warning: Image is >200KB`);
    } else {
      console.log(`   ✨ Image size optimized (<200KB)`);
    }

    console.log('\n✨ Done!\n');
  } catch (error) {
    console.error('❌ Error generating OG image:', error.message);
    process.exit(1);
  }
}

generateOGImage();
