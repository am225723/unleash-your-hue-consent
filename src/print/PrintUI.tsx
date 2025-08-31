
import React from "react";
import type { PrintTheme } from "./PrintTheme";
export function PrintContainer({ children }: { children: React.ReactNode }) { return <div className="mx-auto max-w-[720px] px-4">{children}</div>; }
export function PrintCard({ theme, children }: { theme: PrintTheme; children: React.ReactNode; }) { return <section className={`mb-4 rounded-md border ${theme.border} p-4`} style={{boxShadow:'none',background:'white'}}>{children}</section>; }
export function PrintSectionTitle({ theme, children }: { theme: PrintTheme; children: React.ReactNode; }) { return <h2 className={`mb-2 text-lg font-bold ${theme.textMain}`}>{children}</h2>; }
export function PrintField({ theme, label, value }: { theme: PrintTheme; label: string; value?: string; }) {
  return (<div className="mb-2"><label className={`block text-sm font-semibold ${theme.textMain}`}>{label}</label>
    <div className="mt-1 border-b border-dotted border-gray-500 pb-1 text-sm">{value || "\u00A0"}</div></div>);
}
