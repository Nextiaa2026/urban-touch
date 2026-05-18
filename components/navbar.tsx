"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Équipe" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock/Unlock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_#e4e4e7]"
            : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 bg-[#2563eb] rounded flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span
              className="font-[family-name:var(--font-raleway)] font-extrabold text-base text-[#0a0a0a] tracking-tight uppercase"
            >
              Urban Touch
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  pathname === l.href
                    ? "text-[#2563eb]"
                    : "text-[#52525b] hover:text-[#0a0a0a]"
                }`}
              >
                {l.label}
                {pathname === l.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#2563eb] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center bg-[#0a0a0a] text-white font-semibold text-sm px-5 py-2.5 rounded hover:bg-[#2563eb] transition-colors duration-200"
          >
            Devis Gratuit
          </Link>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden flex items-center gap-2 text-[#0a0a0a] py-2 px-1 ${open ? "hamburger-open" : ""}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <div className="flex flex-col gap-[5px]">
              <span className="hamburger-line line-1" />
              <span className="hamburger-line line-2" />
              <span className="hamburger-line line-3" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase">
              {open ? "Fermer" : "Menu"}
            </span>
          </button>
        </div>

        {/* Mobile menu - Fixed viewport overlay with internal scroll */}
        {open && (
          <div className="menu-open md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white border-t border-[#e4e4e7] overflow-y-auto">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col justify-between min-h-[calc(100vh-4rem)]">
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`flex items-center justify-between py-4 border-b border-[#f4f4f5] text-base font-medium transition-colors ${
                      pathname === l.href
                        ? "text-[#2563eb]"
                        : "text-[#0a0a0a] hover:text-[#2563eb]"
                    }`}
                  >
                    {l.label}
                    <span className="text-[#d4d4d8] text-lg">→</span>
                  </Link>
                ))}
              </div>
              <div className="pt-8 pb-10">
                <Link
                  href="/contact"
                  className="flex items-center justify-center bg-[#0a0a0a] text-white font-semibold text-sm px-6 py-3.5 rounded hover:bg-[#2563eb] transition-colors w-full"
                >
                  Devis Gratuit
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
