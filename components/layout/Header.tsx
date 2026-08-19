"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Activ8Logo } from "../ui/Activ8Logo";
import { MobileMenu } from "./MobileMenu";
import { agencyConfig } from "@/data/agency";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "AI Practice", href: "/services#ai" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[var(--bg-main)]/85 backdrop-blur-xl border-b border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl"
            : "py-6 sm:py-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Official Activ8 Logo Mark */}
          <Link href="/" aria-label={`${agencyConfig.name} Homepage`}>
            <Activ8Logo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-400 dark:text-neutral-300 hover:text-current transition-colors duration-200 relative group py-1 font-mono tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#00685B] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Action CTA & Theme Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />

            <div className="hidden sm:block">
              <MagneticButton
                href="/contact"
                as="a"
                variant="primary"
                className="px-5 py-2.5 text-xs font-mono font-semibold"
              >
                <span>Let's talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-3 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-[#00685B] transition-colors text-current cursor-pointer"
              aria-label="Open Mobile Navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
