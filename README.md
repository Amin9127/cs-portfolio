# 💻 Amin Ali — Computer Science & Software Engineering Portfolio

> **Final-Year MSci Computer Science (First-Class Honours Track, 72.5% Average)**  
> **City St George's, University of London &bull; London, UK**  
> **AI Code Reviewer & Technical QA Evaluator @ Outlier AI**  
> **GitHub**: [github.com/Amin9127](https://github.com/Amin9127) &bull; **Email**: aminali656565@gmail.com

---

## 🌐 Overview
A modern, high-performance portfolio application designed for technical recruiters, startup founders, and engineering hiring managers. Highlights verified craftsmanship across full-stack web platforms, Unreal Engine 5.7 spatial worlds, socket-based networked IPC, and frontier AI reasoning pipelines.

### Key Highlights:
1. **Flagship Centerpiece: Photography Portfolio & Optical Archive** (`photography_portfolio`):
   - Dynamic optical EXIF extraction (focal length, aperture, shutter duration, ISO, lens profile).
   - High-performance GPU-accelerated Before/After touch slider (`BeforeAfterSlider.tsx`) comparing RAW sensor captures with finished color grading.
   - Multimodal AI Vision scene classification (`aiVision.ts`).
   - Automated Python batch processing and verification pipelines.
2. **Nette's Game: 3D First-Person Experience** (`nette`):
   - Built on cutting-edge **Unreal Engine 5.7**.
   - Features **Gameplay State Trees** (`GameplayStateTree`), interactive UMG spelling challenges (`WBP_SpellingChallenge`), crosshair interaction traces (`WBP_Crosshair`), and detailed saloon PBR scene rendering.
3. **Galactic Crafters: Procedural Space Mining** (`Galactic-crafters`):
   - Cross-engine game in **Python 3.12 / Pygame** and **Unreal Engine 5.4**.
   - Procedural asteroid field generation, multi-tier crafting progression, and Newtonian flight mechanics.
4. **StarterFactory: Networked 3D Factory Simulation** (`StarterFactory_Build`):
   - Unreal Engine simulation connected to a custom **Java TCP/IP socket client** (`TCPClient.java`) for real-time IPC telemetry.
5. **AI Code Review & Reasoning Pipeline** (`Outlier AI / Project Aether`):
   - High-trust technical evaluator auditing LLM-generated code across Python & Java, diagnosing edge-case runtime failures, and evaluating multimodal frontier models.
6. **Hack-A-Health Hackathon Platform** (`Hack-A-Health-hackathon`):
   - Rapidly engineered collaborative healthcare application developed under competitive hackathon constraints.

---

## 🔬 Interactive Engineering Playground
Features client-side interactive calculators and telemetry tools:
- **Interactive RAW vs Color-Graded Slider**: Real-time draggable comparison between uncompressed sensor captures and finished film-emulation grades.
- **Optical FoV & Hyperfocal Distance Calculator**: Real-time camera trigonometry calculating diagonal Field of View ($\text{FoV} = 2 \arctan\left(\frac{43.27}{2f}\right)$) and hyperfocal sharpness zones with an interactive SVG cone diagram.
- **3D Spatial Vector & Transform Inspector**: Real-time Euler Pitch/Yaw/Roll rotation calculating Unreal Engine forward normal vectors.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 16.4 (App Router)
- **Library**: React 19.3
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`, dark-mode first design)
- **Language**: TypeScript 5 (Strict typing)
- **Icons**: Lucide React
- **Hosting**: Vercel / Firebase App Hosting / Static Export ready

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v26)
- npm 10+

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```
