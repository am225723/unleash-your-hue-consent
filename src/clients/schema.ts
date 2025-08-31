
export type ThemeName = "fullColor" | "monochrome";
export type ClientConfig = {
  id: string;
  theme: ThemeName;
  branding: { title: string; logoUrl: string; logoUrlDark?: string };
  person: { clientName: string; analystName: string };
  roi?: { physicianName?: string };
  payment: { helcimUrl: string; ctaLabel?: string };
  copy?: { subtitle?: string; paragraph1?: string; paragraph2?: string; paragraph3?: string };
};
