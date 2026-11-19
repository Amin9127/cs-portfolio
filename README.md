# 💻 Amin Ali: Computer Science & Software Engineering Portfolio

> **Final-Year MSci Computer Science (First-Class Honours Track, 72.5% Average)**  
> **City St George's, University of London &bull; London, UK**  
> **AI Code Reviewer & Technical QA Evaluator @ Outlier AI**  
> **GitHub**: [github.com/Amin9127/cs-portfolio](https://github.com/Amin9127/cs-portfolio) &bull; **Email**: aminali656565@gmail.com

---

## Overview
A web portfolio built with Next.js 16 and React 19 to display software projects across full-stack web development, Unreal Engine 5.7 games, socket communication, and AI evaluation.

### Projects Included:
1. **Photography Portfolio & Optical Archive** (`photography_portfolio`):
   - Dynamic optical EXIF extraction (focal length, aperture, shutter speed, ISO, lens model).
   - Before and After slider (`BeforeAfterSlider.tsx`) comparing RAW sensor captures with finished color grading.
   - Multimodal AI vision scene categorization (`aiVision.ts`).
   - Python batch processing scripts to verify RAW-pair integrity before build time.
2. **Nette's Game: 3D First-Person Saloon Experience** (`nette`):
   - Built with **Unreal Engine 5.7**.
   - Uses **Gameplay State Trees** (`GameplayStateTree`), UMG spelling challenges (`WBP_SpellingChallenge`), crosshair interaction (`WBP_Crosshair`), and saloon level rendering.
3. **Galactic Crafters: Procedural Space Mining** (`Galactic-crafters`):
   - 2D game built in **Python 3.12 / Pygame** on GitHub, later expanded into **Unreal Engine 5.4**.
   - Features asteroid field generation, crafting trees, and inertial flight physics.
4. **StarterFactory: Networked 3D Factory Simulation** (`StarterFactory_Build`):
   - Unreal Engine simulation connected to a custom **Java TCP socket client** (`TCPClient.java`) for real-time telemetry.
5. **AI Code Review & Reasoning Pipeline** (`Outlier AI / Project Aether`):
   - Technical QA evaluator auditing LLM-generated code in Python and Java, catching runtime edge cases, and evaluating multimodal models.
6. **Hack-A-Health Hackathon Platform** (`Hack-A-Health-hackathon`):
   - Collaborative healthcare application built during a timed hackathon.

---

## Interactive Tools
The site includes client-side tools to test camera calculations and 3D math:
- **RAW vs Color-Graded Slider**: Draggable comparison between raw sensor data and color grading.
- **Field of View Calculator**: Computes diagonal Field of View ($\text{FoV} = 2 \arctan\left(\frac{43.27}{2f}\right)$) and hyperfocal distance with an interactive SVG cone diagram.
- **3D Spatial Vectors**: Computes normalized Unreal Engine forward vectors from pitch, yaw, and roll angles.

---

## Tech Stack
- **Framework**: Next.js 16.4 (App Router)
- **Library**: React 19.3
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`)
- **Language**: TypeScript 5
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Local Development

### Requirements
- Node.js 18+
- npm 10+

### Setup
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build
```bash
npm run build
npm start
```
