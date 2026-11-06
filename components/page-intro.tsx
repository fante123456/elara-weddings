import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="pb-14 pt-14 lg:pb-20 lg:pt-24">
      <Container>
        <Eyebrow className="fade-in">{eyebrow}</Eyebrow>
        <h1 className="fade-in mt-5 max-w-4xl text-[3rem] sm:text-7xl lg:text-[5.4rem]">{title}</h1>
        {children && <div className="fade-in-delay mt-7 max-w-xl text-lg text-ink-muted">{children}</div>}
      </Container>
    </section>
  );
}
