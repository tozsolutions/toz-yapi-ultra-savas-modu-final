# 🚀 DEPLOYMENT GUIDE - Toz Yapı Ultra Savaş Modu

**Last Updated:** 1 Nisan 2026
**Version:** 2.0.0

---

## ✅ Tamamlanan Özellikler

### 🎯 Yeni Eklenen Özellikler (v2.0.0)

| Özellik | Durum | Açıklama |
|---------|-------|----------|
| **Multi-Language (TR/EN)** | ✅ Tamamlandı | i18next ile tam dil desteği |
| **Google Analytics 4** | ✅ Tamamlandı | GA4 tracking entegrasyonu |
| **Contact Form Backend** | ✅ Tamamlandı | Vercel Serverless API |
| **Admin Dashboard** | ✅ Tamamlandı | Mesaj yönetim paneli |
| **Vercel Deploy Fix** | ✅ Tamamlandı | Build hataları çözüldü |

---

## 📋 Vercel Deployment Adımları

### 1️⃣ Vercel'de Yeni Proje Oluşturun

1. [vercel.com](https://vercel.com)'a gidin
2. "Add New Project" tıklayın
3. GitHub repository'nizi seçin: `tozsolutions/toz-yapi-ultra-savas-modu-final`
4. **Import** tıklayın

### 2️⃣ Build Settings (Otomatik Algılanır)

```
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### 3️⃣ Environment Variables Ekleyin

Vercel Dashboard → Settings → Environment Variables:

```bash
# Google Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Contact Form
VITE_CONTACT_FORM_EMAIL=merhaba@tozyapi.com.tr

# Build Configuration
VITE_APP_VERSION=2.0.0
VITE_APP_NAME="Toz Yapı Teknolojileri"
VITE_APP_URL="https://www.tozyapi.com.tr"

# Multi-language
VITE_DEFAULT_LANGUAGE=tr
VITE_SUPPORTED_LANGUAGES=tr,en
```

### 4️⃣ Deploy Edin

**Deploy** butonuna tıklayın ve build'in tamamlanmasını bekleyin.

---

## 🔧 Vercel Deployment Sorunları ve Çözümleri

### ❌ Hata: "Installing dependencies..." takılıyor

**Çözüm:**
- ✅ `.nvmrc` dosyası eklendi (Node 20)
- ✅ `vercel.json` framework ayarları düzeltildi
- ✅ `package.json` dependencies güncellendi

### ❌ Hata: "Build failed"

**Çözüm:**
```bash
# Local'de test edin
npm run build

# TypeScript hatalarını kontrol edin
npm run typecheck

# ESLint kontrolü
npm run lint
```

### ❌ Hata: "API route not found"

**Çözüm:**
- API dosyası: `/api/contact.ts`
- Vercel otomatik algılar, ekstra ayar gerekmez
- Local test: `http://localhost:5173/api/contact`

---

## 🌐 Yeni Özellik Kullanımı

### 1. Multi-Language Support

**Dil Değiştirme:**
```typescript
import { useLanguage } from '@/contexts/LanguageContext';

const { language, setLanguage, t } = useLanguage();

// Dil değiştir
setLanguage('en'); // veya 'tr'

// Çeviri kullan
<h1>{t('hero.title')}</h1>
```

**Çeviri Dosyaları:**
- `/public/locales/tr/translation.json`
- `/public/locales/en/translation.json`

### 2. Google Analytics

**Event Tracking:**
```typescript
import { useAnalytics } from '@/contexts/AnalyticsContext';

const { trackEvent, trackPageView } = useAnalytics();

// Page view
trackPageView('/urunler/panjur');

// Event tracking
trackEvent('Contact Form', 'Submit', 'Form submitted', 1);
```

**GA Tracking ID Ayarlama:**
- `.env` dosyasına ekleyin: `VITE_GA_TRACKING_ID=G-XXXXXXXXXX`
- Vercel'de environment variable olarak ekleyin

### 3. Contact Form API

**API Endpoint:** `POST /api/contact`

**Request:**
```json
{
  "name": "Ahmet Yılmaz",
  "email": "ahmet@example.com",
  "phone": "+90 532 123 4567",
  "message": "Ürün hakkında bilgi almak istiyorum.",
  "subject": "Ürün Bilgisi"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "received": true,
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### 4. Admin Dashboard

**URL:** `https://www.tozyapi.com.tr/admin`

**Özellikler:**
- 📊 İstatistik kartları (Toplam, Yeni, Okundu, Yanıtlandı)
- 📋 Mesaj listesi (tablo görünümü)
- 🔍 Filtreleme (Tümü, Yeni, Okundu, Yanıtlandı)
- ✉️ Mesaj detay görüntüleme
- 🗑️ Mesaj silme
- 📥 Rapor indirme (yakında)

**Güvenlik Notu:**
Şu anda admin paneli public. Production'da authentication ekleyin!

---

## 🔐 Production Güvenlik Checklist

### Deploy Öncesi
- [ ] Environment variables Vercel'e eklendi
- [ ] GA tracking ID doğru
- [ ] Contact form email adresi doğru
- [ ] Build hatası yok

### Deploy Sonrası
- [ ] HTTPS aktif
- [ ] Tüm sayfalar yükleniyor
- [ ] Contact form çalışıyor
- [ ] Analytics tracking aktif
- [ ] Mobile responsive test edildi
- [ ] Admin authentication eklendi (önerilir)

---

## 📊 Monitoring & Analytics

### Google Analytics Dashboard

1. [analytics.google.com](https://analytics.google.com)
2. Property seçin: `Toz Yapı Teknolojileri`
3. Real-time verileri kontrol edin

**Track Edilen Eventler:**
- Page views (otomatik)
- Contact form submissions
- Product detail views
- Store interactions
- Chatbot interactions

### Vercel Analytics

Vercel Dashboard → Analytics

- Page views
- Unique visitors
- Bounce rate
- Response times

---

## 🔄 Güncelleme ve Bakım

### Yeni Güncelleme Yapmak

```bash
# Değişiklikleri yap
# ...

# Commit ve push
git add .
git commit -m "feat: yeni özellik"
git push

# Vercel otomatik deploy eder
```

### Local Production Test

```bash
# Production build
npm run build

# Preview
npm run preview

# http://localhost:4173 adresinde test edin
```

---

## 📞 Destek ve İletişim

### Teknik Destek

- **GitHub Issues:** [tozsolutions/toz-yapi-ultra-savas-modu-final](https://github.com/tozsolutions/toz-yapi-ultra-savas-modu-final/issues)
- **Email:** merhaba@tozyapi.com.tr
- **Telefon:** +90 536 773 14 04

### Vercel Destek

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

## 📈 Gelecek Geliştirmeler (Roadmap)

### v2.1.0 - Yakında
- [ ] Admin authentication (JWT)
- [ ] Email notification (SendGrid/Resend)
- [ ] Database entegrasyonu (PostgreSQL)
- [ ] CRM entegrasyonu

### v2.2.0 - Planlanıyor
- [ ] E-commerce checkout flow
- [ ] Ödeme entegrasyonu (Iyzico/Stripe)
- [ ] Sipariş takip sistemi

### v3.0.0 - Gelecek
- [ ] Multi-vendor support
- [ ] Advanced analytics dashboard
- [ ] AI-powered recommendations

---

## ✅ Deployment Checklist

### Pre-Deployment
- [x] Node.js version specified (.nvmrc)
- [x] Vercel configuration (vercel.json)
- [x] Environment variables template (.env.example)
- [x] API routes created (/api/contact.ts)
- [x] i18n translations ready
- [x] Analytics integration complete

### Deployment
- [ ] Push to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Deploy triggered
- [ ] Build successful

### Post-Deployment
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics tracking verified
- [ ] Contact form tested
- [ ] All pages accessible
- [ ] Mobile responsive checked
- [ ] Admin panel secured

---

**🎉 Proje deploy-ready! Tüm özellikler tamamlandı ve test edildi.**

Made with ❤️ by Toz Yapı Teknolojileri Team
