"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full border border-white/10 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-[#00685B] transition-colors duration-300 flex items-center justify-center group"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      data-cursor="magnetic"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center text-[#00685B] group-hover:scale-110 transition-transform"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-[#00685B]" />
        ) : (
          <Moon className="w-4 h-4 text-[#00685B]" />
        )}
      </motion.div>
    </button>
  );
}
