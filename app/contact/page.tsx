import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Devis Gratuit & Sans Engagement",
  description: "Contactez Urban Touch SARL pour vos projets marketing et communication au Cameroun. Devis gratuit sous 48h.",
  keywords: ["contact Urban Touch SARL", "devis marketing Cameroun", "agence communication contact Douala"],
  openGraph: {
    title: "Contact — Urban Touch SARL | Devis Gratuit",
    description: "Contactez Urban Touch SARL pour vos projets marketing et communication. Devis gratuit sous 48h.",
    url: "https://urbantouch.cm/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Urban Touch SARL" }],
  },
  alternates: { canonical: "https://urbantouch.cm/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="px-6 pt-16 pb-16 max-w-6xl mx-auto w-full border-b border-[#e4e4e7]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Parlons-nous</p>
            <h1 className="font-[family-name:var(--font-raleway)] font-bold text-4xl md:text-5xl text-[#0a0a0a] leading-tight">
              Créons Quelque<br />
              <span className="text-[#a1a1aa]">Chose Ensemble</span>
            </h1>
          </div>
          <p className="text-[#71717a] leading-relaxed pb-2">
            Prêt à donner une touche urbaine à votre marque ? Décrivez votre projet et recevez une proposition personnalisée sous 48h.
          </p>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="py-16 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Contact info */}
          <div className="space-y-10">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Adresse", value: "Cameroun" },
                { icon: Mail, label: "Email", value: "contact@urbantouch.cm" },
                { icon: Phone, label: "Téléphone", value: "+237 000 000 000" },
                { icon: Clock, label: "Horaires", value: "Lun – Ven : 8h00 – 18h00" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 pb-6 border-b border-[#e4e4e7] last:border-0">
                  <div className="w-10 h-10 bg-[#eff6ff] rounded flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-[#a1a1aa] text-xs uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-[#0a0a0a] font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office image */}
            <div className="relative w-full h-52 rounded-lg overflow-hidden bg-[#f4f4f5]">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                alt="Bureau Urban Touch SARL"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* CTA card */}
          <div className="space-y-8">
            <div className="bg-[#0a0a0a] rounded-xl p-8 md:p-10 space-y-6">
              <div className="space-y-2">
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase">Devis Gratuit</p>
                <h2 className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-white leading-tight">
                  Décrivez votre projet, nous vous répondons sous 48h.
                </h2>
              </div>
              <a
                href="mailto:contact@urbantouch.cm"
                className="flex items-center justify-center bg-[#2563eb] text-white font-semibold text-sm px-6 py-4 rounded hover:bg-[#1d4ed8] transition-colors w-full"
              >
                Envoyer un Email
              </a>
              <p className="text-white/40 text-xs text-center">
                Ou appelez-nous directement au +237 000 000 000
              </p>
            </div>

            <div className="border border-[#e4e4e7] rounded-xl p-8 space-y-4">
              <h3 className="font-[family-name:var(--font-raleway)] font-bold text-lg text-[#0a0a0a]">
                Pourquoi choisir Urban Touch ?
              </h3>
              <ul className="space-y-3">
                {[
                  "Réponse sous 48h garantie",
                  "Devis personnalisé et sans engagement",
                  "Équipe experte en marketing africain",
                  "Résultats mesurables et transparents",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#52525b] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
