"use client";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

const FORM_SUBMIT_ENDPOINT = "https://formsubmit.co/info@adonixdigital.com";

export function ContactForm({ t }: { t: Dictionary }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (sent) return <div className="form-success">{t.contact.success}</div>;

  return (
    <form
      className="contact-form"
      onSubmit={async (event) => {
        event.preventDefault();

        if (submitting) return;

        const form = event.currentTarget;
        setSubmitting(true);

        try {
          await fetch(FORM_SUBMIT_ENDPOINT, {
            method: "POST",
            mode: "no-cors",
            body: new FormData(form),
          });

          setSent(true);
        } catch {
          setSubmitting(false);
        }
      }}
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New Project Inquiry - Adonix Digital" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://adonixdigital.com/thank-you" />

      <div className="field-grid">
        <label>{t.contact.name}<input required name="name" /></label>
        <label>{t.contact.email}<input required name="email" type="email" /></label>
        <label>{t.contact.phone}<input name="phone" type="tel" dir="ltr" /></label>
        <label>{t.contact.company}<input name="company" /></label>
        <label>{t.contact.projectType}<select name="projectType" defaultValue=""><option value="" disabled>{t.contact.select}</option>{t.contact.types.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label>{t.contact.budget}<select name="budget" defaultValue=""><option value="" disabled>{t.contact.select}</option>{t.contact.budgets.map((budget) => <option key={budget}>{budget}</option>)}</select></label>
      </div>
      <label>{t.contact.message}<textarea required name="message" rows={4} /></label>
      <button className="button button-solid" type="submit" disabled={submitting} aria-busy={submitting}>{t.contact.send}</button>
    </form>
  );
}
