import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const stats = [];

async function optimizeImage(inputPath, options, description) {
  const inputStats = fs.statSync(inputPath);
  const inputSize = (inputStats.size / 1024).toFixed(2);
  
  try {
    let pipeline = sharp(inputPath);
    const metadata = await pipeline.metadata();
    
    if (options.resize) {
      pipeline = pipeline.resize(options.resize.width, options.resize.height, options.resize.options);
    }
    
    if (options.webp) {
      pipeline = pipeline.webp(options.webp);
    } else if (options.jpeg) {
      pipeline = pipeline.jpeg(options.jpeg);
    } else if (options.png) {
      pipeline = pipeline.png(options.png);
    }
    
    // Use buffer to avoid Windows file locking
    const buffer = await pipeline.toBuffer();
    fs.writeFileSync(inputPath, buffer);
    
    const outputSize = (buffer.length / 1024).toFixed(2);
    const reduction = (((inputStats.size - buffer.length) / inputStats.size) * 100).toFixed(1);
    
    stats.push({
      file: path.relative(PUBLIC, inputPath),
      description,
      before: inputSize,
      after: outputSize,
      reduction: reduction + '%',
      originalWidth: metadata.width,
      newWidth: options.resize ? options.resize.width : metadata.width
    });
    
    console.log(`✓ ${description}: ${inputSize}KB → ${outputSize}KB (${reduction}% reduction)`);
  } catch (err) {
    console.error(`✗ Failed to optimize ${description}: ${err.message}`);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  // 1. HERO IMAGE - Main hero for LCP
  console.log('=== HERO IMAGES ===');
  await optimizeImage(
    path.join(PUBLIC, 'images/hero-anasayfa-optimized.webp'),
    { resize: { width: 1600, height: undefined, options: { fit: 'inside', withoutEnlargement: true } }, webp: { quality: 50 } },
    'hero-anasayfa-optimized.webp (main LCP)'
  );
  
  await optimizeImage(
    path.join(PUBLIC, 'images/hero-anasayfa.webp'),
    { resize: { width: 1600, height: undefined, options: { fit: 'inside', withoutEnlargement: true } }, webp: { quality: 50 } },
    'hero-anasayfa.webp (fallback)'
  );

  // 2. LOGO IMAGES
  console.log('\n=== LOGOS ===');
  await optimizeImage(
    path.join(PUBLIC, 'images/logos/tozyapi-logo.webp'),
    { resize: { width: 240, height: undefined, options: { fit: 'inside', withoutEnlargement: true } }, webp: { quality: 75 } },
    'tozyapi-logo.webp (header/footer)'
  );
  
  await optimizeImage(
    path.join(PUBLIC, 'images/logos/tozyapi_logo.webp'),
    { resize: { width: 240, height: undefined, options: { fit: 'inside', withoutEnlargement: true } }, webp: { quality: 75 } },
    'tozyapi_logo.webp (alt)'
  );

  // 3. LUNA AVATAR
  console.log('\n=== LUNA AVATAR ===');
  await optimizeImage(
    path.join(PUBLIC, 'images/logos/luna-avatar.webp'),
    { resize: { width: 120, height: 120, options: { fit: 'cover' } }, webp: { quality: 70 } },
    'luna-avatar.webp'
  );
  
  await optimizeImage(
    path.join(PUBLIC, 'images/logos/Luna.webp'),
    { resize: { width: 160, height: 160, options: { fit: 'cover' } }, webp: { quality: 70 } },
    'Luna.webp'
  );

  await optimizeImage(
    path.join(PUBLIC, 'images/logos/LunaAI.webp'),
    { resize: { width: 160, height: 160, options: { fit: 'cover' } }, webp: { quality: 70 } },
    'LunaAI.webp'
  );

  // 4. PARTNER LOGOS (displayed at 120x90, optimize accordingly)
  console.log('\n=== PARTNER LOGOS ===');
  const partnerLogos = [
    'alumil.webp', 'nice.webp', 'somfy.webp', 'powerate.webp', 'akseki.webp',
    'albert.webp', 'dorma.webp', 'desi_panjur.webp', 'str.webp', 'record_v3.webp',
    'ferrini.webp', 'reynaards.webp', 'cuppon_v3.webp', 'alusel.webp', 'gtr_v3.webp',
    'gungor.webp', 'kenan_metal.webp', 'dayson.webp', 'designer.webp', 'mosel_v3.webp',
    'becker_v3.webp', 'schueco_v3.webp', 'kontal_v3.webp', 'kommerling_v3.webp',
    'assaabloy_v3.webp', 'asas_v3.webp'
  ];
  
  for (const logo of partnerLogos) {
    const filePath = path.join(PUBLIC, `images/logos/${logo}`);
    if (fs.existsSync(filePath)) {
      await optimizeImage(
        filePath,
        { resize: { width: 240, height: 180, options: { fit: 'inside', withoutEnlargement: true } }, webp: { quality: 70 } },
        `${logo} (partner logo)`
      );
    }
  }
  
  // Additional logos
  const additionalLogos = [
    'designer-logo.webp', 'toz-logo.webp', 'TozEcoSolutions.webp'
  ];
  
  for (const logo of additionalLogos) {
    const filePath = path.join(PUBLIC, `images/logos/${logo}`);
    if (fs.existsSync(filePath)) {
      await optimizeImage(
        filePath,
        { resize: { width: 240, height: undefined, options: { fit: 'inside', withoutEnlargement: true } }, webp: { quality: 70 } },
        `${logo} (logo)`
      );
    }
  }

  // 5. PRODUCT IMAGES (displayed at max 600px width)
  console.log('\n=== PRODUCT IMAGES ===');
  const productImages = [
    'panjur.webp', 'seffaf_kepenk.webp', 'bio_climatic.webp', 'otomatik_kapi.webp',
    'giyotin.webp', 'akilli_cam.webp', 'aluminyum_sistemler.webp', 'bahce_giris_otomasyon.webp',
    'havuz_kapama.webp', 'wintergarden.webp', 'urunlerimiz_sundurma.webp', 'bariyer_turnike.webp',
    'hero_sineklik.webp', 'brisoley.webp', 'zip_perde.webp', 'windbreaker.webp',
    'monoblok_panjur.webp', 'endustriyelkapi.webp'
  ];
  
  for (const img of productImages) {
    const filePath = path.join(PUBLIC, `images/products/${img}`);
    if (fs.existsSync(filePath)) {
      await optimizeImage(
        filePath,
        { resize: { width: 600, height: undefined, options: { fit: 'inside', withoutEnlargement: true } }, webp: { quality: 55 } },
        `${img} (product)`
      );
    }
  }

  // 6. REFERENCE IMAGES (displayed at max 600px width)
  console.log('\n=== REFERENCE IMAGES ===');
  const referenceImages = [
    '400_yatakli_sincan_egitim_arastirma_hahastanesi.webp', 'bayburt_devlet_hastanesi.webp',
    'bio_climatic.webp', 'brisoley.webp', 'bulent_ecevit_universitesi.webp', 'cajun_corner.webp',
    'dedeman_hotels_kastamall_avm.webp', 'erzincan_sehir_stadyumu.webp', 'fiyos_liman.webp',
    'hatay_hassa_devlet_hastanesi.webp', 'hirvatistan_residance.webp', 'kocatepe_1917.webp',
    'montenegro.webp', 'mugla_afad.webp', 'swissotel_valorlu_pergola.webp', 'tse_ankara_merkez_kampusu.webp'
  ];
  
  for (const img of referenceImages) {
    const filePath = path.join(PUBLIC, `images/references/${img}`);
    if (fs.existsSync(filePath)) {
      await optimizeImage(
        filePath,
        { resize: { width: 600, height: undefined, options: { fit: 'inside', withoutEnlargement: true } }, webp: { quality: 55 } },
        `${img} (reference)`
      );
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(80));
  console.table(stats.map(s => ({
    File: s.file.substring(0, 50),
    Description: s.description.substring(0, 30),
    'Before (KB)': s.before,
    'After (KB)': s.after,
    'Reduction': s.reduction,
    'Orig Width': s.originalWidth,
    'New Width': s.newWidth
  })));
  
  const totalBefore = stats.reduce((sum, s) => sum + parseFloat(s.before), 0);
  const totalAfter = stats.reduce((sum, s) => sum + parseFloat(s.after), 0);
  const totalReduction = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
  
  console.log(`\n📦 Total: ${totalBefore.toFixed(2)}KB → ${totalAfter.toFixed(2)}KB (${totalReduction}% reduction)`);
  console.log(`📁 Images optimized: ${stats.length}`);
}

main().catch(console.error);
