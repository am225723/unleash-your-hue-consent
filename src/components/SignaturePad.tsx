
import React, { useEffect, useRef, useState } from "react";
import type { Theme } from "./theme";
import { Button } from "./ui";
export default function SignaturePad({ theme, id, label, ink = "#111", inkDark = "#fff" }:
{ theme: Theme; id: string; label: string; ink?: string; inkDark?: string; }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasDrawing, setHasDrawing] = useState(false);
  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    let drawing = false; let prev: { x: number; y: number } | null = null;
    function resize() {
      const dpr = window.devicePixelRatio || 1; const rect = c.getBoundingClientRect();
      c.width = rect.width * dpr; c.height = rect.height * dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
      ctx.lineWidth = 2; ctx.lineCap = "round"; ctx.strokeStyle = theme.name === "monochrome" ? inkDark : ink;
    }
    resize(); const ro = new ResizeObserver(resize); ro.observe(c);
    const pos = (e: MouseEvent | TouchEvent) => { const r = c.getBoundingClientRect();
      if (e instanceof TouchEvent && e.touches.length) return { x: e.touches[0].clientX - r.left, y: e.touches[0].clientY - r.top };
      const me = e as MouseEvent; return { x: me.clientX - r.left, y: me.clientY - r.top }; };
    const start = (e: any) => { drawing = true; prev = pos(e); e.preventDefault(); };
    const move = (e: any) => { if (!drawing || !prev) return; const p = pos(e);
      ctx.beginPath(); ctx.moveTo(prev.x, prev.y); ctx.lineTo(p.x, p.y); ctx.stroke(); prev = p; setHasDrawing(true); e.preventDefault(); };
    const end = (e: any) => { drawing = false; prev = null; e.preventDefault(); };
    c.addEventListener("mousedown", start); window.addEventListener("mousemove", move); window.addEventListener("mouseup", end);
    c.addEventListener("touchstart", start, { passive: false }); c.addEventListener("touchmove", move, { passive: false }); c.addEventListener("touchend", end, { passive: false });
    return () => { ro.disconnect(); c.removeEventListener("mousedown", start); window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", end);
      c.removeEventListener("touchstart", start); c.removeEventListener("touchmove", move); c.removeEventListener("touchend", end); };
  }, [theme, ink, inkDark]);
  const onClear = () => { const c = canvasRef.current!; const ctx = c.getContext("2d")!; ctx.clearRect(0,0,c.width,c.height); setHasDrawing(false); };
  const onUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]; if (!file) return; const reader = new FileReader();
    reader.onload = (ev) => { const img = new Image(); img.onload = () => { const c = canvasRef.current!; const ctx = c.getContext("2d")!;
        const scale = Math.min(c.width / img.width, c.height / img.height); const w = img.width * scale; const h = img.height * scale;
        const x = (c.width - w) / 2; const y = (c.height - h) / 2; ctx.clearRect(0,0,c.width,c.height); ctx.drawImage(img,x,y,w,h); setHasDrawing(true); };
      img.src = String(ev.target?.result); }; reader.readAsDataURL(file); };
  return (
    <div className={`rounded-2xl ${theme.card} border ${theme.border} p-4 shadow-xl`}>
      <label className={`mb-2 block font-semibold ${theme.textMain}`}>{label}</label>
      <div className="flex flex-wrap items-center gap-3">
        <Button theme={theme} type="button" onClick={onClear}>Clear</Button>
        <label className={`text-sm ${theme.textMuted}`}>or Upload Image
          <input type="file" accept="image/*" onChange={onUpload} className="ml-2 cursor-pointer text-sm"/></label>
        {hasDrawing && <span className="text-teal-500 text-sm">✓ captured</span>}
      </div>
      <div className={`mt-3 rounded-xl border ${theme.border} ${theme.name === "monochrome" ? "bg-black/40" : "bg-white"}`}>
        <canvas ref={canvasRef} className="h-[170px] w-full rounded-xl touch-none" />
      </div>
    </div>
  );
}
