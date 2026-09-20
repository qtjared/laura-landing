import Image from "next/image";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { WhatsAppLink } from "./components/whatsapp-link";
import { galleryImages, site } from "./data/site";

/*
THESIS: Hair color is a personal study, not a trend menu; this refuses the beige salon template.
OWN-WORLD: Cool porcelain, smoke gray, graphite, and one muted burgundy action color; fashion type meets color-swatch precision.
STORY: Meet Laura's specialty, understand her considered approach, see the intended visual register, then start a WhatsApp conversation.
FIRST VIEWPORT: A quiet text field and oversized wordmark face a close hair image, with color bands indexing the image at its edge.
FORM: Chromatic consultation folio, third grounded direction, staged as an asymmetric editorial split; seed f6c2c566.
*/

const principles = [
  {
    title: "Colorimetría",
    text: "Una mirada consciente al color para encontrar una dirección que dialogue contigo.",
  },
  {
    title: "Cuidado capilar",
    text: "El cuidado del cabello forma parte de cada decisión de color y de su evolución.",
  },
  {
    title: "Atención personal",
    text: "Consulta opciones y disponibilidad directamente con Laura antes de agendar.",
  },
] as const;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    description: site.specialty,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Villahermosa",
      addressRegion: "Tabasco",
      addressCountry: "MX",
    },
    sameAs: [site.instagram],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main>
        <section id="inicio" className="hero-section scroll-mt-20">
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Colorimetría · Cuidado capilar</p>
              <h1 className="hero-title text-balance">
                Color que te <span className="font-display italic">reconoce.</span>
              </h1>
              <p className="hero-description">
                Una mirada personalizada al color y al cuidado de tu cabello en
                Villahermosa.
              </p>
              <WhatsAppLink className="mt-8 self-start" />
              <p className="mt-auto pt-8 text-xs leading-5 text-graphite/65">
                Atención con cita previa · {site.location}
              </p>
            </div>

            <div className="hero-visual">
              <div className="color-index" aria-hidden="true">
                <span className="bg-[#d9d8d3]" />
                <span className="bg-[#9d9690]" />
                <span className="bg-[#695a55]" />
                <span className="bg-[#512b33]" />
              </div>
              <Image
                src="/images/hero-hair.jpg"
                alt="Proceso de peinado sobre cabello castaño brillante"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 55vw"
                className="object-cover object-[50%_62%]"
              />
            </div>
          </div>
        </section>

        <section id="enfoque" className="scroll-mt-20 bg-mist">
          <div className="page-shell py-24 sm:py-32 lg:py-40">
            <div className="max-w-5xl">
              <h2 className="font-display text-[clamp(2.65rem,7vw,6rem)] leading-[0.98] tracking-[-0.04em] text-graphite">
                Tu color no empieza en una tendencia.
                <span className="block italic text-burgundy">Empieza en ti.</span>
              </h2>
            </div>
            <div className="mt-20 grid border-t border-graphite/20 md:grid-cols-3 md:divide-x md:divide-graphite/20">
              {principles.map((principle, index) => (
                <article
                  key={principle.title}
                  className="border-b border-graphite/20 py-8 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
                >
                  <p className="mb-10 text-xs font-bold text-burgundy">
                    0{index + 1}
                  </p>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-graphite/70">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="scroll-mt-20 bg-porcelain">
          <div className="page-shell py-24 sm:py-32 lg:py-40">
            <div className="max-w-2xl">
              <h2 className="font-display text-[clamp(2.8rem,6vw,5.4rem)] leading-none tracking-[-0.04em]">
                Una mirada al color
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-graphite/70">
                Tonos, dimensión y cuidado como punto de partida para una
                conversación personal.
              </p>
            </div>

            <div className="gallery-grid mt-14 sm:mt-20">
              {galleryImages.map((image, index) => (
                <figure key={image.src} className={image.className}>
                  <div className="relative h-full min-h-72 overflow-hidden bg-taupe/20">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 767px) 100vw, 58vw"
                          : "(max-width: 767px) 84vw, 35vw"
                      }
                      className="object-cover"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="estudio"
          className="scroll-mt-20 overflow-hidden bg-graphite text-porcelain"
        >
          <div className="page-shell py-24 sm:py-32 lg:py-40">
            <div className="max-w-3xl">
              <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none tracking-[-0.04em]">
                El estudio
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-porcelain/70">
                El espacio donde Laura recibe a sus clientas en Villahermosa,
                Tabasco.
              </p>
            </div>

            <div className="studio-composition mt-14 sm:mt-20">
              <figure className="studio-detail-image">
                <Image
                  src="/images/studio-main-2.jpg"
                  alt="Interior luminoso de un estudio de belleza con estaciones de trabajo"
                  fill
                  sizes="(max-width: 767px) 100vw, 72vw"
                  className="object-cover"
                />
              </figure>
              <figure className="studio-main-image">
                <Image
                  src="/images/studio-detail.jpg"
                  alt="Estaciones y espejos en el interior de un estudio de belleza"
                  fill
                  sizes="(max-width: 767px) 76vw, 32vw"
                  className="object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="drinks" className="scroll-mt-20 bg-graphite text-porcelain">
          <div className="page-shell drinks-layout">
            <div className="drinks-copy">
              <h2 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.045em] text-burgundy-light">
                Drinks
              </h2>
              <p className="mt-8 max-w-lg text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Un café, a tu manera.
              </p>
              <p className="mt-6 max-w-md text-base leading-7 text-porcelain/70">
                Disfrútalo durante tu visita o pídelo para llevar.
              </p>
            </div>
            <figure className="drinks-image">
              <Image
                src="/images/coffee.jpg"
                alt="Tres bebidas de café vistas desde arriba"
                fill
                sizes="(max-width: 767px) 100vw, 56vw"
                className="object-cover"
              />
            </figure>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-20 bg-burgundy text-porcelain">
          <div className="page-shell grid gap-12 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-28">
            <div>
              <h2 className="max-w-3xl font-display text-[clamp(2.9rem,7vw,6rem)] leading-[0.96] tracking-[-0.04em]">
                Hablemos de tu próximo color.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-6 text-porcelain/75 sm:text-base">
                Escríbele a Laura para consultar opciones, disponibilidad y
                agendar tu cita.
              </p>
            </div>
            <WhatsAppLink inverse className="self-start md:self-end" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
