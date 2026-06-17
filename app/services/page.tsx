import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Nos Services — Marketing, Communication & Branding",
  description: "Découvrez les services d'Urban Touch SARL : marketing stratégique, communication créative, branding, marketing digital et prestation de services au Cameroun.",
  keywords: ["services marketing Cameroun", "communication créative", "branding Cameroun", "marketing digital Douala"],
  openGraph: {
    title: "Services — Urban Touch SARL | Marketing & Communication",
    description: "Marketing stratégique, communication créative, branding et marketing digital — l'offre complète d'Urban Touch SARL.",
    url: "https://urbantouch.cm/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Services Urban Touch SARL" }],
  },
  alternates: { canonical: "https://urbantouch.cm/services" },
};

const services = [
  {
    num: "01",
    title: "Marketing Stratégique",
    desc: "Élaboration de stratégies marketing ciblées pour maximiser votre visibilité et votre impact sur le marché camerounais et africain.",
    features: ["Analyse de marché", "Stratégie de positionnement", "Plan marketing annuel", "Suivi des performances"],
    img: images.services.strategy,
  },
  {
    num: "02",
    title: "Communication Créative",
    desc: "Conception de campagnes de communication percutantes qui captivent votre audience et renforcent votre image de marque.",
    features: ["Campagnes publicitaires", "Gestion des réseaux sociaux", "Création de contenu", "Relations presse"],
    img: images.services.communication,
  },
  {
    num: "03",
    title: "Branding & Identité Visuelle",
    desc: "Création et développement de votre identité visuelle complète pour une marque cohérente, moderne et mémorable.",
    features: ["Création de logo", "Charte graphique", "Design print & digital", "Guide de marque"],
    img: images.services.branding,
  },
  {
    num: "04",
    title: "Marketing Digital",
    desc: "Présence en ligne optimisée, gestion des réseaux sociaux et stratégies digitales adaptées à votre marché cible.",
    features: ["SEO & référencement", "Publicité en ligne", "Email marketing", "Analytics & reporting"],
    img: images.services.digital,
  },
  {
    num: "05",
    title: "Conseil & Accompagnement",
    desc: "Accompagnement stratégique personnalisé pour guider votre entreprise vers une croissance durable et mesurable.",
    features: ["Audit de communication", "Formation équipes", "Coaching dirigeants", "Veille concurrentielle"],
    img: images.services.consulting,
  },
  {
    num: "06",
    title: "Prestation de Services",
    desc: "Solutions personnalisées et flexibles adaptées aux besoins spécifiques de chaque client et chaque secteur d'activité.",
    features: ["Organisation d'événements", "Production de supports", "Gestion de projets", "Partenariats stratégiques"],
    img: images.services.events,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="px-6 pt-16 pb-16 max-w-6xl mx-auto w-full border-b border-[#e4e4e7]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-[#FFCA00] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Ce Que Nous Faisons</p>
            <h1 className="font-[family-name:var(--font-raleway)] font-bold text-4xl md:text-5xl text-[#1D1D1B] leading-tight">
              Nos<br />
              <span className="text-[#a1a1aa]">Services</span>
            </h1>
          </div>
          <p className="text-[#71717a] leading-relaxed pb-2">
            Des solutions marketing et communication complètes pour propulser votre marque vers de nouveaux sommets au Cameroun et en Afrique.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="py-8 px-6 max-w-6xl mx-auto w-full">
        <div className="space-y-0">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-[#e4e4e7] ${i === 0 ? "border-t" : ""}`}
            >
              {/* Text side */}
              <div className="py-12 pr-0 md:pr-12 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-[#FFCA00] font-mono text-sm font-semibold">{s.num}</span>
                  <div className="h-[1px] w-8 bg-[#e4e4e7]" />
                </div>
                <h2 className="font-[family-name:var(--font-raleway)] font-bold text-3xl text-[#1D1D1B]">{s.title}</h2>
                <p className="text-[#71717a] leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#52525b] text-sm">
                      <CheckCircle className="w-4 h-4 text-[#FFCA00] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[#FFCA00] font-semibold text-sm hover:underline"
                >
                  Demander ce service <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              {/* Image side */}
              <div className="py-12 pl-0 md:pl-12 flex items-center">
                <div className="relative w-full h-56 md:h-72 rounded-lg overflow-hidden bg-[#f4f4f5]">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1D1D1B] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase">Prêt à démarrer ?</p>
            <h2 className="font-[family-name:var(--font-raleway)] font-bold text-4xl text-white leading-tight">
              Démarrons Votre Projet
            </h2>
            <p className="text-white/60 text-sm max-w-sm">
              Contactez-nous pour un devis gratuit et personnalisé selon vos besoins.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1D1D1B] font-semibold text-sm px-7 py-4 rounded hover:bg-[#FFCA00] hover:text-[#1D1D1B] transition-colors whitespace-nowrap"
          >
            Demander un Devis Gratuit <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
