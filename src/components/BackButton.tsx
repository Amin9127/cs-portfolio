"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  fallbackHref?: string;
  label?: string;
}

export function BackButton({
  fallbackHref = "/#projects",
  label = "Back to Portfolio",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (
      typeof window !== "undefined" &&
      window.history.length > 1 &&
      document.referrer.startsWith(window.location.origin)
    ) {
      router.back();
      return;
    }
    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4 text-blue-400" />
      <span>{label}</span>
    </button>
  );
}
