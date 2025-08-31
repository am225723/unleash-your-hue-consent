
import React from "react";
import type { Theme } from "./theme";
import { Container, LinkButton } from "./ui";
export function Hero({ theme, logoUrl, helcimUrl, title = "Unleash Your Hue", subtitle = "A personal message • From Aleixander M. Puerta, Analyst", paragraph1, paragraph2, paragraph3, ctaLabel = "Make a Contribution" }:
{ theme: Theme; logoUrl: string; helcimUrl: string; title?: string; subtitle?: string; paragraph1?: string; paragraph2?: string; paragraph3?: string; ctaLabel?: string; }) {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-12 shadow" style={{ background: theme.heroBg }}>
      <Container>
        <div className="grid grid-cols-[108px_1fr] items-center gap-4">
          <img src={logoUrl} alt="Brand logo" className={`h-[108px] w-[108px] rounded-3xl border ${theme.border} ${theme.name === "monochrome" ? "bg-black/40" : "bg-white"} object-contain shadow-xl`} />
          <div>
            <h1 className={`${theme.titleGradient} bg-clip-text text-4xl font-black tracking-tight text-transparent`}>{title}</h1>
            <p className={`mt-1 font-semibold ${theme.textMain}`}>{subtitle}</p>
          </div>
        </div>
        <div className={`mt-5 rounded-2xl border ${theme.border} ${theme.card} p-6 shadow-xl ${theme.name === "monochrome" ? "backdrop-blur" : ""}`}>
          {paragraph1 && (<p className={`${theme.textMain} mb-2`}>{paragraph1}</p>)}
          {paragraph2 && (<p className={`${theme.textMain} mb-2`}>{paragraph2}</p>)}
          {paragraph3 && (<p className={theme.textMain}>{paragraph3}</p>)}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <LinkButton theme={theme} href={helcimUrl} target="_blank" rel="noopener noreferrer">{ctaLabel}</LinkButton>
            <a href="#consent" className={`rounded-xl border ${theme.border} ${theme.buttonText} ${theme.name === "monochrome" ? "bg-black/40" : "bg-white"} px-4 py-2 font-extrabold shadow`}>Jump to Consent</a>
            <a onClick={() => window.print()} className={`cursor-pointer rounded-xl border ${theme.border} ${theme.buttonText} ${theme.name === "monochrome" ? "bg-black/40" : "bg-white"} px-4 py-2 font-extrabold shadow`}>Print / Save as PDF</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
