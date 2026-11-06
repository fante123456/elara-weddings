import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: "solid" | "ghost" };

/** Deep Brown button with Ivory text (12.4:1). Dusty Rose is never used behind text. */
export function ButtonLink({ variant = "solid", className = "", ...props }: ButtonLinkProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center px-7 text-[0.8rem] font-normal uppercase tracking-[0.18em] transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-ink text-ivory hover:bg-[#4a3830]"
      : "border border-ink/30 text-ink hover:border-ink hover:bg-ink/[0.03]";
  return <Link {...props} className={`${base} ${styles} ${className}`} />;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/** Small honest label used on testimonials, prices and imagery. */
export function DemoNote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-sm font-normal text-ink-muted ${className}`}>
      <span aria-hidden="true" className="mr-2 inline-block h-px w-6 translate-y-[-0.3em] bg-rose" />
      {children}
    </p>
  );
}
