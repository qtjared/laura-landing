import { BrandMark } from "./brand-mark";
import { site } from "../data/site";

export function SiteFooter() {
  return (
    <footer className="bg-graphite text-porcelain">
      <div className="page-shell grid gap-14 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-16">
        <div>
          <BrandMark inverse />
          <p className="mt-7 max-w-sm text-sm leading-6 text-porcelain/70">
            Colorimetría y cuidado capilar con atención en Villahermosa,
            Tabasco.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:justify-self-end md:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-porcelain/60">
              Visítanos
            </p>
            <p className="leading-6">{site.location}</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-porcelain/60">
              Síguenos
            </p>
            <a
              className="footer-link focus-ring"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-porcelain/15">
        <div className="page-shell flex flex-col gap-2 py-5 text-[0.7rem] text-porcelain/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Laura Flores Hairstylist</p>
          <p>Villahermosa, Tabasco</p>
        </div>
      </div>
    </footer>
  );
}
