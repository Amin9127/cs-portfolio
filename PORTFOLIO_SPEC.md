# Portfolio Technical & Functional Specification (`PORTFOLIO_SPEC.md`)

## 1. Executive Summary
This specification documents the architecture and functional structure of **Amin Ali's Computer Science & Software Engineering Portfolio** (`https://amin-cs.vercel.app`).

The site highlights verified work across:
1. **Optical Web & Python Verification**: Photography Portfolio (`amin-photography.vercel.app`) with server-side EXIF parsing and Python RAW-pair verification scripts.
2. **Python Game Architecture & 3D Systems**: Galactic Crafters (`amin9127.itch.io`, Python/Pygame), Nette's Game (Unreal Engine 5.7 Gameplay State Trees), and StarterFactory (Unreal Engine + Java TCP IPC).
3. **Machine Learning & Computer Vision**: Custom PyTorch `AgeGroupCNN` with weighted cross-entropy loss and OpenCV/Scikit-learn Handwritten Digit Recognition.
4. **Java & Systems Engineering**: Lancaster's Music Hall (Java 17 Swing MVC / SQLite) and Concurrent Multithreaded Systems verified in LTSA.
5. **AI Model Assessment**: Technical QA Evaluator and Model Assessor at Outlier AI (Project Aether).

---

## 2. Technology Stack & Architecture
- **Framework**: Next.js 16.4.6 (App Router, React Server Components by default, static `/projects/[id]` routes)
- **Library**: React 19.3
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`)
- **Typography**: `Plus Jakarta Sans` and `JetBrains Mono` via `next/font/google`
- **SEO & Metadata**: Dynamic `icon.tsx`, `opengraph-image.tsx`, `robots.ts`, `sitemap.ts`, and `Person` JSON-LD
- **Privacy Guardrails**: No hosted CV file, no academic grades or module percentages, and no personal phone numbers or internal file paths.

---

## 3. Site Structure
1. **Navbar**: Sticky header with active-section tracking, `itch.io`, and `GitHub` links.
2. **Hero**: Server-rendered engineering summary and primary calls to action.
3. **Flagship Spotlight**: Photography Portfolio highlight with a real Canon EOS M3 sample frame linking directly to `https://amin-photography.vercel.app`.
4. **Selected Projects (`ProjectExplorer`)**: Filterable interactive stage and feed with modal quick-view and dedicated shareable `/projects/[id]` pages.
5. **Engineering Skill Matrix & Experience Timeline**: Server-rendered technical stack, City St George's education summary, and Outlier AI work.
6. **Contact & Footer**: Public email copy/mail action, GitHub, `itch.io` links, and reliable back-to-top navigation.
