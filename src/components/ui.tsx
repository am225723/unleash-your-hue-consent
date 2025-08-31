
import React from "react";
import type { Theme } from "./theme";
export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[980px] px-6">{children}</div>;
}
export function Card({ theme, children }: { theme: Theme; children: React.ReactNode; }) {
  return <section className={`rounded-2xl ${theme.card} border ${theme.border} p-6 shadow-xl`}>{children}</section>;
}
export function SectionTitle({ theme, children }: { theme: Theme; children: React.ReactNode; }) {
  return (<h2 className={`relative mb-3 pb-2 text-[22px] font-bold ${theme.textMain}`}>
    {children}<span className={`absolute bottom-0 left-0 h-[3px] w-40 rounded ${theme.accentBar}`} /></h2>);
}
export function Button({ theme, children, className = "", ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { theme: Theme }) {
  return (<button className={`rounded-xl px-4 py-2 font-extrabold shadow ${theme.buttonText} ${theme.buttonGrad} ${className}`} {...props}>{children}</button>);
}
export function LinkButton({ theme, children, className = "", ...props }:
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { theme: Theme }) {
  return (<a className={`inline-block rounded-xl px-4 py-2 font-extrabold shadow ${theme.buttonText} ${theme.buttonGrad} ${className}`} {...props}>{children}</a>);
}
export function LabeledField({ theme, label, ...props }:
  React.InputHTMLAttributes<HTMLInputElement> & { theme: Theme; label: string }) {
  return (<div><label className={`mb-1 block font-semibold ${theme.textMain}`}>{label}</label>
    <input className={`${theme.input} ${theme.inputFocus} w-full`} {...props} /></div>);
}
