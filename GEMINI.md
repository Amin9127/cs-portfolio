# cs-portfolio Project Guidelines & Standards

## 🚀 Project Overview & Profile
- **Project**: Computer Science & Engineering Portfolio Platform
- **Deployment**: Vercel CI/CD (`https://amin-cs.vercel.app`)
- **Plugin Profile**: `WEB` (`vercel-plugin`, `supabase`)

---

## 🛠️ Stack & Engineering Conventions

### Next.js 16+ & React 19 App Router
- **Server Components by Default**: Favor Server Components for fast initial render and SEO.
- **Client Components**: Use `"use client"` strictly for interactive widgets (modals, sliders, canvas, client-side state).
- **TypeScript**: Strict typing with clean interfaces in `src/types/`. Strictly avoid `any`.
- **Styling**: Tailwind CSS v4 using modern `@import "tailwindcss";` directives. Avoid raw inline styles.
- **Vercel Deployments**: Ensure all code compiles cleanly (`npm.cmd run build`) before pushing changes (follow global `nextjs-vercel-ship` skill).
