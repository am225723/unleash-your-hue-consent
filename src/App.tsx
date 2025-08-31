
import React, { useEffect, useMemo, useState } from "react";
import Packet from "./components/Packet";
import PrintPacket from "./print/PrintPacket";
import type { ClientConfig } from "./clients/schema";
import { resolveClient, getParam, listClients } from "./clients/loadClient";

type Mode = "interactive" | "print";

export default function App() {
  const [mode, setMode] = useState<Mode>((getParam("mode", "interactive") as Mode) || "interactive");
  const [config, setConfig] = useState<ClientConfig>(() => resolveClient(getParam("client", "eric")));
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("mode", mode);
    url.searchParams.set("client", config.id);
    window.history.replaceState({}, "", url.toString());
  }, [mode, config]);

  const tabBtn = "text-sm px-3 py-1.5 rounded-lg border border-black/10 bg-white font-semibold shadow hover:bg-zinc-50";
  const allIds = useMemo(() => listClients(), []);

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b border-black/10 bg-white/90 px-4 py-2 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-zinc-500">Mode:</span>
          <button className={`${tabBtn} ${mode === "interactive" ? "ring-2 ring-teal-500" : ""}`} onClick={() => setMode("interactive")}>Interactive</button>
          <button className={`${tabBtn} ${mode === "print" ? "ring-2 ring-teal-500" : ""}`} onClick={() => setMode("print")}>Print Mode</button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-zinc-500">Client:</span>
          <select className="rounded-md border border-black/10 bg-white px-2 py-1 text-sm" value={config.id} onChange={(e) => setConfig(resolveClient(e.currentTarget.value))}>
            {allIds.map((id) => (<option key={id} value={id}>{id}</option>))}
          </select>
          <a href={`?mode=${mode}&client=${config.id}`} className="text-xs text-blue-600 underline" title="Shareable link">Copy link</a>
        </div>
      </div>

      {mode === "interactive" ? (
        <Packet config={config} />
      ) : (
        <div className="mx-auto max-w-[800px] px-6 py-6 print:px-0">
          <PrintPacket />
          <div className="mt-4 text-center text-xs text-zinc-500">Tip: In your browser use <strong>Print → Save as PDF</strong>.</div>
        </div>
      )}
    </div>
  );
}
