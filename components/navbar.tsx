"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "@/components/logo";

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

          <Logo variant="light" priority />

          <div className="hidden md:flex items-center gap-0">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                  pathname === l.href
                    ? "text-[#FFCA00]"
                    : "text-[#52525b] hover:text-[#1D1D1B]"
                }`}
              >
                {l.label}
                {pathname === l.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#FFCA00] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center bg-[#1D1D1B] text-white font-semibold text-sm px-5 py-2.5 rounded hover:bg-[#FFCA00] hover:text-[#1D1D1B] transition-colors duration-200"
          >
            Devis Gratuit
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden flex items-center gap-2 text-[#1D1D1B] py-2 px-1 ${open ? "hamburger-open" : ""}`}
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
                        ? "text-[#FFCA00]"
                        : "text-[#1D1D1B] hover:text-[#FFCA00]"
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
                  className="flex items-center justify-center bg-[#1D1D1B] text-white font-semibold text-sm px-6 py-3.5 rounded hover:bg-[#FFCA00] hover:text-[#1D1D1B] transition-colors w-full"
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
