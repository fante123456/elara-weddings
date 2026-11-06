import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { Container, Eyebrow } from "@/components/ui";
import { photos } from "@/lib/photos";
import { pageOpenGraph, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Availability",
  description:
    "Check availability for your wedding date with Elara Weddings, a fictional wedding photography studio at 31 Rose Lane, York. Call 01904 555 118.",
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph("Contact | Elara Weddings", "/contact"),
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title={<>Tell me about your <em className="text-rose">day</em></>}>
        <p>Share your date and venue, and I will reply within two working days.</p>
      </PageIntro>

      <section aria-label="Contact details and form" className="pb-24 lg:pb-32">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-4 lg:row-start-1">
            <div className="relative aspect-[4/3] lg:aspect-[4/5]">
              <Photo photo={photos.handsRings} sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>

            <h2 className="mt-10 text-4xl">The studio</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-4">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rose" strokeWidth={1.25} />
                <div>
                  <Eyebrow>Location</Eyebrow>
                  <address className="mt-1 not-italic">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.postcode}
                    <br />
                    {site.address.country}
                  </address>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rose" strokeWidth={1.25} />
                <div>
                  <Eyebrow>Phone</Eyebrow>
                  <a href={site.phone.href} className="link-underline mt-1 inline-block">
                    {site.phone.display}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-rose" strokeWidth={1.25} />
                <div>
                  <Eyebrow>Email</Eyebrow>
                  <a href={`mailto:${site.email}`} className="link-underline mt-1 inline-block break-all">
                    {site.email}
                  </a>
                </div>
              </li>
            </ul>
            <p className="mt-8 text-sm text-ink-muted">Studio visits by appointment, Monday to Friday.</p>
          </aside>

          <div className="order-first lg:order-none lg:col-span-7 lg:col-start-6 lg:row-start-1">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
