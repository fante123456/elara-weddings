import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-28 lg:py-40">
      <Container className="max-w-2xl text-center">
        <Eyebrow>Page not found</Eyebrow>
        <h1 className="mt-5 text-6xl sm:text-7xl">
          This page has <em className="text-rose">wandered off</em>
        </h1>
        <p className="mt-6 text-ink-muted">The link may be old, or the page may have moved.</p>
        <ButtonLink href="/" className="mt-10">
          Back to home
        </ButtonLink>
      </Container>
    </section>
  );
}
