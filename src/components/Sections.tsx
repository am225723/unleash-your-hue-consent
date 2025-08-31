
import React from "react";
import type { Theme } from "./theme";
import { Card, SectionTitle, LabeledField, LinkButton } from "./ui";
import SignaturePad from "./SignaturePad";

export function ConsentSection({ theme, clientName, setClientName, analystName, setAnalystName }:
{ theme: Theme; clientName: string; setClientName: (v: string) => void; analystName: string; setAnalystName: (v: string) => void; }) {
  return (
    <Card theme={theme}>
      <SectionTitle theme={theme}>Consent for Mental Wellbeing Services</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">
        <LabeledField theme={theme} label="Client" value={clientName} onChange={(e) => setClientName(e.currentTarget.value)} />
        <LabeledField theme={theme} label="Analyst" value={analystName} onChange={(e) => setAnalystName(e.currentTarget.value)} />
      </div>
      <p className={`mt-3 ${theme.textMain}`}>I authorize <strong>{analystName}</strong> to provide <strong>mental wellbeing services</strong>. I understand these services may involve difficult emotions. While there are no guarantees of outcome, the intent is to support growth, reduce distress, and improve wellbeing.</p>
    </Card>
  );
}

export function ConfidentialitySection({ theme }: { theme: Theme }) {
  return (
    <Card theme={theme}>
      <SectionTitle theme={theme}>Confidentiality</SectionTitle>
      <p className={theme.textMain}>Conversations and records are confidential, except as required by law. No information is released without written consent unless permitted or required by law. See HIPAA Notice below.</p>
    </Card>
  );
}

export function ROISection({ theme, roi, setRoi, analystName, physicianName = "Douglas Zelisko, M.D." }:
{ theme: Theme; roi: "yes" | "no" | ""; setRoi: (v: "yes" | "no") => void; analystName: string; physicianName?: string; }) {
  return (
    <Card theme={theme}>
      <SectionTitle theme={theme}>Release of Information (ROI)</SectionTitle>
      <p className={`mb-2 ${theme.textMain}`}>If relevant, I may authorize coordination between my Analyst and <strong>{physicianName}</strong></p>
      <div className="flex flex-wrap items-center gap-6">
        <label className={`flex cursor-pointer items-center gap-3 ${theme.textMain}`}>
          <input type="radio" name="roi" value="yes" checked={roi === "yes"} onChange={() => setRoi("yes")} />
          <span className="font-semibold">I consent to allow communication between {analystName} and {physicianName}.</span>
        </label>
        <label className={`flex cursor-pointer items-center gap-3 ${theme.textMain}`}>
          <input type="radio" name="roi" value="no" checked={roi === "no"} onChange={() => setRoi("no")} />
          <span className="font-semibold">I do not consent at this time.</span>
        </label>
      </div>
      <p className={`mt-2 text-sm ${theme.textMuted}`}>You may revoke this release at any time in writing.</p>
    </Card>
  );
}

export function DutySection({ theme }: { theme: Theme }) {
  return (
    <Card theme={theme}>
      <SectionTitle theme={theme}>Duty to Warn / Protect</SectionTitle>
      <p className={theme.textMain}>If my Analyst believes I am at risk of harming myself or others, or others are in danger, they are required by law to notify appropriate authorities.</p>
    </Card>
  );
}

export function HIPAASection({ theme }: { theme: Theme }) {
  return (
    <Card theme={theme}>
      <SectionTitle theme={theme}>HIPAA Notice of Privacy Practices</SectionTitle>
      <p className={theme.textMain}><strong>Uses & Disclosures:</strong> PHI may be used for treatment, payment, and operations. PHI may be disclosed without authorization as permitted by law.</p>
      <p className={theme.textMain}><strong>Your Rights:</strong> Access/copy records, request amendments and restrictions, request confidential communications, and receive an accounting of disclosures.</p>
      <p className={theme.textMain}><strong>Our Duties:</strong> We must maintain privacy, provide this Notice, and follow it. We will notify you after any breach of unsecured PHI as required by law.</p>
      <p className={theme.textMain}><strong>Complaints:</strong> You may file a complaint with HHS OCR without retaliation.</p>
      <p className={`italic ${theme.textMuted}`}>A complete Notice of Privacy Practices is available upon request.</p>
    </Card>
  );
}

export function PaymentSection({ theme, helcimUrl }: { theme: Theme; helcimUrl: string; }) {
  return (
    <Card theme={theme}>
      <SectionTitle theme={theme}>Unique Payment Policy (Eric)</SectionTitle>
      <p className={theme.textMain}>There is no set flat fee. <strong>You set the amount</strong>. <strong>You set the frequency</strong>. You decide if our time together felt therapeutic or valuable, and you contribute accordingly.</p>
      <p className={theme.textMain}>This is not about a transaction. It’s about me showing up for you, because I want to. Use the contribution button below when and if you feel inclined to give.</p>
      <LinkButton theme={theme} href={helcimUrl} target="_blank" rel="noopener noreferrer" className="mt-2">Make a Contribution</LinkButton>
    </Card>
  );
}

export function Footer({ theme }: { theme: Theme }) {
  return (
    <footer className="pb-8 text-center text-sm">
      <div className={`font-extrabold ${theme.watermark}`}>Unleash Your Hue – Confidential</div>
      <div className={`${theme.textMuted} mt-1`}>Tip: Use your browser’s Print → Save as PDF to archive a signed copy.</div>
    </footer>
  );
}
