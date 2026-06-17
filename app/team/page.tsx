import type { Metadata } from "next";
import Image from "next/image";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Notre Équipe — Experts Marketing & Communication",
  description: "Rencontrez l'équipe passionnée d'Urban Touch SARL — directeurs, créatifs et spécialistes marketing dédiés à votre succès au Cameroun.",
  keywords: ["équipe Urban Touch SARL", "experts marketing Cameroun", "agence communication équipe"],
  openGraph: {
    title: "Notre Équipe — Urban Touch SARL | Experts Marketing",
    description: "Une équipe passionnée de professionnels du marketing et de la communication au service de votre marque.",
    url: "https://urbantouch.cm/team",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Équipe Urban Touch SARL" }],
  },
  alternates: { canonical: "https://urbantouch.cm/team" },
};

const team = [
  { name: "Directeur Général", role: "CEO & Fondateur", bio: "Visionnaire et stratège, il guide Urban Touch vers l'excellence depuis 2021 avec une passion pour le marketing africain.", img: images.team.ceo },
  { name: "Responsable Marketing", role: "Head of Marketing", bio: "Experte en stratégies digitales et campagnes de communication innovantes adaptées au marché camerounais.", img: images.team.marketingLead },
  { name: "Directeur Créatif", role: "Creative Director", bio: "Artiste et concepteur, il donne vie aux identités visuelles de nos clients avec un sens aigu de l'esthétique.", img: images.team.creativeDirector },
  { name: "Chargé de Clientèle", role: "Account Manager", bio: "Interface entre nos clients et nos équipes, garant de la satisfaction et du respect des délais.", img: images.team.accountManager },
  { name: "Spécialiste Digital", role: "Digital Specialist", bio: "Expert en marketing digital, SEO et gestion des réseaux sociaux pour une présence en ligne optimale.", img: images.team.digitalSpecialist },
  { name: "Chargée de Communication", role: "Communication Officer", bio: "Rédactrice et communicante, elle crée des contenus engageants qui parlent à votre audience cible.", img: images.team.communicationOfficer },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="px-6 pt-16 pb-16 max-w-6xl mx-auto w-full border-b border-[#e4e4e7]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-[#FFCA00] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Notre Équipe</p>
            <h1 className="font-[family-name:var(--font-raleway)] font-bold text-4xl md:text-5xl text-[#1D1D1B] leading-tight">
              Les Esprits<br />
              <strong>Derrière Urban Touch</strong>
            </h1>
          </div>
          <p className="text-[#71717a] leading-relaxed pb-2">
            Une équipe de créatifs passionnés, de stratèges et d&apos;experts en communication dédiés à donner vie à des idées audacieuses et à livrer des résultats exceptionnels.
          </p>
        </div>
      </section>

      {/* ── TEAM BANNER ── */}
      <section className="px-6 py-12 max-w-6xl mx-auto w-full">
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
          <Image
            src={images.team.banner}
            alt="Équipe Urban Touch SARL au travail"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/85 via-[#1D1D1B]/35 to-transparent md:bg-gradient-to-r md:from-[#1D1D1B]/70 md:to-transparent" />
          <div className="absolute inset-0 p-6 md:p-12 flex items-end">
            <p className="text-white font-[family-name:var(--font-raleway)] font-bold text-xl md:text-3xl max-w-md leading-tight">
              Passionnés par l&apos;excellence et les résultats extraordinaires.
            </p>
          </div>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="py-12 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {team.map((member) => (
            <div key={member.name} className="space-y-4">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#f4f4f5]">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-[family-name:var(--font-raleway)] font-bold text-lg text-[#1D1D1B]">{member.name}</h3>
                <p className="text-[#FFCA00] text-sm font-medium">{member.role}</p>
                <p className="text-[#71717a] text-sm leading-relaxed pt-1">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="border-t border-[#e4e4e7] py-20 px-6 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="font-[family-name:var(--font-raleway)] font-bold text-3xl text-[#1D1D1B]">Récompenses</h2>
          <div className="space-y-0">
            {[
              { year: "2023", title: "Meilleure Agence Marketing Cameroun", org: "Reconnu pour l'excellence en branding et communication" },
              { year: "2022", title: "Prix de l'Innovation Digitale", org: "Récompensé pour les stratégies digitales innovantes" },
              { year: "2021", title: "Startup Marketing de l'Année", org: "Lauréat du prix de la meilleure nouvelle agence" },
            ].map((a, i) => (
              <div key={a.year} className={`flex items-start justify-between gap-8 py-6 ${i < 2 ? "border-b border-[#e4e4e7]" : ""}`}>
                <span className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-[#d4d4d8] shrink-0">{a.year}</span>
                <div className="flex-1">
                  <p className="font-[family-name:var(--font-raleway)] font-bold text-[#1D1D1B]">{a.title}</p>
                </div>
                <p className="text-[#71717a] text-sm text-right max-w-xs hidden md:block">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
