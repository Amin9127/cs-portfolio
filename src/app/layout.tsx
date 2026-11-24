import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { candidateProfile } from "@/data/profile";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amin-cs.vercel.app"),
  title: {
    default: "Amin Ali | MSci Computer Science & Software Engineer",
    template: "%s | Amin Ali",
  },
  description:
    "Engineering portfolio of Amin Ali, MSci Computer Science student in London. Projects across Python, Java, PyTorch computer vision, Unreal Engine 5, and full-stack web tools.",
  keywords: [
    "Amin Ali",
    "Computer Science Portfolio",
    "Software Engineer",
    "Python",
    "Java",
    "PyTorch",
    "OpenCV",
    "Unreal Engine 5",
    "City St George's University of London",
  ],
  authors: [{ name: "Amin Ali", url: candidateProfile.github }],
  openGraph: {
    title: "Amin Ali | MSci Computer Science & Software Engineer",
    description:
      "Python, Java, PyTorch computer vision, and Unreal Engine 5 engineering case studies.",
    type: "website",
    locale: "en_GB",
    url: "https://amin-cs.vercel.app",
    siteName: "Amin Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amin Ali | MSci Computer Science & Software Engineer",
    description:
      "Python, Java, PyTorch computer vision, and Unreal Engine 5 engineering case studies.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: candidateProfile.name,
  jobTitle: "MSci Computer Science Student & Software Engineer",
  url: "https://amin-cs.vercel.app",
  sameAs: [
    candidateProfile.github,
    candidateProfile.itchIo,
    candidateProfile.photographyUrl,
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: candidateProfile.degree.institution,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#090a0f] text-slate-100 font-sans antialiased selection:bg-blue-600/30 selection:text-blue-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div id="top" className="relative min-h-screen flex flex-col bg-grid-pattern">
          {children}
        </div>
      </body>
    </html>
  );
}
