# Corporate AI / Infrastructure Website Framework

A clean Next.js framework inspired by the *information architecture and interaction style* of polished enterprise consulting/technology sites. It does **not** copy KPMG source code, copy, logos, images, or proprietary assets.

## Stack

- Next.js 15
- React 19
- TypeScript
- Framer Motion
- Lucide icons
- Plain CSS for easy visual customization

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Customize first

1. Replace `YOUR COMPANY` in `components/Navbar.tsx`, `components/Footer.tsx`, and metadata in `app/layout.tsx`.
2. Replace the circular `Y` placeholder with your logo. Put your asset in `public/` and use Next.js `<Image />`.
3. Edit colors in `app/globals.css` under `:root`.
4. Replace solution text in `components/Solutions.tsx`.
5. Replace the abstract CSS visuals with your own licensed/original images or videos.
6. Change `hello@example.com` in `components/Footer.tsx`.

## Recommended pages to add

- `/solutions/digital-twins`
- `/solutions/flood-intelligence`
- `/solutions/smart-infrastructure`
- `/solutions/construction-intelligence`
- `/industries/cities`
- `/industries/construction`
- `/insights`
- `/about`
- `/contact`

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial website framework"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Deploy

The easiest deployment path is GitHub + Vercel. Import the GitHub repository in Vercel and accept the detected Next.js defaults.
