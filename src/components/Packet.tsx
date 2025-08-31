
import React, { useState } from "react";
import { fullColor, monochrome, type Theme } from "./theme";
import { Hero } from "./Hero";
import { ConsentSection, ConfidentialitySection, ROISection, DutySection, HIPAASection, PaymentSection, Footer } from "./Sections";
import type { ClientConfig } from "../clients/schema";

export default function Packet({ config }: { config: ClientConfig }) {
  const theme: Theme = config.theme === "monochrome" ? monochrome : fullColor;
  const [roi, setRoi] = useState<"yes" | "no" | "">("");
  const logoForTheme = config.theme === "monochrome" && config.branding.logoUrlDark ? config.branding.logoUrlDark : config.branding.logoUrl;

  return (
    <div style={{ background: theme.pageBg }} className="min-h-screen w-full">
      <Hero theme={theme} logoUrl={logoForTheme} helcimUrl={config.payment.helcimUrl} title={config.branding.title}
        subtitle={config.copy?.subtitle ?? `A personal message to ${config.person.clientName} • From ${config.person.analystName}, Analyst`}
        paragraph1={config.copy?.paragraph1} paragraph2={config.copy?.paragraph2} paragraph3={config.copy?.paragraph3} ctaLabel={config.payment.ctaLabel} />

      <main id="consent" className="mx-auto -mt-10 max-w-[980px] space-y-6 px-6 pb-12">
        <ConsentSection theme={theme} clientName={config.person.clientName} setClientName={()=>{}} analystName={config.person.analystName} setAnalystName={()=>{}} />
        <ConfidentialitySection theme={theme} />
        <ROISection theme={theme} roi={roi} setRoi={(v)=>setRoi(v)} analystName={config.person.analystName} physicianName={config.roi?.physicianName} />
        <DutySection theme={theme} />
        <HIPAASection theme={theme} />
        <PaymentSection theme={theme} helcimUrl={config.payment.helcimUrl} />
        <Footer theme={theme} />
      </main>
    </div>
  );
}
