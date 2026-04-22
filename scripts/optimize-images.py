from PIL import Image
import os
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
PUBLIC = os.path.join(ROOT, 'public')

stats = []

def optimize_image(input_path, max_width, quality, description, max_height=None):
    """Optimize a single image file."""
    try:
        input_size = os.path.getsize(input_path) / 1024
        
        with Image.open(input_path) as img:
            orig_width, orig_height = img.size
            
            # Calculate new dimensions
            if max_height:
                # Fixed resize
                new_width = min(max_width, orig_width)
                new_height = min(max_height, orig_height)
            else:
                # Scale proportionally
                ratio = min(max_width / orig_width, 1.0)
                new_width = int(orig_width * ratio)
                new_height = int(orig_height * ratio)
            
            # Only resize if image is larger than target
            if orig_width > max_width or (max_height and orig_height > max_height):
                img = img.resize((new_width, new_height), Image.LANCZOS)
            
            # Convert to RGB if necessary (for WebP compatibility)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Keep alpha channel
                img = img.convert('RGBA')
            
            # Save as WebP
            output_path = input_path + '.new'
            img.save(output_path, 'WEBP', quality=quality, optimize=True)
            
            # Replace original
            os.replace(output_path, input_path)
            
            new_size = os.path.getsize(input_path) / 1024
            reduction = ((input_size - new_size) / input_size * 100) if input_size > 0 else 0
            
            stats.append({
                'file': os.path.relpath(input_path, PUBLIC),
                'description': description,
                'before': f"{input_size:.2f}",
                'after': f"{new_size:.2f}",
                'reduction': f"{reduction:.1f}%",
                'orig_width': orig_width,
                'new_width': new_width
            })
            
            print(f"✓ {description}: {input_size:.2f}KB → {new_size:.2f}KB ({reduction:.1f}% reduction)")
            
    except Exception as e:
        print(f"✗ Failed to optimize {description}: {e}")
        # Clean up .new file if it exists
        if os.path.exists(input_path + '.new'):
            try:
                os.remove(input_path + '.new')
            except:
                pass

