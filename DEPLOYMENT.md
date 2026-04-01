# 🚀 Deployment Guide - Toz Yapı Ultra Savaş Modu

This guide covers all deployment options for the Toz Yapı website.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
3. [Docker Deployment](#docker-deployment)
4. [Manual Deployment](#manual-deployment)
5. [GitHub Pages](#github-pages)
6. [Netlify](#netlify)
7. [AWS S3 + CloudFront](#aws-s3--cloudfront)
8. [Post-Deployment Checklist](#post-deployment-checklist)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ Node.js 18+ installed
- ✅ All dependencies installed (`npm install`)
- ✅ Production build tested locally (`npm run build`)
- ✅ Environment variables configured
- ✅ Git repository initialized

---

## Vercel Deployment (Recommended)

Vercel is the recommended platform for this project.

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Configure build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click "Deploy"

### Option 3: GitHub Actions (Automated)

The project includes a GitHub Actions workflow for automated deployment:

1. Add Vercel secrets to GitHub:
   - `VERCEL_TOKEN` - Your Vercel token
   - `VERCEL_ORG_ID` - Your organization ID
   - `VERCEL_PROJECT_ID` - Your project ID

2. Push to `main` branch to trigger automatic deployment

### Environment Variables on Vercel

Add these in Vercel dashboard → Settings → Environment Variables:

```
VITE_APP_VERSION=1.0.0
VITE_APP_NAME="Toz Yapı Teknolojileri"
VITE_APP_URL="https://www.tozyapi.com.tr"
```

---

## Docker Deployment

### Build Docker Image

```bash
# Build production image
docker build -t toz-yapi:production --target production .

# Build development image
docker build -t toz-yapi:development --target development .
```

### Run Docker Container

```bash
# Production
docker run -p 80:80 toz-yapi:production

# Development
docker run -p 8080:8080 toz-yapi:development
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  toz-yapi:
    build:
      context: .
      target: production
    ports:
      - "80:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 3s
      retries: 3
```

Run with Docker Compose:

```bash
docker-compose up -d
```

---

## Manual Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with all static files.

### Upload to Server

```bash
# Using SCP
scp -r dist/* user@your-server:/var/www/tozyapi

# Using rsync
rsync -avz dist/ user@your-server:/var/www/tozyapi
```

### Configure Web Server

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name www.tozyapi.com.tr tozyapi.com.tr;
    root /var/www/tozyapi;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Apache Configuration

```apache
<VirtualHost *:80>
    ServerName www.tozyapi.com.tr
    DocumentRoot /var/www/tozyapi

    <Directory /var/www/tozyapi>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

Create `.htaccess` in `dist/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## GitHub Pages

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

### GitHub Actions for GitHub Pages

Create `.github/workflows/github-pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - run: npm ci
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Netlify

### Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### netlify.toml Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

---

## AWS S3 + CloudFront

### Deploy to S3

```bash
# Install AWS CLI
# Configure: aws configure

# Create S3 bucket
aws s3 mb s3://tozyapi-website

# Upload files
aws s3 sync dist/ s3://tozyapi-website --delete

# Make bucket public (configure bucket policy first)
```

### CloudFront Distribution

1. Create CloudFront distribution
2. Set origin to S3 bucket
3. Configure caching behaviors
4. Add custom SSL certificate
5. Point domain to CloudFront distribution

---

## Post-Deployment Checklist

After deployment, verify:

### Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Product pages load
- [ ] Blog pages load
- [ ] Contact form works
- [ ] Luna AI chatbot works
- [ ] Mobile responsive design works

### Performance
- [ ] Lighthouse score > 90
- [ ] Images load quickly
- [ ] No console errors
- [ ] CSS/JS files are cached

### SEO
- [ ] Meta tags are present
- [ ] Open Graph tags work
- [ ] Sitemap is accessible
- [ ] Robots.txt is configured
- [ ] Schema.org JSON-LD is valid

### Security
- [ ] HTTPS is enabled
- [ ] Security headers are present
- [ ] No sensitive data exposed

### Analytics
- [ ] Google Analytics is tracking
- [ ] Search Console is verified
- [ ] Error tracking is configured

---

## Rollback Procedure

### Vercel
```bash
# List deployments
vercel ls

# Rollback to previous
vercel rollback [deployment-url]
```

### Manual
```bash
# Keep backup of previous version
cp -r dist dist-backup-$(date +%Y%m%d)

# Restore if needed
rm -rf dist
cp -r dist-backup-* dist
```

---

## Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

### Performance Monitoring
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://www.webpagetest.org)
- [GTmetrix](https://gtmetrix.com)

### Error Tracking
- [Sentry](https://sentry.io)
- [LogRocket](https://logrocket.com)
- [Bugsnag](https://www.bugsnag.com)

---

## Support

For deployment issues, contact:
- Email: merhaba@tozyapi.com.tr
- Phone: +90 536 773 14 04

---

**Last Updated:** April 2026
**Version:** 1.0.0
