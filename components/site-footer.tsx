import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-ivory">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="md:col-span-2 lg:col-span-1">
            <p className="font-display text-4xl font-light">Elara Weddings</p>
            <p className="mt-3 max-w-xs font-display text-xl font-light italic text-champagne">{site.tagline}</p>
          </div>

          <div>
            <h2 className="eyebrow !text-champagne">Visit &amp; contact</h2>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.25} />
                <address className="not-italic">
                  {site.address.street}, {site.address.city}
                  <br />
                  {site.address.postcode}, {site.address.country}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.25} />
                <a href={site.phone.href} className="hover:underline">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.25} />
                <a href={`mailto:${site.email}`} className="break-words hover:underline">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow !text-champagne">Explore</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[0.95rem] md:grid-cols-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/credits" className="hover:underline">
                  Photo credits
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-sm text-ivory/80 md:flex-row md:justify-between">
          <p>Elara Weddings is a fictional studio created for a student design project.</p>
          <p>
            Sample imagery from Unsplash.{" "}
            <Link href="/credits" className="underline underline-offset-4 hover:text-ivory">
              See photographer credits
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
