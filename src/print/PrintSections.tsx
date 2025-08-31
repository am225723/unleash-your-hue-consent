
import React from "react";
import type { PrintTheme } from "./PrintTheme";
import { PrintCard, PrintSectionTitle, PrintField } from "./PrintUI";
export function PrintConsent({ theme }: { theme: PrintTheme }) {
  return (<PrintCard theme={theme}><PrintSectionTitle theme={theme}>Consent for Mental Wellbeing Services</PrintSectionTitle>
    <p className={theme.textMain}>I authorize Aleixander M. Puerta to provide mental wellbeing services…</p></PrintCard>);
}
export function PrintConfidentiality({ theme }: { theme: PrintTheme }) {
  return (<PrintCard theme={theme}><PrintSectionTitle theme={theme}>Confidentiality</PrintSectionTitle>
    <p className={theme.textMain}>Conversations and records are confidential, except as required by law…</p></PrintCard>);
}
export function PrintROI({ theme }: { theme: PrintTheme }) {
  return (<PrintCard theme={theme}><PrintSectionTitle theme={theme}>Release of Information (ROI)</PrintSectionTitle>
    <p className={theme.textMain}>Optionally, coordination with Douglas Zelisko, M.D.</p>
    <div className="mt-2 text-sm text-gray-700">[ ] Consent given  [ ] No consent</div></PrintCard>);
}
export function PrintDuty({ theme }: { theme: PrintTheme }) {
  return (<PrintCard theme={theme}><PrintSectionTitle theme={theme}>Duty to Warn / Protect</PrintSectionTitle>
    <p className={theme.textMain}>If at risk of harm, authorities may be notified.</p></PrintCard>);
}
export function PrintHIPAA({ theme }: { theme: PrintTheme }) {
  return (<PrintCard theme={theme}><PrintSectionTitle theme={theme}>HIPAA Notice of Privacy Practices</PrintSectionTitle>
    <p className={theme.textMain}>Summary of uses/disclosures, rights, and duties.</p></PrintCard>);
}
export function PrintPayment({ theme }: { theme: PrintTheme }) {
  return (<PrintCard theme={theme}><PrintSectionTitle theme={theme}>Unique Payment Policy (Eric)</PrintSectionTitle>
    <p className={theme.textMain}>You set the amount and frequency.</p></PrintCard>);
}
export function PrintSignatures({ theme }: { theme: PrintTheme }) {
  return (<PrintCard theme={theme}><PrintSectionTitle theme={theme}>Signatures</PrintSectionTitle>
    <PrintField theme={theme} label="Client Name" /><PrintField theme={theme} label="Client Signature" /><PrintField theme={theme} label="Date" />
    <hr className="my-3 border-gray-400" /><PrintField theme={theme} label="Analyst Name" /><PrintField theme={theme} label="Analyst Signature" /><PrintField theme={theme} label="Date" /></PrintCard>);
}
export function PrintFooter({ theme }: { theme: PrintTheme }) { return <footer className="pt-4 text-center text-xs"><div className={`font-bold ${theme.watermark}`}>Unleash Your Hue – Confidential</div></footer>; }
