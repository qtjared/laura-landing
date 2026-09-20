import Link from "next/link";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="#inicio"
      className={`brand-mark focus-ring ${inverse ? "text-porcelain" : "text-graphite"}`}
      aria-label="Laura Flores Hairstylist, volver al inicio"
    >
      <span className="font-display text-[1.55rem] leading-none tracking-[-0.045em] sm:text-[1.8rem]">
        Laura Flores
      </span>
      <span className="mt-1 block text-[0.53rem] font-semibold uppercase leading-none tracking-[0.24em] sm:text-[0.58rem]">
        Hair Stylist
      </span>
    </Link>
  );
}
