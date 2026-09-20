import { BrandMark } from "./brand-mark";
import { WhatsAppLink } from "./whatsapp-link";
import { navigation } from "../data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell flex h-[4.5rem] items-center justify-between gap-6">
        <BrandMark />
        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link focus-ring" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden sm:block">
          <WhatsAppLink />
        </div>
        <a
          href="#contacto"
          className="focus-ring text-xs font-bold uppercase tracking-[0.12em] text-burgundy sm:hidden"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
