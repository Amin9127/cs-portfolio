"use client";

import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
    >
      <span>Back to top</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </button>
  );
}
