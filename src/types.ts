import type { IconType } from "react-icons";

export interface Branch {
  id: string;
  name: string;
  area: string;
  whatsapp: string;
  mapsUrl: string;
}

export interface ItemTypeEntry {
  label: string;
  icon: IconType;
}

export interface TrustBadgeEntry {
  title: string;
  desc: string;
}

export interface TestimonialEntry {
  name: string;
  text: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}

export interface StoreStatus {
  isOpen: boolean;
  label: string;
  subLabel: string;
}

export type ColorTheme = "trustTech" | "medFresh" | "genZBold";
export type Mode = "dark" | "light";

export interface ThemeContextValue {
  colorTheme: ColorTheme;
  mode: Mode;
  cycleTheme: () => void;
  toggleMode: () => void;
}
