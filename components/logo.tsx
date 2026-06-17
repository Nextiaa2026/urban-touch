import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const logos = {
  light: "/logo/logo-light.png",
  dark: "/logo/logo-dark.png",
  yellow: "/logo/logo-yellow.png",
} as const;

type LogoVariant = keyof typeof logos;

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  href?: string;
  priority?: boolean;
};

export function Logo({
  variant = "light",
  className,
  href = "/",
  priority = false,
}: LogoProps) {
  const image = (
    <Image
      src={logos[variant]}
      alt="Urban Touch SARL"
      width={160}
      height={48}
      priority={priority}
      className={cn("h-9 w-auto object-contain", className)}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="inline-flex shrink-0">
      {image}
    </Link>
  );
}
