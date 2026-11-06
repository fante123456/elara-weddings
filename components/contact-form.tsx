"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { packages } from "@/lib/content";

type Field = "name" | "email" | "date" | "venue" | "guests" | "package" | "message";
type Errors = Partial<Record<Field, string>>;

const labels: Record<Field, string> = {
  name: "Your names",
  email: "Email address",
  date: "Wedding date",
  venue: "Venue",
  guests: "Guest count",
  package: "Package of interest",
  message: "Tell me about your day",
};

function todayISO() {
  const d = new Date();
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function validate(data: FormData, today: string): Errors {
  const v = (k: Field) => String(data.get(k) ?? "").trim();
  const e: Errors = {};
  if (v("name").length < 2) e.name = "Please enter your names.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) e.email = "Please enter a valid email address, like name@example.com.";
  const date = v("date");
  if (!date) e.date = "Please choose your wedding date.";
  else if (date < today) e.date = "Please choose a date in the future.";
  const guests = v("guests");
  if (guests && (!/^\d+$/.test(guests) || +guests < 1 || +guests > 500)) e.guests = "Please enter a number between 1 and 500.";
  if (v("message").length < 10) e.message = "Please write a short message (at least 10 characters).";
  return e;
}

const inputBase =
  "mt-2 block min-h-12 w-full border bg-ivory px-4 py-3 text-base font-light text-ink placeholder:text-ink-muted/70 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<{ name: string; date: string } | null>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const thanksRef = useRef<HTMLHeadingElement>(null);

  // "Today" is only computed in the browser, so the page stays fully static
  useEffect(() => {
    if (dateRef.current) dateRef.current.min = todayISO();
  }, [sent]);
  useEffect(() => {
    if (sent) thanksRef.current?.focus();
  }, [sent]);

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const found = validate(data, todayISO());
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    const date = new Date(String(data.get("date")) + "T12:00:00").toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setSent({ name: String(data.get("name")).trim(), date });
  };

  const onBlur = (field: Field, value: string) => {
    if (!errors[field]) return;
    const fd = new FormData();
    fd.set(field, value);
    const again = validate(fd, todayISO())[field];
    if (!again) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  if (sent) {
    return (
      <div role="status" className="border border-ink/15 bg-blush p-8 sm:p-10">
        <h2 ref={thanksRef} tabIndex={-1} className="text-4xl focus:outline-none">
          Thank you, {sent.name}
        </h2>
        <p className="mt-4">
          Your enquiry for <strong className="font-normal">{sent.date}</strong> is ready. As this is a demo site for a
          fictional studio, nothing was sent and no data was stored.
        </p>
        <button
          type="button"
          onClick={() => setSent(null)}
          className="link-underline mt-6 text-[0.8rem] font-normal uppercase tracking-[0.18em]"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const errorList = (Object.entries(errors) as [Field, string | undefined][]).filter(([, m]) => m);
  const fieldProps = (f: Field) => ({
    id: f,
    name: f,
    "aria-invalid": errors[f] ? true : undefined,
    "aria-describedby": [errors[f] ? `${f}-error` : "", f === "date" || f === "guests" ? `${f}-hint` : ""]
      .filter(Boolean)
      .join(" ") || undefined,
    className: `${inputBase} ${errors[f] ? "border-[#8a3b3b]" : "border-ink/25"}`,
    onBlur: (e: { currentTarget: { value: string } }) => onBlur(f, e.currentTarget.value),
  });
  const err = (f: Field) =>
    errors[f] ? (
      <p id={`${f}-error`} className="mt-2 text-sm font-normal text-[#8a3b3b]">
        {errors[f]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="form-title" className="space-y-7">
      <h2 id="form-title" className="text-[2.4rem] sm:text-5xl">
        Check availability
      </h2>
      <p className="text-ink-muted">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      {errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="border-l-2 border-[#8a3b3b] bg-blush px-5 py-4 focus:outline-none">
          <p className="font-normal">Please check {errorList.length === 1 ? "one field" : `${errorList.length} fields`}:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {errorList.map(([f, m]) => (
              <li key={f}>
                <a href={`#${f}`} className="underline underline-offset-4">
                  {labels[f]}: {m}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow !text-ink">
            {labels.name} <span aria-hidden="true">*</span>
          </label>
          <input {...fieldProps("name")} type="text" autoComplete="name" required />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="eyebrow !text-ink">
            {labels.email} <span aria-hidden="true">*</span>
          </label>
          <input {...fieldProps("email")} type="email" autoComplete="email" inputMode="email" required />
          {err("email")}
        </div>
        <div>
          <label htmlFor="date" className="eyebrow !text-ink">
            {labels.date} <span aria-hidden="true">*</span>
          </label>
          <input {...fieldProps("date")} ref={dateRef} type="date" required />
          <p id="date-hint" className="mt-2 text-sm text-ink-muted">
            An approximate date is fine.
          </p>
          {err("date")}
        </div>
        <div>
          <label htmlFor="venue" className="eyebrow !text-ink">
            {labels.venue} <span className="normal-case tracking-normal text-ink-muted">(optional)</span>
          </label>
          <input {...fieldProps("venue")} type="text" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="guests" className="eyebrow !text-ink">
            {labels.guests} <span className="normal-case tracking-normal text-ink-muted">(optional)</span>
          </label>
          <input {...fieldProps("guests")} type="number" inputMode="numeric" min={1} max={500} />
          <p id="guests-hint" className="mt-2 text-sm text-ink-muted">
            Roughly how many guests.
          </p>
          {err("guests")}
        </div>
        <div>
          <label htmlFor="package" className="eyebrow !text-ink">
            {labels.package} <span className="normal-case tracking-normal text-ink-muted">(optional)</span>
          </label>
          <select {...fieldProps("package")} defaultValue="">
            <option value="">Not sure yet</option>
            {packages.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow !text-ink">
          {labels.message} <span aria-hidden="true">*</span>
        </label>
        <textarea {...fieldProps("message")} rows={5} required />
        {err("message")}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center bg-ink px-8 text-[0.8rem] font-normal uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-[#4a3830] sm:w-auto"
      >
        Check availability
      </button>
      <p className="text-sm text-ink-muted">Demo form: nothing is sent or stored.</p>
    </form>
  );
}
