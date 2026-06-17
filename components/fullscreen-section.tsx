import { cn } from "@/lib/utils";

type FullscreenSectionProps = {
  image: string;
  imageAlt?: string;
  fadeTo?: "white" | "dark";
  children: React.ReactNode;
  className?: string;
};

export function FullscreenSection({
  image,
  imageAlt = "",
  fadeTo = "white",
  children,
  className,
}: FullscreenSectionProps) {
  const edgeColor = fadeTo === "white" ? "#ffffff" : "#1D1D1B";

  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center overflow-hidden",
        fadeTo === "dark" ? "text-white" : "text-[#1D1D1B]",
        className,
      )}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div
          className="absolute inset-0 fullscreen-edge-fade"
          style={
            {
              "--fade-color": edgeColor,
            } as React.CSSProperties
          }
        />
        <div
          className={cn(
            "absolute inset-0",
            fadeTo === "white"
              ? "bg-gradient-to-b from-[#1D1D1B]/25 via-[#1D1D1B]/10 to-[#1D1D1B]/35"
              : "bg-gradient-to-b from-[#1D1D1B]/50 via-[#1D1D1B]/30 to-[#1D1D1B]/60",
          )}
        />
      </div>

      <div className="relative z-10 w-full px-6 py-28 md:py-32">
        <div className="max-w-6xl mx-auto">{children}</div>
      </div>
    </section>
  );
}
