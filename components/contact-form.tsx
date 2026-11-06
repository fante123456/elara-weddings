"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Phone } from "lucide-react";
import { getDict } from "@/lib/content";
import { site, type Locale } from "@/lib/site";

type Field = "name" | "email" | "date" | "venue" | "guests" | "package" | "message";

function todayISO() {
  const d = new Date();
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

const inputBase =
  "mt-2 block min-h-12 w-full border border-ink/25 bg-ivory px-4 py-3 text-base font-light text-ink placeholder:text-ink-muted/70 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/**
 * Demo form: the layout is kept, but nothing is ever sent to the business.
 * Submitting only shows a message asking visitors to call.
 */
export function ContactForm({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const t = d.form;
  const [shown, setShown] = useState(false);
  const dateRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLHeadingElement>(null);

  // "Today" is only computed in the browser, so the page stays fully static
  useEffect(() => {
    if (dateRef.current) dateRef.current.min = todayISO();
  }, [shown]);
  useEffect(() => {
    if (shown) messageRef.current?.focus();
  }, [shown]);

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault(); // never sent anywhere
    setShown(true);
  };

  if (shown) {
    return (
      <div role="status" className="border border-ink/15 bg-blush p-8 sm:p-10">
        <h2 ref={messageRef} tabIndex={-1} className="text-4xl focus:outline-none">
          {t.demoTitle}
        </h2>
        <p className="mt-4">{t.demoText}</p>
        <a
          href={site.phone.href}
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-ink px-7 text-[0.8rem] font-normal uppercase tracking-[0.18em] text-ivory hover:bg-[#4a3830]"
        >
          <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.25} />
          {d.common.callLabel}
        </a>
        <div>
          <button
            type="button"
            onClick={() => setShown(false)}
            className="link-underline mt-6 text-[0.8rem] font-normal uppercase tracking-[0.18em]"
          >
            {t.back}
          </button>
        </div>
      </div>
    );
  }

  const fieldProps = (f: Field) => ({
    id: f,
    name: f,
    "aria-describedby": f === "date" || f === "guests" ? `${f}-hint` : undefined,
    className: inputBase,
  });
  const optional = <span className="normal-case tracking-normal text-ink-muted">{t.optional}</span>;

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="form-title" className="space-y-7">
      <h2 id="form-title" className="text-[2.4rem] sm:text-5xl">
        {t.title}
      </h2>
      <p className="text-ink-muted">
        {t.required} <span aria-hidden="true">*</span>
        <span className="sr-only">{t.requiredSr}</span> {t.requiredEnd}
      </p>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow !text-ink">
            {t.labels.name} <span aria-hidden="true">*</span>
          </label>
          <input {...fieldProps("name")} type="text" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow !text-ink">
            {t.labels.email} <span aria-hidden="true">*</span>
          </label>
          <input {...fieldProps("email")} type="email" autoComplete="email" inputMode="email" required />
        </div>
        <div>
          <label htmlFor="date" className="eyebrow !text-ink">
            {t.labels.date} <span aria-hidden="true">*</span>
          </label>
          <input {...fieldProps("date")} ref={dateRef} type="date" required />
          <p id="date-hint" className="mt-2 text-sm text-ink-muted">
            {t.dateHint}
          </p>
        </div>
        <div>
          <label htmlFor="venue" className="eyebrow !text-ink">
            {t.labels.venue} {optional}
          </label>
          <input {...fieldProps("venue")} type="text" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="guests" className="eyebrow !text-ink">
            {t.labels.guests} {optional}
          </label>
          <input {...fieldProps("guests")} type="number" inputMode="numeric" min={1} max={500} />
          <p id="guests-hint" className="mt-2 text-sm text-ink-muted">
            {t.guestsHint}
          </p>
        </div>
        <div>
          <label htmlFor="package" className="eyebrow !text-ink">
            {t.labels.package} {optional}
          </label>
          <select {...fieldProps("package")} defaultValue="">
            <option value="">{t.notSure}</option>
            {d.services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow !text-ink">
          {t.labels.message} <span aria-hidden="true">*</span>
        </label>
        <textarea {...fieldProps("message")} rows={5} required />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center bg-ink px-8 text-[0.8rem] font-normal uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-[#4a3830] sm:w-auto"
      >
        {t.submit}
      </button>
      <p className="text-sm text-ink-muted">{t.footnote}</p>
    </form>
  );
}
