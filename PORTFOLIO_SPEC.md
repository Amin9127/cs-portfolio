# 📐 Portfolio Technical & Functional Specification (`PORTFOLIO_SPEC.md`)

## 1. Executive Summary
This document defines the functional requirements, architectural design, component hierarchy, and user experience for **Amin Ali's Computer Science & Software Engineering Portfolio**. 

The portfolio is built to reflect genuine, verified software craftsmanship across:
1. **Full-Stack Web & Optical Systems**: The **Photography Portfolio & Visual Archive** (`photography_portfolio`) featuring dynamic EXIF telemetry extraction, interactive Before/After RAW comparison, and automated AI Vision tagging.
2. **3D Spatial Systems & Game Architecture**: **Nette's Game** (Unreal Engine 5.7, Gameplay State Trees, UMG spelling challenges, Saloon environment) and **Galactic Crafters** (Cross-engine procedural space crafting in Python/Pygame & Unreal Engine 5.4).
3. **Distributed Systems & Networking**: **StarterFactory** (Unreal Engine simulation interfaced with custom Java TCP/IP socket client).
4. **AI Engineering & LLM Evaluation**: Industry experience as a Technical QA Evaluator & AI Code Reviewer at **Outlier AI** (Project Aether).
5. **Collaborative Development & Hackathons**: **Hack-A-Health Hackathon** codebase on GitHub.

---

## 2. Target Audience & Goals
- **Technical Recruiters**: Need to rapidly identify degree status (City St George's MSci, 72.5% First Class), core tech skills (Python, TypeScript, React 19, Next.js 16, Unreal Engine, Java), work authorization (UK Citizen, immediate 40h/wk availability), and direct contact methods.
- **Game & 3D Engineering Leads**: Look for solid 3D spatial foundations, state machine architecture, Blueprint/C++ integration, vector geometry, and performance optimization.
- **Full-Stack & Systems Hiring Managers**: Look for real-world API design, modern Next.js/React development, clean state management, and systems programming experience (TCP sockets, IPC).
- **AI Product Teams**: Value first-hand experience auditing LLM-generated code and understanding model alignment and prompt failure modes.

---

## 3. Technology Stack & Architecture

### Core Stack
- **Framework**: Next.js 16.4+ (App Router, Server Components by default)
- **Library**: React 19.3+
- **Styling**: Tailwind CSS v4 (native `@import "tailwindcss";`, dark-mode first aesthetic)
- **Icons**: Lucide React
- **Language**: TypeScript 5 (strict typing, zero `any`)
- **Deployment Targets**: Vercel, Firebase App Hosting, or static export

### Architectural Principles
- **Fast Initial Render**: Static HTML prerendering with React Server Components.
- **Targeted Client Interactivity**: Interactive project category filters, instant keyword search, deep-dive case study drawers, and live optical / 3D telemetry sliders.
- **Accessible & Responsive**: WCAG AA color contrast, full keyboard navigation, responsive mobile-first layouts (375px to 4K displays).
- **Authentic Voice**: Strictly avoids AI clichés and hollow buzzwords; emphasizes real code, architecture diagrams, and concrete implementation metrics.

---

## 4. Site Structure & Layout Wireframe

```
+-----------------------------------------------------------------------+
|  [Navbar: Amin Ali | #About | #Projects | #Optics-Demo | #Skills | CV] |
+-----------------------------------------------------------------------+
|                                                                       |
|  [HERO SECTION]                                                       |
|  - Amin Ali: Final-Year MSci Computer Science @ City St George's      |
|  - Specialties: Full-Stack Web, 3D Spatial Systems & AI Engineering   |
|  - Status badge: Open to Full-Time / Graduate Roles in London/Remote  |
|  - CTAs: [Explore Projects] [View Master Dossier] [Copy Email]        |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  [FLAGSHIP SPOTLIGHT: PHOTOGRAPHY PORTFOLIO & OPTICAL ARCHIVE]       |
|  - Full-stack exhibition platform featuring Next.js 16 + React 19     |
|  - Highlight: Dynamic Optical EXIF telemetry extraction               |
|  - Highlight: Interactive Before/After RAW comparison slider          |
|  - Highlight: Automated AI Vision tagging & Python batch pipelines    |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  [3D SPATIAL & GAME HIGHLIGHT: NETTE'S GAME (UNREAL ENGINE 5.7)]      |
|  - Showcase of cutting-edge UE 5.7 First-Person Interactive Narrative |
|  - Gameplay State Trees, UMG Spelling Challenge, Saloon PBR Scene     |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  [FILTERABLE PROJECT DIRECTORY]                                       |
|  [All Projects] [Full-Stack Web] [3D & Game Dev] [AI & Systems]       |
|  [Search input: "Next.js", "Unreal Engine", "Python", "Java"...]      |
|  -> Grid of interactive project cards with click-to-view drawer       |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  [INTERACTIVE ENGINEERING PLAYGROUND]                                 |
|  - Widget 1: Interactive RAW vs Color-Graded Touch Slider             |
|  - Widget 2: Live Optical EXIF & Camera Field-of-View (FoV) Calculator|
|  - Widget 3: 3D Spatial Rotation & Transform Inspector (Yaw/Pitch/Roll)
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  [TECHNICAL SKILLS MATRIX]                                            |
|  - Languages: Python, TypeScript, Java, C++, ES6+ JavaScript, SQL     |
|  - Web & Frontend: Next.js 16, React 19, Tailwind CSS v4, HTML5/CSS3  |
|  - 3D & Game Dev: Unreal Engine 5.7, Blueprints, UMG, Pygame           |
|  - Systems & AI: TCP Sockets, Pytest, Linux, Git, Prompt Engineering   |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  [EXPERIENCE & EDUCATION TIMELINE]                                    |
|  - City St George's, University of London (MSci Computer Science)     |
|  - Outlier AI (Technical QA Evaluator & Code Reviewer)                |
|                                                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|  [CONTACT & FOOTER]                                                   |
|  - Quick 1-click email copy, GitHub link (Amin9127), London, UK       |
|                                                                       |
+-----------------------------------------------------------------------+
```

---

## 5. Interactive Playground Specifications

### A. Interactive Before/After RAW Comparison Slider
- **Purpose**: Showcases the optical color-grading and sensor inspection capabilities from `photography_portfolio`.
- **Controls**: Smooth touch and mouse drag divider comparing raw digital sensor telemetry against the final color grade.
- **Telemetry Display**: Displays live EXIF readings: ISO 400, 1/250s, f/2.8, 35mm focal length.

### B. Optical EXIF & Field-of-View (FoV) Calculator
- **Purpose**: Demonstrates computer vision and optical trigonometry.
- **Controls**: Interactive sliders for Focal Length (14mm to 200mm) and Aperture (f/1.4 to f/16).
- **Output**: Calculates diagonal Field of View angle:
  $$\text{FoV} = 2 \arctan\left(\frac{d}{2f}\right)$$
  with an interactive visual camera cone diagram.

### C. 3D Spatial Vector & Transform Inspector
- **Purpose**: Demonstrates Unreal Engine 3D coordinate mathematics (vector geometry, yaw/pitch/roll rotations).
- **Controls**: Sliders for Pitch, Yaw, and Roll rotation angles.
- **Output**: Visual 3D axis transform indicator showing forward, right, and up normal vectors.
