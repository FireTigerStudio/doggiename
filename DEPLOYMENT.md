# Deployment Guide - Dog Name Generator

This guide will help you deploy your Dog Name Generator to Cloudflare Pages.

## Prerequisites

- GitHub account
- Cloudflare account (free tier works)
- Git installed on your machine

## Method 1: Deploy via GitHub (Recommended)

### Step 1: Initialize Git Repository

```bash
cd /Users/tiger/Documents/Projects/DogNameGenerator
git init
git add .
git commit -m "Initial commit: Dog Name Generator MVP"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `dog-name-generator`)
3. Don't initialize with README (we already have one)

### Step 3: Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dog-name-generator.git
git push -u origin main
```

### Step 4: Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **Pages**
3. Click **Create a project**
4. Click **Connect to Git**
5. Authorize Cloudflare to access your GitHub
6. Select your `dog-name-generator` repository

### Step 5: Configure Build Settings

In the Cloudflare Pages setup:

- **Project name**: `dog-name-generator` (or your preferred name)
- **Production branch**: `main`
- **Framework preset**: `Next.js`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave empty)
- **Environment variables**: None needed

### Step 6: Deploy

1. Click **Save and Deploy**
2. Wait 2-5 minutes for the build to complete
3. Your site will be live at: `https://dog-name-generator.pages.dev`

### Step 7: Custom Domain (Optional)

1. In Cloudflare Pages, go to your project
2. Click **Custom domains**
3. Add your domain (e.g., `dognames.com`)
4. Follow DNS configuration instructions

## Method 2: Deploy via Wrangler CLI

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

### Step 3: Build the Project

```bash
npm run build
```

### Step 4: Deploy

```bash
wrangler pages deploy out --project-name=dog-name-generator
```

## Continuous Deployment

Once connected to GitHub, Cloudflare Pages will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Show build logs and deployment status

## Updating Your Site

To update your deployed site:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

Cloudflare will automatically rebuild and deploy.

## Build Verification

Before deploying, always verify the build locally:

```bash
npm run build
```

Check for:
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ✅ All pages generated successfully
- ✅ Output directory created (`out/`)

## Troubleshooting

### Build Fails

**Issue**: Build fails with module errors
**Solution**: Delete `node_modules` and `.next`, then reinstall:
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Pages Not Generating

**Issue**: Dynamic pages not generating
**Solution**: Check `generateStaticParams()` in page files

### Images Not Loading

**Issue**: Images return 404
**Solution**: Ensure `images.unoptimized: true` in `next.config.js`

### Environment Variables

If you need environment variables:
1. Go to Cloudflare Pages → Settings → Environment variables
2. Add variables for Production and Preview
3. Rebuild the project

## Performance Tips

Your site is already optimized with:
- ✅ Static Site Generation (SSG)
- ✅ Optimized bundle size
- ✅ Cloudflare CDN
- ✅ Automatic caching

Expected performance:
- **Lighthouse Score**: 95-100
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s

## Monitoring

Monitor your site:
1. **Cloudflare Analytics**: Built-in analytics in dashboard
2. **Google Search Console**: Submit sitemap for SEO
3. **PageSpeed Insights**: Test performance

## Cost

Cloudflare Pages Free Tier includes:
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ 500 builds per month
- ✅ 1 build at a time
- ✅ Free SSL certificate
- ✅ DDoS protection

Perfect for this project! 🎉

## Next Steps After Deployment

1. **Submit Sitemap**: Add `https://your-domain.com/sitemap.xml` to Google Search Console
2. **Test All Pages**: Verify all breed and style pages work
3. **Mobile Testing**: Test on various devices
4. **Share**: Share your site with dog lovers!

## Support

For issues:
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages
- Next.js Docs: https://nextjs.org/docs
- Project Issues: Open an issue on GitHub

---

Happy Deploying! 🚀🐕
