import type { CSSProperties } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FaPalette, FaSun, FaMoon } from "react-icons/fa";
import type { ColorTheme } from "../types";

const themeLabels: Record<ColorTheme, string> = {
  trustTech: "Trust Tech",
  medFresh: "Med Fresh",
  genZBold: "Gen-Z Bold",
};

export default function ThemeToggle() {
  const { colorTheme, mode, cycleTheme, toggleMode } = useTheme();

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button onClick={cycleTheme} title="Switch color theme (this session only)" style={pillStyle}>
        <FaPalette /> {themeLabels[colorTheme]}
      </button>
      <button onClick={toggleMode} title="Toggle light/dark" style={iconBtnStyle}>
        {mode === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

const pillStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  background: "var(--card)",
  border: "2.5px solid var(--border)",
  color: "var(--text)",
  padding: "8px 14px",
  borderRadius: 999,
  cursor: "pointer",
  fontSize: 13,
  fontWeight: 700,
  boxShadow: "3px 3px 0 var(--border)",
};

const iconBtnStyle: CSSProperties = {
  ...pillStyle,
  padding: "8px 10px",
};
