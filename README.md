# 🐕 Dog Name Generator

A modern, SEO-optimized dog name generator web application built with Next.js 14, Tailwind CSS, and Framer Motion. Find the perfect name for your puppy by filtering through 100+ curated dog names based on breed, gender, and style.

![Dog Name Generator](https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=400&fit=crop)

## ✨ Features

- **Interactive Name Generator**: Filter by gender, breed, and style to find perfect matches
- **500+ Dog Names**: Comprehensive database with meanings and origins
- **Breed-Specific Pages**: Dedicated pages for 10 popular breeds
- **Style-Specific Pages**: Browse names by cute, funny, unique, tough, elegant, and Japanese themes
- **Favorites System**: Save your favorite names (localStorage)
- **Copy to Clipboard**: Easily share names
- **Fully Responsive**: Mobile-first design
- **SEO Optimized**: Meta tags, sitemap, and semantic HTML
- **Smooth Animations**: Framer Motion for delightful interactions
- **Static Site Generation**: Fast loading times with SSG

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages
- **Data Storage**: JSON files (no database required)

## 📁 Project Structure

```
dog-name-generator/
├── app/
│   ├── [breed]-names/          # Dynamic breed pages
│   │   └── page.tsx
│   ├── [style]-dog-names/      # Dynamic style pages
│   │   └── page.tsx
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # SEO sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Site footer
│   ├── NameGenerator.tsx       # Main generator component
│   ├── NameCard.tsx            # Individual name card
│   └── FilterPanel.tsx         # Filter controls
├── lib/
│   ├── dogNames.json           # Dog names database
│   └── utils.ts                # Utility functions
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DogNameGenerator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out` directory.

## 🌐 Deployment to Cloudflare Pages

### Via GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
     - **Node version**: 20

3. **Deploy**
   - Cloudflare will automatically build and deploy
   - Your site will be live at `https://<project-name>.pages.dev`

### Via Wrangler CLI

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy out
```

## 📊 SEO Features

- **Meta Tags**: Optimized title, description, and keywords for each page
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Semantic HTML**: Proper heading hierarchy (H1, H2, H3)
- **Schema Markup**: Structured data for better search visibility
- **Mobile-First**: Responsive design for all devices
- **Fast Loading**: Static generation for optimal performance

### Target Keywords

- Primary: dog name generator, puppy names, dog names
- Breed-specific: golden retriever names, labrador names, etc.
- Style-specific: cute dog names, funny dog names, unique dog names
- Long-tail: male dog names, female dog names, dog names by breed

## 🎨 Customization

### Adding More Names

Edit `lib/dogNames.json`:

```json
{
  "name": "NewName",
  "gender": ["male", "female"],
  "breeds": ["golden-retriever", "labrador"],
  "styles": ["cute", "unique"],
  "meaning": "Name meaning",
  "origin": "Origin language"
}
```

### Adding New Breeds

1. Add breed to `lib/utils.ts` breeds array
2. Add breed description in `app/[breed]-names/page.tsx`
3. The page will be auto-generated

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { /* Your primary colors */ },
  warm: { /* Your warm colors */ }
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- None currently

## 📞 Support

For issues or questions, please open an issue on GitHub.

## 🙏 Acknowledgments

- Dog images from [Unsplash](https://unsplash.com)
- Icons and emojis from Unicode
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)

---

Made with ❤️ for dog lovers everywhere 🐕
