
export type Theme = {
  name: "fullColor" | "monochrome";
  heroBg: string; pageBg: string; titleGradient: string; accentBar: string;
  card: string; border: string; textMain: string; textMuted: string;
  buttonGrad: string; buttonText: string; input: string; inputFocus: string; watermark: string;
};
export const fullColor: Theme = {
  name:"fullColor",
  heroBg:"linear-gradient(135deg, rgba(216,27,96,.25), rgba(255,138,0,.20) 45%, rgba(0,191,166,.20))",
  pageBg:"radial-gradient(1200px 600px at 10% -10%, rgba(216,27,96,.08), transparent 60%), radial-gradient(900px 500px at 90% 0%, rgba(0,191,166,.1), transparent 60%), linear-gradient(180deg,#fff,#fafafa)",
  titleGradient:"bg-gradient-to-r from-pink-600 via-orange-500 to-teal-500",
  accentBar:"bg-gradient-to-r from-pink-600 via-orange-500 to-teal-500",
  card:"bg-white", border:"border-black/10", textMain:"text-zinc-900", textMuted:"text-zinc-600",
  buttonGrad:"bg-gradient-to-r from-pink-600 via-orange-500 to-teal-500 hover:brightness-110", buttonText:"text-white",
  input:"rounded-xl border border-black/10 bg-white px-3 py-2 text-zinc-900 outline-none", inputFocus:"focus:ring-2 focus:ring-teal-500",
  watermark:"text-teal-600",
};
export const monochrome: Theme = {
  name:"monochrome",
  heroBg:"linear-gradient(135deg, rgba(46,0,62,.45), rgba(10,35,66,.40) 45%, rgba(0,0,0,.45))",
  pageBg:"radial-gradient(1200px 600px at 10% -10%, rgba(46,0,62,.22), transparent 60%), radial-gradient(900px 500px at 90% 0%, rgba(10,35,66,.22), transparent 60%), linear-gradient(180deg,#0b0b0d,#090a0f)",
  titleGradient:"bg-[linear-gradient(90deg,#CAB2FF,#7F7BFF,#6FD3FF)]",
  accentBar:"bg-[linear-gradient(90deg,#2E003E,#0A2342,#000000)]",
  card:"bg-zinc-900/60 backdrop-blur", border:"border-white/10", textMain:"text-zinc-100", textMuted:"text-zinc-400",
  buttonGrad:"bg-[linear-gradient(90deg,#2E003E,#0A2342,#000000)] hover:brightness-110", buttonText:"text-white",
  input:"rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-zinc-100 outline-none", inputFocus:"focus:ring-2 focus:ring-indigo-400",
  watermark:"text-indigo-300",
};
