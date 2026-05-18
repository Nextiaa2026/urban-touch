import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos — Notre Histoire & Nos Valeurs",
  description: "Découvrez Urban Touch SARL, agence de marketing et communication fondée en 2021 au Cameroun. Notre mission, notre vision et nos valeurs.",
  keywords: ["Urban Touch SARL histoire", "agence marketing Cameroun", "à propos Urban Touch"],
  openGraph: {
    title: "À Propos — Urban Touch SARL | Agence Marketing Cameroun",
    description: "Fondée en 2021, Urban Touch SARL est une agence dynamique dédiée à transformer la présence des marques au Cameroun.",
    url: "https://urbantouch.cm/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "À Propos Urban Touch SARL" }],
  },
  alternates: { canonical: "https://urbantouch.cm/about" },
};

const values = [
  { num: "01", title: "Découverte & Stratégie", desc: "Nous plongeons dans votre marque, comprenant vos objectifs, votre audience et votre environnement concurrentiel." },
  { num: "02", title: "Concept & Design", desc: "Les idées prennent forme à travers le brainstorming, le wireframing et le storytelling visuel." },
  { num: "03", title: "Développement & Exécution", desc: "Nous donnons vie aux concepts grâce à une technologie de pointe et un savoir-faire expert." },
  { num: "04", title: "Test & Optimisation", desc: "Chaque détail est affiné pour garantir une expérience fluide sur toutes les plateformes." },
  { num: "05", title: "Lancement & Croissance", desc: "Nous ne livrons pas seulement — nous accompagnons votre succès à long terme." },
];

const coreValues = [
  { title: "Créativité avec Intention", desc: "Chaque design que nous créons sert un objectif stratégique — une créativité qui génère de vrais résultats." },
  { title: "Innovation & Adaptabilité", desc: "Nous adoptons les tendances émergentes pour rester à la pointe dans un paysage en constante évolution." },
  { title: "Collaboration & Transparence", desc: "Les grandes idées naissent du travail d'équipe. Nous collaborons étroitement avec nos clients." },
  { title: "Excellence & Précision", desc: "L'attention aux détails et l'engagement qualité garantissent un travail exceptionnel à chaque fois." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="px-6 pt-16 pb-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Notre Histoire</p>
            <h1 className="font-[family-name:var(--font-raleway)] font-bold text-4xl md:text-5xl text-[#0a0a0a] leading-tight">
              L&apos;Histoire<br />
              <span className="text-[#a1a1aa]">d&apos;Urban Touch</span>
            </h1>
          </div>
          <div className="pt-4 md:pt-12">
            <p className="text-[#71717a] leading-relaxed">
              Fondée en 2021, Urban Touch SARL est une agence dynamique basée au Cameroun, dédiée à transformer la présence des marques à travers des stratégies de marketing innovantes et une communication percutante.
            </p>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="px-6 pb-16 max-w-6xl mx-auto w-full">
        <div className="relative w-full h-72 md:h-[420px] rounded-xl overflow-hidden bg-[#f4f4f5]">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            alt="Bureau Urban Touch SARL"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="border-t border-[#e4e4e7] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-[family-name:var(--font-raleway)] font-bold text-2xl md:text-3xl text-[#0a0a0a] leading-relaxed max-w-3xl">
            <strong>La créativité n&apos;est pas juste notre métier — c&apos;est notre ADN.</strong>{" "}
            <span className="text-[#71717a] font-normal">
              Urban Touch SARL a été fondée pour révolutionner l&apos;engagement des marques à travers le design, le storytelling et l&apos;innovation digitale. Nous avons aidé des marques de tous secteurs à transformer leurs idées en solutions impactantes.
            </span>
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-[#e4e4e7] py-16 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { value: "2021", label: "Année de création" },
            { value: "50+", label: "Clients satisfaits" },
            { value: "100+", label: "Projets réalisés" },
            { value: "4", label: "Expertises" },
            { value: "15+", label: "Récompenses" },
          ].map((s) => (
            <div key={s.label} className="space-y-1">
              <p className="font-[family-name:var(--font-raleway)] font-bold text-3xl text-[#0a0a0a]">{s.value}</p>
              <div className="w-6 h-[2px] bg-[#2563eb]" />
              <p className="text-[#71717a] text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-raleway)] font-bold text-4xl md:text-5xl text-[#0a0a0a] leading-tight">
              Nos Valeurs<br />
              <span className="text-[#a1a1aa]">Fondamentales</span>
            </h2>
            <p className="text-[#71717a] text-sm max-w-xs leading-relaxed">
              Nous croyons en la créativité, la collaboration et l&apos;excellence — des principes directeurs qui guident chaque projet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e4e4e7] rounded overflow-hidden">
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className={`p-8 space-y-3 border-[#e4e4e7] ${i < 3 ? "border-r" : ""}`}
              >
                <h3 className="font-[family-name:var(--font-raleway)] font-bold text-base text-[#0a0a0a]">{v.title}</h3>
                <p className="text-[#71717a] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="border-t border-[#e4e4e7] py-24 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-raleway)] font-bold text-4xl md:text-5xl text-[#0a0a0a] leading-tight">
              Du Concept<br />
              <span className="text-[#a1a1aa]">à la Réalité</span>
            </h2>
          </div>
          <div className="space-y-0">
            {values.map((v, i) => (
              <div key={v.num} className={`flex gap-6 py-6 ${i < values.length - 1 ? "border-b border-[#e4e4e7]" : ""}`}>
                <span className="text-[#2563eb] font-mono text-sm font-semibold shrink-0 pt-0.5">{v.num}</span>
                <div className="space-y-1">
                  <h3 className="font-[family-name:var(--font-raleway)] font-bold text-lg text-[#0a0a0a]">{v.title}</h3>
                  <p className="text-[#71717a] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM TEASER ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-raleway)] font-bold text-4xl md:text-5xl text-[#0a0a0a] leading-tight">
              Les Esprits<br />
              <strong>Derrière Urban Touch</strong>
            </h2>
            <p className="text-[#71717a] text-sm max-w-xs leading-relaxed">
              Une équipe de créatifs passionnés, de stratèges et d&apos;experts dédiés à donner vie à des idées audacieuses.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", name: "Directeur Général", role: "CEO & Fondateur" },
              { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", name: "Responsable Marketing", role: "Head of Marketing" },
              { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80", name: "Directeur Créatif", role: "Creative Director" },
            ].map((m) => (
              <div key={m.name} className="space-y-3">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-[#f4f4f5]">
                  <Image
                    src={m.src}
                    alt={m.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-raleway)] font-bold text-[#0a0a0a]">{m.name}</p>
                  <p className="text-[#71717a] text-sm">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-[#2563eb] font-semibold text-sm hover:underline"
          >
            Voir toute l&apos;équipe <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
