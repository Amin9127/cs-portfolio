import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amin Ali | MSci Computer Science & Software Engineer",
  description: "Portfolio of Amin Ali, Final-Year MSci Computer Science student at City St George's (First-Class Honours track) and AI Code Reviewer. Featuring Full-Stack Web, 3D Spatial Systems (Unreal Engine 5.7), and Distributed Systems.",
  keywords: [
    "Amin Ali",
    "Computer Science Portfolio",
    "Software Engineer",
    "Next.js 16",
    "React 19",
    "Unreal Engine 5.7",
    "Python",
    "FastAPI",
    "City St George's University of London",
    "Full-Stack Developer London"
  ],
  authors: [{ name: "Amin Ali", url: "https://github.com/Amin9127" }],
  openGraph: {
    title: "Amin Ali | MSci Computer Science & Software Engineer",
    description: "Showcasing Full-Stack Web, Unreal Engine 5.7 spatial games, and AI engineering systems.",
    type: "website",
    locale: "en_GB",
    url: "https://amin-cs.vercel.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#090a0f] text-slate-100 antialiased selection:bg-blue-600/30 selection:text-blue-200">
        <div className="relative min-h-screen flex flex-col bg-grid-pattern">
          {children}
        </div>
      </body>
    </html>
  );
}
