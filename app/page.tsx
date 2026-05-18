import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Typewriter } from "@/components/typewriter";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
  { num: "01", title: "Marketing Stratégique", desc: "Stratégies ciblées pour maximiser votre impact marché." },
  { num: "02", title: "Communication Créative", desc: "Campagnes percutantes qui captivent votre audience." },
  { num: "03", title: "Branding & Identité", desc: "Identité visuelle cohérente et mémorable." },
  { num: "04", title: "Marketing Digital", desc: "Présence en ligne optimisée et performante." },
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
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=75&auto=format",
    wide: true,
  },
  {
    title: "Identité Visuelle — Startup Fintech",
    cat: "Branding & Identité",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=75&auto=format",
    wide: false,
  },
  {
    title: "Stratégie Digitale — Retail",
    cat: "Marketing Digital",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=75&auto=format",
    wide: false,
  },
  {
    title: "Lancement de Marque — FMCG",
    cat: "Marketing Stratégique",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=75&auto=format",
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
          <p className="text-[#2563eb] text-xs font-semibold tracking-[0.25em] uppercase">
            Agence de Communication — Cameroun — Depuis 2021
          </p>

          {/* MASSIVE display heading */}
          <div className="display-text text-[clamp(2.5rem,9vw,9.5rem)] md:text-[clamp(4rem,12vw,10.5rem)] text-[#0a0a0a] leading-[0.92]">
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
              className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white font-semibold text-sm px-6 py-3 rounded hover:bg-[#2563eb] transition-colors duration-200 shrink-0"
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
              { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format", alt: "Bureau créatif", h: "h-[420px]", w: "w-[520px]" },
              { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80&auto=format", alt: "Stratégie communication", h: "h-[420px]", w: "w-[380px]" },
              { src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80&auto=format", alt: "Campagne marketing", h: "h-[420px]", w: "w-[420px]" },
              { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80&auto=format", alt: "Équipe créative", h: "h-[420px]", w: "w-[460px]" },
              { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80&auto=format", alt: "Marketing digital", h: "h-[420px]", w: "w-[360px]" },
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
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
                  item === "·" ? "text-[#2563eb]" : "text-[#52525b]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MANIFESTO
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 border-b border-[#e4e4e7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="display-text text-[clamp(2.5rem,6vw,5rem)] text-[#0a0a0a]">
              La créativité n&apos;est pas<br />
              juste ce que nous<br />
              faisons —<br />
              <span className="text-[#d4d4d8]">c&apos;est qui nous sommes.</span>
            </h2>
          </div>
          <div className="space-y-6 pt-2 md:pt-16">
            <p className="text-[#52525b] leading-relaxed text-base">
              <strong className="text-[#0a0a0a]">Nous ne suivons pas les tendances — nous les créons.</strong>{" "}
              Urban Touch SARL mêle stratégie, storytelling et design pour bâtir des marques qui laissent une empreinte durable. Que ce soit pour forger une identité audacieuse, concevoir des expériences digitales immersives ou lancer des campagnes à fort impact, nous donnons vie à vos idées avec précision et passion.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Clients satisfaits" },
                { value: "100+", label: "Projets réalisés" },
                { value: "4", label: "Expertises" },
                { value: "2021", label: "Fondée" },
              ].map((s) => (
                <div key={s.label} className="border border-[#e4e4e7] rounded-lg p-4">
                  <p className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-[#0a0a0a]">{s.value}</p>
                  <p className="text-[#71717a] text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-[#2563eb] font-semibold text-sm hover:underline"
            >
              Notre histoire <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

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
          SERVICES GRID
      ══════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="display-text text-[clamp(2.5rem,5vw,4.5rem)] text-[#0a0a0a]">
              Solutions<br />
              <span className="text-[#a1a1aa]">Créatives</span>
            </h2>
            <p className="text-[#71717a] text-sm max-w-xs leading-relaxed">
              Combinant expertise analytique et créativité, nous livrons des résultats mesurables pour chaque client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#e4e4e7] rounded-xl overflow-hidden">
            {services.map((s, i) => (
              <Link
                key={s.num}
                href="/services"
                className={`group p-8 flex items-start justify-between gap-4 hover:bg-[#eff6ff] transition-colors border-[#e4e4e7] ${
                  i % 2 === 0 ? "md:border-r" : ""
                } ${i < 2 ? "border-b" : ""}`}
              >
                <div className="space-y-2">
                  <p className="text-[#a1a1aa] text-xs font-mono">{s.num}</p>
                  <h3 className="font-[family-name:var(--font-raleway)] font-bold text-xl text-[#0a0a0a] group-hover:text-[#2563eb] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#71717a] text-sm leading-relaxed">{s.desc}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#d4d4d8] group-hover:text-[#2563eb] shrink-0 mt-1 transition-colors" />
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[#0a0a0a] text-[#0a0a0a] font-semibold text-sm px-7 py-3 rounded hover:bg-[#0a0a0a] hover:text-white transition-colors"
            >
              Voir tous nos services <ArrowRight className="w-4 h-4" />
            </Link>
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
              <h2 className="display-text text-[clamp(2.5rem,5vw,4.5rem)] text-[#0a0a0a]">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block" />
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
                    <p className="text-[#0a0a0a] font-[family-name:var(--font-raleway)] font-bold text-base">{item.title}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#d4d4d8] group-hover:text-[#2563eb] transition-colors" />
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
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80&auto=format"
              alt="Équipe Urban Touch SARL"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/45 to-transparent md:bg-gradient-to-r md:from-[#0a0a0a]/85 md:to-[#0a0a0a]/20" />
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
                  className="inline-flex items-center bg-white text-[#0a0a0a] font-semibold text-sm px-5 py-2.5 rounded hover:bg-[#2563eb] hover:text-white transition-colors"
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
            <h2 className="display-text text-[clamp(2.5rem,5vw,4.5rem)] text-[#0a0a0a]">
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
                <span className="text-[#2563eb] font-mono text-sm font-semibold">{step.num}</span>
                <h3 className="font-[family-name:var(--font-raleway)] font-bold text-xl text-[#0a0a0a]">{step.title}</h3>
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
            <h2 className="display-text text-[clamp(2rem,4vw,3.5rem)] text-[#0a0a0a]">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-[#e4e4e7] rounded-xl p-8 space-y-6 hover:border-[#2563eb]/30 transition-colors">
                <span className="text-[#2563eb] text-4xl font-serif leading-none">&ldquo;</span>
                <p className="text-[#52525b] text-sm leading-relaxed italic">{t.quote}</p>
                <div className="border-t border-[#e4e4e7] pt-4">
                  <p className="font-[family-name:var(--font-raleway)] font-bold text-[#0a0a0a] text-sm">{t.author}</p>
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
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format"
              alt="Stratégie marketing Urban Touch"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-10 md:p-14 flex flex-col justify-center space-y-6">
            <p className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase">Notre Approche</p>
            <h2 className="display-text text-[clamp(2rem,4vw,3rem)] text-[#0a0a0a]">
              Chaque marque mérite une stratégie unique
            </h2>
            <p className="text-[#71717a] text-sm leading-relaxed">
              Nous ne croyons pas aux solutions génériques. Chaque client reçoit une stratégie sur mesure, construite autour de ses objectifs spécifiques, de son audience cible et de son positionnement marché.
            </p>
            <ul className="space-y-3">
              {["Analyse approfondie de votre marché", "Stratégie personnalisée et mesurable", "Exécution créative et rigoureuse", "Reporting transparent et régulier"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#52525b] text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#2563eb] font-semibold text-sm hover:underline"
            >
              Découvrir nos services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA — Dark banner
      ══════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="space-y-3">
            <p className="text-white/40 text-xs tracking-[0.25em] uppercase">Prêt à commencer ?</p>
            <h2 className="display-text text-[clamp(2.5rem,6vw,5rem)] text-white leading-tight">
              Créons Quelque<br />
              Chose{" "}
              <span className="text-[#2563eb]">d&apos;Extraordinaire</span>
            </h2>
          </div>
          <div className="space-y-4 shrink-0">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-[#0a0a0a] font-semibold text-sm px-8 py-4 rounded hover:bg-[#2563eb] hover:text-white transition-colors"
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
