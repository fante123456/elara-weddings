import { Photo } from "@/components/photo";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { photos } from "@/lib/photos";

export function CtaBand({
  title = "Planning a wedding in York?",
  text = "Tell me your date and venue, and I will let you know within two working days if I am free.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-champagne py-20 lg:py-28">
      <Container className="grid items-center gap-14 md:grid-cols-12 md:gap-8">
        <div className="mx-auto w-[72%] max-w-xs md:col-span-4 md:col-start-2 md:w-full md:max-w-none">
          <div className="arch-line reveal">
            <div className="arch relative aspect-[3/4] bg-blush">
              <Photo photo={photos.veilKiss} sizes="(min-width: 768px) 30vw, 72vw" />
            </div>
          </div>
        </div>
        <div className="reveal md:col-span-6 md:col-start-7">
          <Eyebrow>Your date</Eyebrow>
          <h2 id="cta-title" className="mt-4 text-[2.6rem] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-md">{text}</p>
          <ButtonLink href="/contact" className="mt-10">
            Check availability
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
