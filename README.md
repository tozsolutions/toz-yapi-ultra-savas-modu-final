# 🏗️ Toz Yapı Teknolojileri - Ultra Savaş Modu

[![License: UNLICENSED](https://img.shields.io/badge/license-UNLICENSED-red.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-purple.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)

> **Toz Yapı Teknolojileri** için geliştirilmiş modern, SEO optimize, yüksek performanslı kurumsal web sitesi.

🌐 **Canlı Demo:** [https://www.tozyapi.com.tr](https://www.tozyapi.com.tr)

---

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknolojiler](#-teknolojiler)
- [Kurulum](#-kurulum)
- [Geliştirme](#-geliştirme)
- [Build & Deploy](#-build--deploy)
- [Proje Yapısı](#-proje-yapısı)
- [SEO & Performans](#-seo--performans)
- [Test](#-test)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)
- [İletişim](#-iletişim)

---

## ✨ Özellikler

### 🎯 Genel
- ✅ **Single Page Application (SPA)** - React Router ile seamless navigation
- ✅ **SEO Optimize** - Meta tags, Schema.org JSON-LD, Open Graph, Twitter Cards
- ✅ **Responsive Design** - Mobile-first yaklaşım, tüm cihazlarda mükemmel görünüm
- ✅ **TypeScript** - Tip güvenliği ile daha güvenli kod
- ✅ **Modern UI/UX** - Shadcn/ui + Radix UI componentleri
- ✅ **Dark Mode Support** - Gece/gündüz teması desteği

### 🛍️ E-Ticaret
- ✅ Ürün kataloğu ve detay sayfaları
- ✅ Akıllı ürün filtreleme
- ✅ Sepet yönetimi
- ✅ Teklif isteme sistemi

### 🤖 AI Özellikleri
- ✅ **Luna AI Chatbot** - 7/24 müşteri desteği
- ✅ Akıllı ürün önerileri

### 📱 Bölümler
- Ana Sayfa (Hero, About, Products, References, Store, Blog, FAQ, Partners, Contact)
- Ürün Detay Sayfaları
- Blog Detay Sayfaları
- 404 Sayfası

---

## 🛠️ Teknolojiler

### Core
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| **React** | 18.3.1 | UI Framework |
| **TypeScript** | 5.8.3 | Tip güvenliği |
| **Vite** | 5.4.19 | Build tool & dev server |
| **React Router** | 6.30.1 | Routing |

### Styling
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| **Tailwind CSS** | 3.4.17 | Utility-first CSS |
| **Shadcn/ui** | Latest | Component library |
| **Radix UI** | Latest | Headless components |
| **Framer Motion** | 12.38.0 | Animasyonlar |

### State & Data
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| **TanStack Query** | 5.83.0 | Server state management |
| **React Hook Form** | 7.61.1 | Form yönetimi |
| **Zod** | 3.25.76 | Schema validation |

### Testing
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| **Vitest** | 3.2.4 | Unit testing |
| **Playwright** | 1.57.0 | E2E testing |
| **Testing Library** | 16.0.0 | Component testing |

### Deployment
- **Vercel** - Otomatik deploy, CI/CD
- **Cloudflare CDN** - Görsel optimizasyonu

---

## 📦 Kurulum

### Gereksinimler
- Node.js 18+ ([İndir](https://nodejs.org/))
- npm veya bun package manager

### Adımlar

1. **Repoyu klonlayın:**
```bash
git clone https://github.com/tozsolutions/toz-yapi-ultra-savas-modu-final.git
cd toz-yapi-ultra-savas-modu-final
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
# veya
bun install
```

3. **Çevre değişkenlerini ayarlayın:**
```bash
# .env.example dosyasını .env olarak kopyalayın
cp .env.example .env

# .env dosyasını düzenleyin ve gerekli API anahtarlarını ekleyin
```

4. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

5. **Tarayıcıda açın:**
```
http://localhost:8080
```

---

## 💻 Geliştirme

### Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlat (port: 8080) |
| `npm run build` | Production build oluştur |
| `npm run build:dev` | Development mode build |
| `npm run preview` | Production build'i preview et |
| `npm run lint` | ESLint ile kod analizi |
| `npm run lint:fix` | ESLint hatalarını otomatik düzelt |
| `npm run test` | Vitest ile testleri çalıştır |
| `npm run test:watch` | Testleri watch mode'da çalıştır |
| `npm run test:coverage` | Test coverage raporu oluştur |
| `npm run typecheck` | TypeScript tip kontrolü |

### Kod Standartları

- **ESLint** ile kod kalitesi sağlanır
- **TypeScript** strict mode aktif
- **Prettier** ile formatlama (opsiyonel)
- **Husky** ile git hook'ları (opsiyonel)

---

## 🚀 Build & Deploy

### Production Build

```bash
npm run build
```

Build çıktısı `dist/` klasöründe oluşur.

### Vercel ile Deploy

Proje Vercel için optimize edilmiştir:

1. **Vercel'e bağlanın:**
```bash
npm i -g vercel
vercel login
```

2. **Deploy edin:**
```bash
vercel
```

3. **Production deploy:**
```bash
vercel --prod
```

### Manuel Deploy

`dist/` klasörünü herhangi bir statik hosting'e yükleyebilirsiniz:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

---

## 📁 Proje Yapısı

```
toz-yapi-ultra-savas-modu/
├── .github/                    # GitHub Actions workflows
│   └── workflows/
│       ├── ci.yml             # Continuous Integration
│       └── deploy.yml         # Deployment workflow
├── public/                     # Statik assetler
│   ├── images/                # Görseller
│   │   ├── hero/              # Hero görselleri
│   │   ├── logos/             # Logo ve partnerler
│   │   ├── products/          # Ürün görselleri
│   │   ├── references/        # Referans projeler
│   │   └── shop/              # E-ticaret ürünleri
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/                        # Kaynak kod
│   ├── components/            # React componentleri
│   │   ├── ui/                # Shadcn/ui base components
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ReferencesSection.tsx
│   │   ├── LunaBot.tsx        # AI Chatbot
│   │   └── Footer.tsx
│   ├── data/                  # Statik data dosyaları
│   │   ├── products.ts
│   │   └── blogPosts.ts
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility fonksiyonlar
│   ├── pages/                 # Sayfa componentleri
│   │   ├── Index.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── BlogDetail.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx                # Ana app component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── .env.example               # Çevre değişkenleri örneği
├── .eslintrc.cjs              # ESLint config
├── .gitignore                 # Git ignore
├── components.json            # Shadcn/ui config
├── index.html                 # HTML entry point
├── package.json               # Dependencies
├── playwright.config.ts       # E2E test config
├── tailwind.config.ts         # Tailwind config
├── tsconfig.json              # TypeScript config
├── vercel.json                # Vercel deployment config
├── vite.config.ts             # Vite config
└── vitest.config.ts           # Unit test config
```

---

## 🔍 SEO & Performans

### SEO Özellikleri

- ✅ **Meta Tags**: Title, description, keywords, author
- ✅ **Open Graph**: Facebook, LinkedIn için optimize
- ✅ **Twitter Cards**: Twitter için optimize
- ✅ **Schema.org JSON-LD**:
  - Organization
  - LocalBusiness
  - Product
  - FAQPage
- ✅ **Canonical URLs**
- ✅ **Robots.txt**
- ✅ **Sitemap.xml**

### Performans Optimizasyonları

- ✅ **Code Splitting** - Otomatik chunk bölme
- ✅ **Lazy Loading** - Görseller ve componentler
- ✅ **Tree Shaking** - Kullanılmayan kod silme
- ✅ **Minification** - CSS/JS minify
- ✅ **Image Optimization** - WebP formatı
- ✅ **Preconnect/Prefetch** - DNS prefetching
- ✅ **Cache Strategy** - Browser & CDN caching

### Lighthouse Skorları (Hedef)

| Metrik | Skor |
|--------|------|
| Performance | 95+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

---

## 🧪 Test

### Unit Testler

```bash
npm run test
```

### E2E Testler

```bash
# Testleri çalıştır
npx playwright test

# UI mode ile çalıştır
npx playwright test --ui

# Headless mode
npx playwright test --headed
```

### Test Coverage

```bash
npm run test:coverage
```

Coverage raporu `coverage/` klasöründe oluşur.

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

Detaylı bilgi için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakın.

---

## 📄 Lisans

Bu proje **UNLICENSED** lisansı altında lisanslanmıştır. Tüm hakları saklıdır.

İzinsiz kopyalanması, dağıtılması veya ticari amaçla kullanılması yasaktır.

---

## 📞 İletişim

**Toz Yapı Teknolojileri**

- 🌐 **Web:** [https://www.tozyapi.com.tr](https://www.tozyapi.com.tr)
- 📧 **Email:** merhaba@tozyapi.com.tr
- 📱 **Telefon:** +90 536 773 14 04
- 📍 **Adres:** Timko İş Merkezi, Çamlıca Mah. Anadolu Bulvarı, Ğ Blok, İdil Sok. V8, Kat 1, Yenimahalle/Ankara
- 📷 **Instagram:** [@toz.solutions](https://www.instagram.com/toz.solutions)

---

## 🙏 Teşekkürler

- [Lovable](https://lovable.dev) - Hızlı prototipleme
- [Vercel](https://vercel.com) - Hosting & CI/CD
- [React](https://reactjs.org) - UI Framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Shadcn/ui](https://ui.shadcn.com) - Component Library

---

**Made with ❤️ by Toz Yapı Teknolojileri Team**
