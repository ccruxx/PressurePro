#!/usr/bin/env node
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const IMAGE_DIRS = [
  path.join(projectRoot, 'client/public'),
  path.join(projectRoot, 'attached_assets'),
];

const BACKUP_DIR = path.join(projectRoot, 'client/public/_originals');
const MAX_SIZE_KB = 300;
const TARGET_SIZE_KB = 200;

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function getFileSizeKB(filePath) {
  const stats = await fs.stat(filePath);
  return stats.size / 1024;
}

async function compressImage(filePath, originalSizeKB) {
  const ext = path.extname(filePath).toLowerCase();
  const filename = path.basename(filePath);
  
  console.log(`\n🔍 Processing: ${filename} (${originalSizeKB.toFixed(1)}KB)`);

  // Backup original if not already backed up
  const backupPath = path.join(BACKUP_DIR, filename);
  const backupExists = await fs.access(backupPath).then(() => true).catch(() => false);
  
  if (!backupExists) {
    await ensureDir(BACKUP_DIR);
    await fs.copyFile(filePath, backupPath);
    console.log(`   ✅ Backed up to _originals/`);
  }

  let image = sharp(filePath);
  const metadata = await image.metadata();
  
  // Resize if extremely large (>3000px)
  let resizeNeeded = false;
  if (metadata.width > 3000 || metadata.height > 3000) {
    const scale = 3000 / Math.max(metadata.width, metadata.height);
    const newWidth = Math.round(metadata.width * scale);
    const newHeight = Math.round(metadata.height * scale);
    image = image.resize(newWidth, newHeight, { fit: 'inside' });
    resizeNeeded = true;
    console.log(`   📐 Resizing to ${newWidth}x${newHeight}`);
  }

  // Try different quality levels to hit target
  let quality = 85;
  let attempts = 0;
  let bestBuffer = null;
  let bestSize = Infinity;

  while (attempts < 5) {
    let buffer;
    
    if (ext === '.png') {
      // Convert PNG to JPG for better compression
      buffer = await image.jpeg({ quality, mozjpeg: true }).toBuffer();
      const newPath = filePath.replace(/\.png$/i, '.jpg');
      
      if (attempts === 0) {
        console.log(`   🔄 Converting PNG → JPG for better compression`);
      }
      
      const sizeKB = buffer.length / 1024;
      
      if (sizeKB < bestSize) {
        bestSize = sizeKB;
        bestBuffer = { buffer, path: newPath };
      }
      
      if (sizeKB <= TARGET_SIZE_KB) break;
      
    } else if (['.jpg', '.jpeg'].includes(ext)) {
      buffer = await image.jpeg({ quality, mozjpeg: true }).toBuffer();
      const sizeKB = buffer.length / 1024;
      
      if (sizeKB < bestSize) {
        bestSize = sizeKB;
        bestBuffer = { buffer, path: filePath };
      }
      
      if (sizeKB <= TARGET_SIZE_KB) break;
      
    } else if (ext === '.webp') {
      buffer = await image.webp({ quality }).toBuffer();
      const sizeKB = buffer.length / 1024;
      
      if (sizeKB < bestSize) {
        bestSize = sizeKB;
        bestBuffer = { buffer, path: filePath };
      }
      
      if (sizeKB <= TARGET_SIZE_KB) break;
    }

    quality -= 10;
    attempts++;
  }

  if (bestBuffer && bestSize < originalSizeKB) {
    await fs.writeFile(bestBuffer.path, bestBuffer.buffer);
    
    // If converted PNG to JPG, remove original PNG
    if (ext === '.png' && bestBuffer.path !== filePath) {
      await fs.unlink(filePath);
      console.log(`   ✨ Converted & compressed: ${originalSizeKB.toFixed(1)}KB → ${bestSize.toFixed(1)}KB (${((1 - bestSize/originalSizeKB) * 100).toFixed(1)}% reduction)`);
    } else {
      console.log(`   ✨ Compressed: ${originalSizeKB.toFixed(1)}KB → ${bestSize.toFixed(1)}KB (${((1 - bestSize/originalSizeKB) * 100).toFixed(1)}% reduction)`);
    }
    
    return { success: true, originalSize: originalSizeKB, newSize: bestSize, saved: originalSizeKB - bestSize };
  } else {
    console.log(`   ⚠️  Could not compress below target (best: ${bestSize.toFixed(1)}KB)`);
    return { success: false, originalSize: originalSizeKB, newSize: originalSizeKB, saved: 0 };
  }
}

