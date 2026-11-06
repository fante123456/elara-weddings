"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/lib/photos";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/site";

type Category = { id: string; label: string; intro: string; photos: Photo[] };

export function PortfolioGallery({ categories, locale }: { categories: Category[]; locale: Locale }) {
  const t = getDict(locale).gallery;
  const [filter, setFilter] = useState<string>("all");
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const visible = filter === "all" ? categories : categories.filter((c) => c.id === filter);
  const flat = visible.flatMap((c) => c.photos.map((p) => ({ ...p, label: c.label })));
  const current = index === null ? null : flat[index];
  const count = flat.length;

  const open = (i: number, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (d: number) => setIndex((i) => (i === null ? i : (i + d + count) % count));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setIndex(null);
      openerRef.current?.focus();
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const filters = [{ id: "all", label: t.all }, ...categories.map((c) => ({ id: c.id, label: c.label }))];
  const starts = visible.map((_, ci) => visible.slice(0, ci).reduce((n, c) => n + c.photos.length, 0));

  return (
    <>
      <div className="sticky top-0 z-30 -mx-5 border-b border-ink/10 bg-ivory/95 px-5 py-3 backdrop-blur sm:mx-0 sm:px-0">
        <div role="group" aria-label={t.filter} className="flex flex-wrap gap-1">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`min-h-11 shrink-0 px-3 text-[0.72rem] sm:px-4 sm:text-[0.75rem] font-normal uppercase tracking-[0.16em] transition-colors duration-300 ${
                filter === f.id ? "bg-ink text-ivory" : "text-ink-muted hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {t.showing(count, filter === "all" ? undefined : visible[0]?.label)}
      </p>

      <div className="mt-12 space-y-20 lg:space-y-28">
        {visible.map((cat, ci) => (
          <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <h2 id={`cat-${cat.id}`} className="text-[2.4rem] sm:text-5xl">
                {cat.label}
              </h2>
              <p className="max-w-sm text-ink-muted">{cat.intro}</p>
            </div>
            <ul className="mt-8 columns-2 gap-3 sm:gap-5 lg:columns-3 lg:gap-6">
              {cat.photos.map((p, pi) => {
                const i = starts[ci] + pi;
                return (
                  <li key={p.src} className="mb-3 break-inside-avoid sm:mb-5 lg:mb-6">
                    <button
                      type="button"
                      onClick={(e) => open(i, e.currentTarget)}
                      className="group relative block w-full overflow-hidden bg-champagne"
                      style={{ aspectRatio: `${p.width} / ${p.height}` }}
                      aria-label={`${t.open}${p.alt}`}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, 50vw"
                        quality={70}
                        placeholder="blur"
                        blurDataURL={p.blur}
                        className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-soft)] group-hover:scale-[1.03] motion-reduce:transition-none"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={t.viewer}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-ivory p-0 text-ink backdrop:bg-ink/60"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-3 sm:px-8">
              <p className="eyebrow" aria-live="polite">
                {current.label} · {(index ?? 0) + 1} / {count}
              </p>
              <button
                type="button"
                onClick={close}
                autoFocus
                className="inline-flex h-11 w-11 items-center justify-center"
                aria-label={t.close}
              >
                <X aria-hidden="true" strokeWidth={1.25} />
              </button>
            </div>
            <div className="relative flex-1">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                quality={70}
                placeholder="blur"
                blurDataURL={current.blur}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-2 py-3 sm:px-6">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex h-11 w-11 items-center justify-center"
                aria-label={t.prev}
              >
                <ChevronLeft aria-hidden="true" strokeWidth={1.25} />
              </button>
              <p className="max-w-2xl text-center text-sm text-ink-muted">
                {current.alt}. {t.photoBy}{" "}
                <a
                  href={`https://unsplash.com/@${current.credit.username}?utm_source=melodye_huet_demo&utm_medium=referral`}
                  className="underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {current.credit.name}
                </a>{" "}
                {t.onUnsplash}
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex h-11 w-11 items-center justify-center"
                aria-label={t.next}
              >
                <ChevronRight aria-hidden="true" strokeWidth={1.25} />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
