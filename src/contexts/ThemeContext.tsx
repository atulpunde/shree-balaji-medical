import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ColorTheme, Mode, ThemeContextValue } from "../types";

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const THEMES: ColorTheme[] = ["trustTech", "medFresh", "genZBold"];

const DEFAULT_THEME: ColorTheme = "genZBold";
const DEFAULT_MODE: Mode = "dark";

// Session-only: no localStorage/sessionStorage persistence.
// Every full page reload always starts from Gen-Z Bold + Dark.
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(DEFAULT_THEME);
  const [mode, setMode] = useState<Mode>(DEFAULT_MODE);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorTheme);
    document.documentElement.setAttribute("data-mode", mode);
  }, [colorTheme, mode]);

  const cycleTheme = () => {
    const idx = THEMES.indexOf(colorTheme);
    setColorTheme(THEMES[(idx + 1) % THEMES.length]);
  };

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ colorTheme, mode, cycleTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
