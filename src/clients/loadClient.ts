
import type { ClientConfig } from "./schema";
const modules = import.meta.glob("./*.json", { eager: true });
const CLIENTS: Record<string, ClientConfig> = {};
for (const [, mod] of Object.entries(modules)) {
  const cfg = (mod as any).default as ClientConfig | undefined;
  if (cfg?.id) CLIENTS[cfg.id] = cfg;
}
export function resolveClient(id?: string): ClientConfig {
  const key = id?.trim().toLowerCase();
  if (key && CLIENTS[key]) return CLIENTS[key];
  const first = Object.values(CLIENTS)[0];
  if (!first) throw new Error("No client configs found. Add a JSON under src/clients/ (e.g., eric.json).");
  return first;
}
export function getParam(name: string, fallback: string) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name) ?? fallback;
}
export function listClients(): string[] { return Object.keys(CLIENTS).sort(); }
