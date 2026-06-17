import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Typewriter } from "@/components/typewriter";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FullscreenSection } from "@/components/fullscreen-section";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Accueil — Agence Marketing & Communication",
  description: "Urban Touch SARL — votre partenaire en marketing stratégique, communication créative et prestation de services au Cameroun depuis 2021.",
  keywords: ["agence marketing Cameroun", "communication Douala", "Urban Touch", "branding Cameroun"],
  openGraph: {
    title: "Urban Touch SARL | Agence Marketing & Communication au Cameroun",
    description: "Stratégie marketing, communication créative et prestation de services sur mesure.",
    url: "https://urbantouch.cm",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Urban Touch SARL" }],
  },
  alternates: { canonical: "https://urbantouch.cm" },
};

const services = [
  { num: "01", title: "Marketing Stratégique", desc: "Stratégies ciblées pour maximiser votre visibilité sur le marché camerounais et africain." },
  { num: "02", title: "Communication Créative", desc: "Campagnes percutantes qui captivent votre audience et renforcent votre image de marque." },
  { num: "03", title: "Branding & Identité", desc: "Identité visuelle cohérente, moderne et mémorable pour votre marque." },
  { num: "04", title: "Marketing Digital", desc: "Présence en ligne optimisée, SEO et stratégies digitales performantes." },
  { num: "05", title: "Conseil & Accompagnement", desc: "Accompagnement stratégique personnalisé vers une croissance durable." },
  { num: "06", title: "Prestation de Services", desc: "Solutions flexibles adaptées à chaque client et chaque secteur." },
];

const clients = ["Entreprise A", "Marque B", "Société C", "Groupe D", "Studio E", "Agence F"];

const marqueeItems = [
  "Marketing Stratégique", "·", "Communication Créative", "·",
  "Branding & Identité", "·", "Marketing Digital", "·",
  "Conseil & Accompagnement", "·", "Prestation de Services", "·",
  "Marketing Stratégique", "·", "Communication Créative", "·",
  "Branding & Identité", "·", "Marketing Digital", "·",
  "Conseil & Accompagnement", "·", "Prestation de Services", "·",
];

const work = [
  {
    title: "Campagne Nationale Télécoms",
    cat: "Communication & Branding",
    img: images.portfolio.telecom,
    wide: true,
  },
  {
    title: "Identité Visuelle — Startup Fintech",
    cat: "Branding & Identité",
    img: images.portfolio.fintech,
    wide: false,
  },
  {
    title: "Stratégie Digitale — Retail",
    cat: "Marketing Digital",
    img: images.portfolio.retail,
    wide: false,
  },
  {
    title: "Lancement de Marque — FMCG",
    cat: "Marketing Stratégique",
    img: images.portfolio.fmcg,
    wide: true,
  },
];

