"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { TextLogo } from "@/components/brand";
import { getDict } from "@/lib/content";
import { localePath, site, type Locale } from "@/lib/site";

/** "/en/about/" → "/about" (path without locale prefix or trailing slash). */
function basePath(pathname: string) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/en") return "/";
  return clean.startsWith("/en/") ? clean.slice(3) : clean;
}

function LanguageSwitch({ locale, path, label }: { locale: Locale; path: string; label: string }) {
  const options: { code: Locale; text: string; name: string }[] = [
    { code: "fr", text: "FR", name: "Français" },
    { code: "en", text: "EN", name: "English" },
  ];
  return (
    <nav aria-label={label} className="flex items-center text-[0.8rem] font-normal tracking-[0.18em]">
      {options.map((o, i) => (
        <span key={o.code} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="px-1 text-ink/30">
              |
            </span>
          )}
          {/* Plain links: each language has its own root layout, so switching is a full page load anyway */}
          <a
            href={localePath(o.code, path)}
            hrefLang={o.code}
            lang={o.code}
            aria-label={o.name}
            aria-current={o.code === locale ? "true" : undefined}
            className={`inline-flex min-h-11 min-w-9 items-center justify-center ${
              o.code === locale ? "text-ink underline decoration-rose underline-offset-[0.5em]" : "text-ink-muted hover:text-ink"
            }`}
          >
            {o.text}
          </a>
        </span>
      ))}
    </nav>
  );
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDict(locale).common;
  const pathname = usePathname();
  const path = basePath(pathname);
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

  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="relative z-40 border-b border-ink/10 bg-ivory">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link href={localePath(locale, "/")} aria-label={t.logoHome} className="shrink-0">
          <TextLogo />
        </Link>

        <nav aria-label={t.navMain} className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {t.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={localePath(locale, item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`text-[0.8rem] font-normal uppercase tracking-[0.18em] underline-offset-[0.6em] transition-colors hover:text-ink ${
                    isActive(item.href) ? "text-ink underline decoration-rose decoration-1" : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 lg:gap-5">
          <LanguageSwitch locale={locale} path={path} label={t.language} />
          <a
            href={site.phone.href}
            aria-label={t.callLabel}
            className="hidden min-h-11 items-center gap-2 bg-ink px-5 text-[0.75rem] font-normal tracking-[0.12em] text-ivory transition-colors hover:bg-[#4a3830] lg:inline-flex"
          >
            <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
            {site.phone.display}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" strokeWidth={1.25} /> : <Menu aria-hidden="true" strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[7.25rem] overflow-y-auto bg-ivory lg:hidden"
      >
        <nav aria-label={t.navMobile} className="px-5 pb-12 pt-8 sm:px-8">
          <ul className="flex flex-col">
            {t.nav.map((item) => (
              <li key={item.href} className="border-b border-ink/10">
                <Link
                  href={localePath(locale, item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex min-h-16 items-center justify-between font-display text-4xl font-light"
                >
                  <span className={isActive(item.href) ? "italic" : ""}>{item.label}</span>
                  {isActive(item.href) && <span aria-hidden="true" className="h-px w-10 bg-rose" />}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.phone.href}
            className="mt-10 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-ink px-7 text-[0.8rem] font-normal uppercase tracking-[0.18em] text-ivory"
          >
            <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
            {t.callLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
