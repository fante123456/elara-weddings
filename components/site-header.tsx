"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";

function Wordmark() {
  return (
    <Link href="/" className="group flex flex-col leading-none" aria-label="Elara Weddings, home">
      <span className="font-display text-[1.75rem] font-light tracking-wide">Elara</span>
      <span className="mt-0.5 text-[0.6rem] font-normal uppercase tracking-[0.42em] text-ink-muted">Weddings</span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu whenever the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="relative z-40 border-b border-ink/10 bg-ivory">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Wordmark />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`text-[0.8rem] font-normal uppercase tracking-[0.18em] underline-offset-[0.6em] transition-colors hover:text-ink ${
                    isActive(item.href)
                      ? "text-ink underline decoration-rose decoration-1"
                      : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden min-h-11 items-center bg-ink px-5 text-[0.75rem] font-normal uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-[#4a3830] lg:inline-flex"
        >
          Check availability
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" strokeWidth={1.25} /> : <Menu aria-hidden="true" strokeWidth={1.25} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-ivory lg:hidden"
      >
        <nav aria-label="Mobile" className="px-5 pb-12 pt-8 sm:px-8">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-ink/10">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex min-h-16 items-center justify-between font-display text-4xl font-light"
                >
                  <span className={isActive(item.href) ? "italic" : ""}>{item.label}</span>
                  {isActive(item.href) && <span aria-hidden="true" className="h-px w-10 bg-rose" />}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-10 inline-flex min-h-12 w-full items-center justify-center bg-ink px-7 text-[0.8rem] font-normal uppercase tracking-[0.18em] text-ivory"
          >
            Check availability
          </Link>
        </nav>
      </div>
    </header>
  );
}
