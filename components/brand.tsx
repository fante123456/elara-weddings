import { MapPin, Navigation } from "lucide-react";
import { getDict } from "@/lib/content";
import { site, type Locale } from "@/lib/site";
import { ButtonAnchor } from "@/components/ui";

/**
 * Text version of her real logo (handwritten "Mélodye Huet" + small "PHOTOGRAPHE" capitals).
 * The original PNG is too small and light for the header; it is kept in public/logo/ for reference.
 */
export function TextLogo({ tone = "dark", size = "md" }: { tone?: "dark" | "light"; size?: "md" | "lg" }) {
  return (
    <span className="flex flex-col items-start leading-none">
      <span
        className={`font-script ${size === "lg" ? "text-[2.9rem]" : "text-[2.15rem]"} leading-[1.05] ${
          tone === "dark" ? "text-ink" : "text-ivory"
        }`}
      >
        {site.shortName}
      </span>
      <span
        className={`mt-1.5 ml-[18%] font-display text-[0.7rem] font-normal uppercase tracking-[0.38em] ${
          tone === "dark" ? "text-ink-muted" : "text-champagne"
        }`}
      >
        Photographe
      </span>
    </span>
  );
}

/** "Voir sur Google Maps" + "Itinéraire" buttons (links only, no embed or API key). */
export function MapsButtons({ locale, className = "" }: { locale: Locale; className?: string }) {
  const t = getDict(locale).common;
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <ButtonAnchor href={site.mapsUrl} target="_blank" rel="noopener noreferrer" variant="ghost" className="!px-5">
        <MapPin aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
        {t.maps}
        <span className="sr-only"> {t.newTab}</span>
      </ButtonAnchor>
      <ButtonAnchor href={site.directionsUrl} target="_blank" rel="noopener noreferrer" variant="ghost" className="!px-5">
        <Navigation aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
        {t.directions}
        <span className="sr-only"> {t.newTab}</span>
      </ButtonAnchor>
    </div>
  );
}

export function HoursList({ locale, className = "" }: { locale: Locale; className?: string }) {
  const t = getDict(locale).common;
  return (
    <dl className={`grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 ${className}`}>
      {t.hours.map(([day, time]) => (
        <div key={day} className="contents">
          <dt>{day}</dt>
          <dd>{time}</dd>
        </div>
      ))}
    </dl>
  );
}

export function AddressBlock({ locale, mutedClassName = "text-ink-muted" }: { locale: Locale; mutedClassName?: string }) {
  const t = getDict(locale).common;
  return (
    <address className="not-italic">
      {site.address.street}
      <br />
      {site.address.postcode} {site.address.city}
      <br />
      <span className={mutedClassName}>{t.area}</span>
    </address>
  );
}
