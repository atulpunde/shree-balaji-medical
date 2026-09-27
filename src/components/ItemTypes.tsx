import { itemTypes } from "../data/content";

export default function ItemTypes() {
  const rowA = itemTypes.slice(0, 5);
  const rowB = itemTypes.slice(5);
  const loopA = [...rowA, ...rowA];
  const loopB = [...rowB, ...rowB];

  return (
    <section style={{ overflow: "hidden" }}>
      <div className="container" style={{ textAlign: "center", marginBottom: 36 }}>
        <span className="kicker">🛍️ On the shelves</span>
        <h2 className="section-heading" style={{ marginTop: 14 }}>
          What You Can Order
        </h2>
        <p style={{ color: "var(--text-muted)", marginTop: 8 }}>
          Just tell us what you need on WhatsApp — here's a taste of what we stock.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: "100%" }}>
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track marquee-left" style={{ gap: 14 }}>
            {loopA.map(({ label, icon: Icon }, i) => (
              <span
                key={`${label}-${i}`}
                className="sticker-chip"
                style={{ transform: `rotate(${i % 2 === 0 ? -3 : 2}deg)`, margin: "0 7px" }}
              >
                <Icon size={16} color="var(--primary)" /> {label}
              </span>
            ))}
          </div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track marquee-right" style={{ gap: 14 }}>
            {loopB.map(({ label, icon: Icon }, i) => (
              <span
                key={`${label}-${i}`}
                className="sticker-chip"
                style={{ transform: `rotate(${i % 2 === 0 ? 3 : -2}deg)`, margin: "0 7px" }}
              >
                <Icon size={16} color="var(--accent)" /> {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