async function scanAndCompress(dir) {
  const results = { processed: [], skipped: [], failed: [] };
  
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Skip node_modules, dist, _originals
        if (['node_modules', 'dist', '_originals', '.git'].includes(entry.name)) {
          continue;
        }
        const subResults = await scanAndCompress(fullPath);
        results.processed.push(...subResults.processed);
        results.skipped.push(...subResults.skipped);
        results.failed.push(...subResults.failed);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          const sizeKB = await getFileSizeKB(fullPath);
          
          if (sizeKB > MAX_SIZE_KB) {
            try {
              const result = await compressImage(fullPath, sizeKB);
              results.processed.push({ file: entry.name, ...result });
            } catch (error) {
              console.error(`   ❌ Error compressing ${entry.name}:`, error.message);
              results.failed.push({ file: entry.name, error: error.message });
            }
          } else {
            results.skipped.push({ file: entry.name, size: sizeKB });
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error.message);
  }
  
  return results;
}

async function main() {
  console.log('🎨 DFW Pristine - Image Compression Tool\n');
  console.log(`Target: Compress images >${MAX_SIZE_KB}KB to <${TARGET_SIZE_KB}KB\n`);
  
  const allResults = { processed: [], skipped: [], failed: [] };
  
  for (const dir of IMAGE_DIRS) {
    const dirExists = await fs.access(dir).then(() => true).catch(() => false);
    if (!dirExists) {
      console.log(`⏭️  Skipping ${path.relative(projectRoot, dir)} (doesn't exist)\n`);
      continue;
    }
    
    console.log(`📁 Scanning: ${path.relative(projectRoot, dir)}`);
    const results = await scanAndCompress(dir);
    
    allResults.processed.push(...results.processed);
    allResults.skipped.push(...results.skipped);
    allResults.failed.push(...results.failed);
  }
  
  console.log('\n\n📊 COMPRESSION SUMMARY');
  console.log('═'.repeat(60));
  
  if (allResults.processed.length > 0) {
    const totalSaved = allResults.processed.reduce((sum, r) => sum + r.saved, 0);
    console.log(`\n✅ Compressed: ${allResults.processed.length} images`);
    console.log(`💾 Total saved: ${totalSaved.toFixed(1)}KB (${(totalSaved / 1024).toFixed(2)}MB)`);
  }
  
  if (allResults.skipped.length > 0) {
    console.log(`\n✓  Skipped: ${allResults.skipped.length} images (already <${MAX_SIZE_KB}KB)`);
  }
  
  if (allResults.failed.length > 0) {
    console.log(`\n❌ Failed: ${allResults.failed.length} images`);
    allResults.failed.forEach(f => console.log(`   - ${f.file}: ${f.error}`));
  }
  
  // Check for any remaining large files
  console.log('\n\n🔍 REMAINING LARGE FILES (>300KB)');
  console.log('═'.repeat(60));
  
  const largeFiles = [];
  for (const dir of IMAGE_DIRS) {
    const dirExists = await fs.access(dir).then(() => true).catch(() => false);
    if (!dirExists) continue;
    
    const checkLarge = async (checkDir) => {
      const entries = await fs.readdir(checkDir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(checkDir, entry.name);
        if (entry.isDirectory() && !['node_modules', 'dist', '_originals', '.git'].includes(entry.name)) {
          await checkLarge(fullPath);
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();
          if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
            const sizeKB = await getFileSizeKB(fullPath);
            if (sizeKB > MAX_SIZE_KB) {
              largeFiles.push({ path: path.relative(projectRoot, fullPath), size: sizeKB });
            }
          }
        }
      }
    };
    
    await checkLarge(dir);
  }
  
  if (largeFiles.length > 0) {
    console.log(`\n⚠️  Found ${largeFiles.length} files still >300KB:\n`);
    largeFiles.sort((a, b) => b.size - a.size);
    largeFiles.forEach(f => {
      const sizeMB = (f.size / 1024).toFixed(1);
      console.log(`   ${f.path.padEnd(60)} ${sizeMB}MB`);
    });
  } else {
    console.log('\n✅ All images are now <300KB!');
  }
  
  console.log('\n✨ Done!\n');
}

main().catch(console.error);
