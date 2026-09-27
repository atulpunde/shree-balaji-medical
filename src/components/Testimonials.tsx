import { testimonials } from "../data/content";

const loop = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section style={{ overflow: "hidden", background: "var(--bg-alt)" }}>
      <div className="container" style={{ textAlign: "center", marginBottom: 36 }}>
        <span className="kicker">💬 Word on the street</span>
        <h2 className="section-heading" style={{ marginTop: 14 }}>
          What Our Customers Say
        </h2>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div className="marquee-track marquee-left" style={{ gap: 20 }}>
          {loop.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="card-neo"
              style={{
                width: 280,
                flexShrink: 0,
                padding: 22,
                margin: "0 10px",
                transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
              }}
            >
              <div style={{ fontSize: 32, color: "var(--primary)", lineHeight: 0.5 }}>“</div>
              <p style={{ fontSize: 14, color: "var(--text-muted)", margin: "10px 0 14px" }}>
                {t.text}
              </p>
              <strong style={{ fontSize: 13 }}>— {t.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