const testimonials = [
  {
    quote: "Urban Touch a transformé notre présence sur le marché camerounais. Leur approche stratégique et créative a dépassé toutes nos attentes.",
    author: "Directeur Marketing",
    company: "Entreprise A",
  },
  {
    quote: "Une équipe exceptionnelle qui comprend vraiment les enjeux du marché africain. Résultats mesurables et communication transparente.",
    author: "CEO",
    company: "Startup B",
  },
  {
    quote: "Le rebranding réalisé par Urban Touch a complètement revitalisé notre image. Nos clients ont immédiatement remarqué la différence.",
    author: "Responsable Communication",
    company: "Groupe C",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">

      <section className="px-6 pt-20 pb-10 max-w-6xl mx-auto w-full">
        <div className="space-y-6">
          <p className="text-[#FFCA00] text-xs font-semibold tracking-[0.25em] uppercase">
            Agence de Communication — Cameroun — Depuis 2021
          </p>

          {/* MASSIVE display heading */}
          <div className="display-text text-[clamp(2.5rem,9vw,9.5rem)] md:text-[clamp(4rem,12vw,10.5rem)] text-[#1D1D1B] leading-[0.92]">
            <div className="hero-heading">Élevez Votre</div>
            <div className="hero-heading-delay text-[#d4d4d8]">Marque avec</div>
            <div className="hero-heading-delay">
              <Typewriter />
            </div>
          </div>

          <div className="hero-sub flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-[#e4e4e7]">
            <p className="text-[#71717a] text-sm max-w-sm leading-relaxed">
              Nous créons des stratégies marketing visionnaires et des solutions de communication qui font rayonner votre marque au Cameroun et en Afrique.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1D1D1B] text-white font-semibold text-sm px-6 py-3 rounded hover:bg-[#FFCA00] hover:text-[#1D1D1B] transition-colors duration-200 shrink-0"
            >
              Démarrons Ensemble <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HERO IMAGE STRIP — Big animated mosaic
      ══════════════════════════════════════ */}
      <section className="pb-16 w-full">
        {/* Full-width scrolling strip — integrated in shadcn ScrollArea */}
        <ScrollArea className="w-full scrollbar-none pb-4">
          <div className="flex gap-3 px-6 pb-2 hero-strip w-max">
            {[
              { src: images.hero.teamMeeting, alt: "Équipe en réunion", h: "h-[420px]", w: "w-[520px]" },
              { src: images.hero.africanBusiness, alt: "Professionnels africains", h: "h-[420px]", w: "w-[380px]" },
              { src: images.hero.groupCollaboration, alt: "Collaboration d'équipe", h: "h-[420px]", w: "w-[420px]" },
              { src: images.hero.teamDiscussion, alt: "Discussion stratégique", h: "h-[420px]", w: "w-[460px]" },
              { src: images.hero.officeTeam, alt: "Équipe au bureau", h: "h-[420px]", w: "w-[360px]" },
            ].map((img, i) => (
              <div
                key={i}
                className={`relative shrink-0 rounded-xl overflow-hidden bg-[#f4f4f5] ${img.h} ${img.w} hero-img-${i}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="h-1.5" />
        </ScrollArea>

        {/* Floating badge row — perfectly even, consistent heights and borders */}
        <div className="px-6 mt-6 flex flex-wrap items-center gap-3">
          <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-full px-4 py-2 flex items-center gap-2 h-9 text-[#52525b] text-xs font-semibold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse shrink-0" />
            <span className="leading-none">Disponible pour de nouveaux projets</span>
          </div>
          <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-full px-4 py-2 flex items-center gap-2 h-9 text-[#52525b] text-xs font-semibold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCA00] shrink-0" />
            <span className="leading-none">Douala, Cameroun</span>
          </div>
          <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-full px-4 py-2 flex items-center gap-2 h-9 text-[#52525b] text-xs font-semibold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#71717a] shrink-0" />
            <span className="leading-none">Fondée en 2021</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MARQUEE TICKER
      ══════════════════════════════════════ */}
      <section className="border-y border-[#e4e4e7] py-4 overflow-hidden bg-[#fafafa]">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex gap-8 pr-8">
            {marqueeItems.map((item, i) => (
              <span
                key={i}
                className={`text-sm font-medium shrink-0 ${
                  item === "·" ? "text-[#FFCA00]" : "text-[#52525b]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VISION — 100vh fullscreen
      ══════════════════════════════════════ */}
      <FullscreenSection
        image={images.fullscreen.vision}
        imageAlt="Équipe créative Urban Touch en collaboration"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="fullscreen-glass rounded-2xl p-8 md:p-10 space-y-6 shadow-xl">
            <p className="text-[#FFCA00] text-xs font-semibold tracking-[0.25em] uppercase">
              Notre Idée
            </p>
            <h2 className="display-text text-[clamp(2rem,5vw,3.75rem)] leading-[1.05]">
              Donnez une touche urbaine à votre marque
            </h2>
            <p className="text-[#52525b] leading-relaxed">
              <strong className="text-[#1D1D1B]">De l&apos;aigle ambitieux aux sommets stables</strong> — un symbole
              d&apos;expansion globale et de créativité. Urban Touch SARL mêle stratégie, storytelling et design
              pour bâtir des marques qui laissent une empreinte durable au Cameroun et en Afrique.
            </p>
            <p className="text-[#71717a] text-sm leading-relaxed">
              Nous ne suivons pas les tendances — nous les créons. Chaque projet est une opportunité de transformer
              des idées audacieuses en solutions impactantes.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#1D1D1B] text-white font-semibold text-sm px-6 py-3 rounded hover:bg-[#FFCA00] hover:text-[#1D1D1B] transition-colors"
            >
              Découvrir notre histoire <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "2021", label: "Année de création" },
              { value: "50+", label: "Clients satisfaits" },
              { value: "100+", label: "Projets réalisés" },
              { value: "6", label: "Expertises clés" },
            ].map((s) => (
              <div key={s.label} className="fullscreen-glass rounded-xl p-6 space-y-1 shadow-lg">
                <p className="font-[family-name:var(--font-raleway)] font-bold text-3xl md:text-4xl text-[#1D1D1B]">
                  {s.value}
                </p>
                <div className="w-8 h-0.5 bg-[#FFCA00]" />
                <p className="text-[#71717a] text-xs md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FullscreenSection>

      {/* ══════════════════════════════════════
          SERVICES — 100vh fullscreen
      ══════════════════════════════════════ */}
      <FullscreenSection
        image={images.fullscreen.services}
        imageAlt="Professionnels africains en réunion stratégique"
      >
        <div className="space-y-10 md:space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="text-[#FFCA00] text-xs font-semibold tracking-[0.25em] uppercase">
              Nos Services
            </p>
            <h2 className="display-text text-[clamp(2.25rem,5vw,4rem)] text-white leading-tight drop-shadow-sm">
              Communication · Marketing · Création · Mode
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Une offre complète pour propulser votre marque — de la stratégie à l&apos;exécution,
              du branding au digital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.num}
                href="/services"
                className="group fullscreen-glass rounded-xl p-6 space-y-3 hover:border-[#FFCA00]/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[#FFCA00] font-mono text-sm font-semibold">{s.num}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#d4d4d8] group-hover:text-[#FFCA00] transition-colors shrink-0" />
                </div>
                <h3 className="font-[family-name:var(--font-raleway)] font-bold text-lg text-[#1D1D1B] group-hover:text-[#FFCA00] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#71717a] text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold text-sm px-8 py-3.5 rounded hover:bg-[#FFCA00] hover:border-[#FFCA00] hover:text-[#1D1D1B] transition-colors"
            >
              Explorer tous nos services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </FullscreenSection>

      {/* ══════════════════════════════════════
          CLIENTS STRIP
      ══════════════════════════════════════ */}
      <section className="py-14 px-6 border-b border-[#e4e4e7]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#a1a1aa] text-xs tracking-[0.25em] uppercase text-center mb-10">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-5">
            {clients.map((c) => (
              <span key={c} className="text-[#d4d4d8] font-[family-name:var(--font-raleway)] font-bold text-xl tracking-wide hover:text-[#a1a1aa] transition-colors cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OUR WORK — Portfolio grid
      ══════════════════════════════════════ */}
      <section className="border-t border-[#e4e4e7] py-24 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="display-text text-[clamp(2.5rem,5vw,4.5rem)] text-[#1D1D1B]">
                Notre Travail<br />
                <span className="text-[#a1a1aa]">Parle de Lui-Même</span>
              </h2>
            </div>
            <p className="text-[#71717a] text-sm max-w-xs leading-relaxed">
              Explorez notre portfolio de projets audacieux et impactants, conçus pour inspirer et livrer l&apos;excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {work.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl bg-[#f4f4f5]"
              >
                <div className="relative overflow-hidden h-64 md:h-80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block">
                    <p className="text-white/60 text-xs mb-1">{item.cat}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-white font-[family-name:var(--font-raleway)] font-bold text-lg">{item.title}</p>
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                {/* Always visible label */}
                <div className="p-4 flex items-center justify-between bg-white border-t border-[#e4e4e7]/50">
                  <div>
                    <p className="text-[#a1a1aa] text-xs">{item.cat}</p>
                    <p className="text-[#1D1D1B] font-[family-name:var(--font-raleway)] font-bold text-base">{item.title}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#d4d4d8] group-hover:text-[#FFCA00] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TEAM BANNER
      ══════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-xl overflow-hidden h-72 md:h-[420px] bg-[#f4f4f5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.pages.homeTeamBanner}
              alt="Équipe Urban Touch SARL"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/90 via-[#1D1D1B]/45 to-transparent md:bg-gradient-to-r md:from-[#1D1D1B]/85 md:to-[#1D1D1B]/20" />
            <div className="absolute inset-0 p-6 md:p-14 flex flex-col justify-between">
              <div className="space-y-3 md:space-y-4 max-w-lg">
                <h2 className="display-text text-[clamp(1.5rem,3.5vw,3rem)] md:text-[clamp(1.8rem,4vw,3.5rem)] text-white leading-tight">
                  Rencontrez les esprits créatifs derrière Urban Touch
                </h2>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-md">
                  Notre équipe de stratèges, créatifs et experts en communication est passionnée par l&apos;excellence et les résultats.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-8 text-white w-full sm:w-auto">
                  {[
                    { v: "6", l: "Experts créatifs" },
                    { v: "50+", l: "Clients satisfaits" },
                    { v: "100+", l: "Projets réalisés" },
                  ].map((s) => (
                    <div key={s.l} className="space-y-0.5">
                      <span className="font-[family-name:var(--font-raleway)] font-bold text-xl md:text-2xl">{s.v}</span>
                      <p className="text-white/60 text-[10px] md:text-xs leading-tight">{s.l}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/team"
                  className="inline-flex items-center bg-white text-[#1D1D1B] font-semibold text-sm px-5 py-2.5 rounded hover:bg-[#FFCA00] hover:text-[#1D1D1B] transition-colors"
                >
                  Rencontrer l&apos;Équipe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS — How we work
      ══════════════════════════════════════ */}
      <section className="border-t border-[#e4e4e7] py-24 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="display-text text-[clamp(2.5rem,5vw,4.5rem)] text-[#1D1D1B]">
              Comment<br />
              <span className="text-[#a1a1aa]">Nous Travaillons</span>
            </h2>
            <p className="text-[#71717a] text-sm max-w-xs leading-relaxed">
              Un processus éprouvé qui garantit des résultats exceptionnels à chaque étape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e4e4e7] rounded-xl overflow-hidden">
            {[
              { num: "01", title: "Découverte & Stratégie", desc: "Nous plongeons dans votre marque, comprenant vos objectifs, votre audience et votre environnement concurrentiel." },
              { num: "02", title: "Création & Exécution", desc: "Nos créatifs donnent vie à votre vision avec des designs percutants et des contenus engageants." },
              { num: "03", title: "Lancement & Croissance", desc: "Nous déployons, mesurons et optimisons continuellement pour maximiser votre retour sur investissement." },
            ].map((step, i) => (
              <div key={step.num} className={`p-8 space-y-4 bg-white ${i < 2 ? "border-b md:border-b-0 md:border-r border-[#e4e4e7]" : ""}`}>
                <span className="text-[#FFCA00] font-mono text-sm font-semibold">{step.num}</span>
                <h3 className="font-[family-name:var(--font-raleway)] font-bold text-xl text-[#1D1D1B]">{step.title}</h3>
                <p className="text-[#71717a] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-[#e4e4e7]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-[#a1a1aa] text-xs tracking-[0.25em] uppercase">Témoignages</p>
            <h2 className="display-text text-[clamp(2rem,4vw,3.5rem)] text-[#1D1D1B]">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-[#e4e4e7] rounded-xl p-8 space-y-6 hover:border-[#FFCA00]/30 transition-colors">
                <span className="text-[#FFCA00] text-4xl font-serif leading-none">&ldquo;</span>
                <p className="text-[#52525b] text-sm leading-relaxed italic">{t.quote}</p>
                <div className="border-t border-[#e4e4e7] pt-4">
                  <p className="font-[family-name:var(--font-raleway)] font-bold text-[#1D1D1B] text-sm">{t.author}</p>
                  <p className="text-[#a1a1aa] text-xs">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SPLIT IMAGE + TEXT
      ══════════════════════════════════════ */}
      <section className="border-t border-[#e4e4e7] py-24 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-[#e4e4e7]">
          <div className="relative h-72 md:h-auto min-h-[320px] bg-[#f4f4f5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.pages.homeApproach}
              alt="Stratégie marketing Urban Touch"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-10 md:p-14 flex flex-col justify-center space-y-6">
            <p className="text-[#FFCA00] text-xs font-semibold tracking-[0.2em] uppercase">Notre Approche</p>
            <h2 className="display-text text-[clamp(2rem,4vw,3rem)] text-[#1D1D1B]">
              Chaque marque mérite une stratégie unique
            </h2>
            <p className="text-[#71717a] text-sm leading-relaxed">
              Nous ne croyons pas aux solutions génériques. Chaque client reçoit une stratégie sur mesure, construite autour de ses objectifs spécifiques, de son audience cible et de son positionnement marché.
            </p>
            <ul className="space-y-3">
              {["Analyse approfondie de votre marché", "Stratégie personnalisée et mesurable", "Exécution créative et rigoureuse", "Reporting transparent et régulier"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#52525b] text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFCA00] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#FFCA00] font-semibold text-sm hover:underline"
            >
              Découvrir nos services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA — Dark banner
      ══════════════════════════════════════ */}
      <section className="bg-[#1D1D1B] py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="space-y-3">
            <p className="text-white/40 text-xs tracking-[0.25em] uppercase">Prêt à commencer ?</p>
            <h2 className="display-text text-[clamp(2.5rem,6vw,5rem)] text-white leading-tight">
              Créons Quelque<br />
              Chose{" "}
              <span className="text-[#FFCA00]">d&apos;Extraordinaire</span>
            </h2>
          </div>
          <div className="space-y-4 shrink-0">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-[#1D1D1B] font-semibold text-sm px-8 py-4 rounded hover:bg-[#FFCA00] hover:text-[#1D1D1B] transition-colors"
            >
              Démarrer Votre Projet <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-white/30 text-xs text-center">Réponse sous 48h · Devis gratuit</p>
          </div>
        </div>
      </section>

    </div>
  );
}
