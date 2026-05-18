import Link from "next/link";
import { Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À Propos" },
  { href: "/team", label: "Équipe" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter / X" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-white/80 text-lg max-w-sm leading-snug">
            Restez informé des dernières tendances en{" "}
            <strong className="text-white">marketing</strong>,{" "}
            <strong className="text-white">communication</strong> et{" "}
            <strong className="text-white">branding</strong>.
          </p>
          <form className="flex w-full md:w-auto gap-0 max-w-sm">
            <input
              type="email"
              placeholder="Votre e-mail"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm px-4 py-3 rounded-l outline-none focus:border-[#2563eb] transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-[#0a0a0a] font-semibold text-sm px-5 py-3 rounded-r hover:bg-[#2563eb] hover:text-white transition-colors whitespace-nowrap"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#2563eb] rounded flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-[family-name:var(--font-raleway)] font-extrabold text-base text-white tracking-tight uppercase">
              Urban Touch
            </span>
          </Link>
          <p className="font-[family-name:var(--font-raleway)] font-bold text-3xl text-white/20 leading-tight">
            Agence<br />Marketing<br />&amp; Communication
          </p>
        </div>

        {/* Nav */}
        <div className="space-y-4">
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div className="space-y-6">
          <div className="space-y-2">
            <ul className="space-y-2">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-1 text-white/50 text-sm">
            <p>+237 000 000 000</p>
            <p>contact@urbantouch.cm</p>
            <p>Cameroun</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Urban Touch SARL. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
