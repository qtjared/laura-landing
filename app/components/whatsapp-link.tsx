import { site } from "../data/site";

type WhatsAppLinkProps = {
  className?: string;
  inverse?: boolean;
};

export function WhatsAppLink({
  className = "",
  inverse = false,
}: WhatsAppLinkProps) {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      className={`button-link focus-ring ${
        inverse
          ? "bg-porcelain text-graphite hover:bg-mist"
          : "bg-burgundy text-porcelain hover:bg-burgundy-deep"
      } ${className}`}
      aria-label="Agendar por WhatsApp, abre una conversación nueva"
    >
      <span>Agendar por WhatsApp</span>
      <span aria-hidden="true" className="text-lg leading-none">
        ↗
      </span>
    </a>
  );
}
