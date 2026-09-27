import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "color-mix(in srgb, var(--bg) 82%, transparent)",
        borderBottom: "3px solid var(--border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 72,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 900, fontSize: 19 }}>
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "var(--primary)",
              border: "2.5px solid var(--text)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--bg)",
              transform: "rotate(-6deg)",
              fontSize: 18,
            }}
          >
            B
          </span>
          Shree Balaji <span className="gradient-text">Medical</span>
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
