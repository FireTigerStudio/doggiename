# Quick Start Guide

Get your Dog Name Generator running in 5 minutes!

## 🚀 Quick Setup

```bash
# 1. Navigate to project
cd /Users/tiger/Documents/Projects/DogNameGenerator

# 2. Install dependencies (if not already done)
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit: http://localhost:3000
```

## 📋 Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server (after build)

# Code Quality
npm run lint         # Run ESLint
```

## 🎯 Testing the Features

### 1. Main Generator
- Go to homepage
- Select filters (Gender, Breed, Style)
- Click "Generate Names"
- View 20 random matching names

### 2. Favorites
- Click heart icon on any name card
- Favorites saved to localStorage
- Persists across sessions

### 3. Copy Names
- Click "Copy Name" button
- Name copied to clipboard
- Share with friends!

### 4. Breed Pages
Visit any breed page:
- `/golden-retriever-names`
- `/labrador-names`
- `/german-shepherd-names`
- `/bulldog-names`
- `/beagle-names`
- `/poodle-names`
- `/husky-names`
- `/corgi-names`
- `/rottweiler-names`
- `/chihuahua-names`

### 5. Style Pages
Visit any style page:
- `/cute-dog-names`
- `/funny-dog-names`
- `/unique-dog-names`
- `/tough-dog-names`
- `/elegant-dog-names`
- `/japanese-dog-names`

## 🛠️ Quick Customization

### Add More Names

Edit `lib/dogNames.json`:

```json
{
  "name": "Buddy",
  "gender": ["male"],
  "breeds": ["golden-retriever", "labrador"],
  "styles": ["cute", "classic"],
  "meaning": "Friend",
  "origin": "English"
}
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#f97316',  // Change this!
  }
}
```

### Update Site Title

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Custom Title',
  description: 'Your custom description',
};
```

## 📱 Mobile Testing

```bash
# Find your local IP
ipconfig getifaddr en0  # macOS
# or
hostname -I  # Linux

# Access from phone
# http://YOUR_IP:3000
```

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clean and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

## 📊 Project Stats

- **Total Names**: 100+
- **Breeds Covered**: 10
- **Style Categories**: 6
- **Static Pages**: 17
- **Components**: 5
- **Bundle Size**: ~137KB (First Load)

## 🎨 Features Included

✅ Interactive name generator  
✅ Filter by gender, breed, style  
✅ Favorites system (localStorage)  
✅ Copy to clipboard  
✅ 10 breed-specific pages  
✅ 6 style-specific pages  
✅ SEO optimized  
✅ Mobile responsive  
✅ Smooth animations  
✅ Fast loading (SSG)  

## 📚 Learn More

- [Full README](./README.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

## 🎉 You're Ready!

Your Dog Name Generator is now running. Start customizing and deploying!

Need help? Check the README or open an issue.

Happy coding! 🐕✨