def main():
    print('🚀 Starting image optimization with Python/Pillow...\n')
    
    # 1. HERO IMAGES
    print('=== HERO IMAGES ===')
    hero_files = [
        ('images/hero-anasayfa-optimized.webp', 'hero-anasayfa-optimized.webp (main LCP)'),
        ('images/hero-anasayfa.webp', 'hero-anasayfa.webp (fallback)'),
    ]
    
    for rel_path, desc in hero_files:
        full_path = os.path.join(PUBLIC, rel_path)
        if os.path.exists(full_path):
            optimize_image(full_path, 1600, 50, desc)
    
    # 2. LOGOS
    print('\n=== LOGOS ===')
    logo_files = [
        ('images/logos/tozyapi-logo.webp', 'tozyapi-logo.webp (header/footer)'),
        ('images/logos/tozyapi_logo.webp', 'tozyapi_logo.webp (alt)'),
        ('images/logos/toz-logo.webp', 'toz-logo.webp'),
        ('images/logos/TozEcoSolutions.webp', 'TozEcoSolutions.webp'),
        ('images/logos/designer-logo.webp', 'designer-logo.webp'),
    ]
    
    for rel_path, desc in logo_files:
        full_path = os.path.join(PUBLIC, rel_path)
        if os.path.exists(full_path):
            optimize_image(full_path, 240, 75, desc)
    
    # 3. LUNA AVATAR
    print('\n=== LUNA AVATAR ===')
    luna_files = [
        ('images/logos/luna-avatar.webp', 'luna-avatar.webp'),
        ('images/logos/Luna.webp', 'Luna.webp'),
        ('images/logos/LunaAI.webp', 'LunaAI.webp'),
    ]
    
    for rel_path, desc in luna_files:
        full_path = os.path.join(PUBLIC, rel_path)
        if os.path.exists(full_path):
            optimize_image(full_path, 160, 70, desc)
    
    # 4. PARTNER LOGOS
    print('\n=== PARTNER LOGOS ===')
    partner_logos = [
        'alumil.webp', 'nice.webp', 'somfy.webp', 'powerate.webp', 'akseki.webp',
        'albert.webp', 'dorma.webp', 'desi_panjur.webp', 'str.webp', 'record_v3.webp',
        'ferrini.webp', 'reynaards.webp', 'cuppon_v3.webp', 'alusel.webp', 'gtr_v3.webp',
        'gungor.webp', 'kenan_metal.webp', 'dayson.webp', 'designer.webp', 'mosel_v3.webp',
        'becker_v3.webp', 'schueco_v3.webp', 'kontal_v3.webp', 'kommerling_v3.webp',
        'assaabloy_v3.webp', 'asas_v3.webp'
    ]
    
    for logo in partner_logos:
        full_path = os.path.join(PUBLIC, 'images/logos', logo)
        if os.path.exists(full_path):
            optimize_image(full_path, 240, 70, f'{logo} (partner logo)')
    
    # 5. PRODUCT IMAGES
    print('\n=== PRODUCT IMAGES ===')
    product_images = [
        'panjur.webp', 'seffaf_kepenk.webp', 'bio_climatic.webp', 'otomatik_kapi.webp',
        'giyotin.webp', 'akilli_cam.webp', 'aluminyum_sistemler.webp', 'bahce_giris_otomasyon.webp',
        'havuz_kapama.webp', 'wintergarden.webp', 'urunlerimiz_sundurma.webp', 'bariyer_turnike.webp',
        'hero_sineklik.webp', 'brisoley.webp', 'zip_perde.webp', 'windbreaker.webp',
        'monoblok_panjur.webp', 'endustriyelkapi.webp'
    ]
    
    for img in product_images:
        full_path = os.path.join(PUBLIC, 'images/products', img)
        if os.path.exists(full_path):
            optimize_image(full_path, 600, 55, f'{img} (product)')
    
    # 6. REFERENCE IMAGES
    print('\n=== REFERENCE IMAGES ===')
    reference_images = [
        '400_yatakli_sincan_egitim_arastirma_hahastanesi.webp', 'bayburt_devlet_hastanesi.webp',
        'bio_climatic.webp', 'brisoley.webp', 'bulent_ecevit_universitesi.webp', 'cajun_corner.webp',
        'dedeman_hotels_kastamall_avm.webp', 'erzincan_sehir_stadyumu.webp', 'fiyos_liman.webp',
        'hatay_hassa_devlet_hastanesi.webp', 'hirvatistan_residance.webp', 'kocatepe_1917.webp',
        'montenegro.webp', 'mugla_afad.webp', 'swissotel_valorlu_pergola.webp', 'tse_ankara_merkez_kampusu.webp'
    ]
    
    for img in reference_images:
        full_path = os.path.join(PUBLIC, 'images/references', img)
        if os.path.exists(full_path):
            optimize_image(full_path, 600, 55, f'{img} (reference)')
    
    # Print summary
    print('\n' + '='*80)
    print('📊 OPTIMIZATION SUMMARY')
    print('='*80)
    
    if stats:
        # Print table header
        print(f"{'File':<50} {'Before':>8} {'After':>8} {'Reduction':>10} {'Orig':>6} {'New':>6}")
        print('-'*90)
        
        for s in stats:
            print(f"{s['file']:<50} {s['before']:>7}KB {s['after']:>7}KB {s['reduction']:>9} {s['orig_width']:>5}px {s['new_width']:>5}px")
        
        total_before = sum(float(s['before']) for s in stats)
        total_after = sum(float(s['after']) for s in stats)
        total_reduction = ((total_before - total_after) / total_before * 100) if total_before > 0 else 0
        
        print('\n' + '='*90)
        print(f"📦 Total: {total_before:.2f}KB → {total_after:.2f}KB ({total_reduction:.1f}% reduction)")
        print(f"📁 Images optimized: {len(stats)}")
    else:
        print('No images were optimized.')

if __name__ == '__main__':
    main()
