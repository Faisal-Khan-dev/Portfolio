# Faisal Khan | 3D Interactive Portfolio

A modern, high-performance 3D developer portfolio built with **Next.js 14**, **React 18**, **Three.js / React Three Fiber**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **3D Workstation & Earth Models:** Interactive 3D scene rendering via Three.js and `@react-three/fiber` / `@react-three/drei`.
- **Floating 3D Tech Spheres:** Interactive floating icosahedron mesh decals for technology stack showcase.
- **Interactive Experience Timeline:** Clean, responsive work experience roadmap.
- **Projects Showcase:** Real-world full-stack and frontend projects with live demo and GitHub repository links.
- **Working Contact Form:** Integrated with EmailJS for direct message delivery.
- **Fully Responsive & Accessible:** Optimized for mobile, tablet, and desktop viewports.
- **Production & Vercel Ready:** Built with Next.js App Router and optimized for zero-config deployment on Vercel.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics:** [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Contact Service:** [@emailjs/browser](https://www.emailjs.com/)

---

## 💻 Getting Started Locally

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18.17+ or v20+) installed.

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/Faisal-Khan-dev/Portfolio.git

# Enter project directory
cd Portfolio

# Install dependencies
npm install
```

### 3. Environment Variables (Optional)

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_TO_NAME="Faisal Khan"
NEXT_PUBLIC_EMAILJS_TO_EMAIL="your-email@example.com"
```

*(Fallbacks are included in the code if environment variables are not supplied)*

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

This repository is pre-configured and tested for seamless deployment to **Vercel**:

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. Push your updated code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Production ready for Vercel deployment"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your **Portfolio** repository.
4. Framework Preset will automatically detect **Next.js**.
5. *(Optional)* Under **Environment Variables**, add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_TO_NAME`
   - `NEXT_PUBLIC_EMAILJS_TO_EMAIL`
6. Click **Deploy**. Vercel will build and deploy your site in ~1 minute!

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel --prod
```

---

## 👤 Author

**Faisal Khan**
- GitHub: [@Faisal-Khan-dev](https://github.com/Faisal-Khan-dev)
- LinkedIn: [Faisal Khan](https://www.linkedin.com/in/faisal-khan-345013347/)
