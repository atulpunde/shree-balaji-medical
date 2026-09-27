import { branches } from "../data/branches";
import BranchCard from "./BranchCard";

export default function Branches() {
  return (
    <section id="branches" style={{ background: "var(--bg-alt)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span className="kicker">📍 Find us</span>
          <h2 className="section-heading" style={{ marginTop: 14 }}>
            Our Branches
          </h2>
        </div>

        <div
          className="bento-branches"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 22,
          }}
        >
          {branches.map((b, i) => (
            <div
              key={b.id}
              className="bento-item"
              style={
                i === 0
                  ? { gridColumn: "1", gridRow: "1 / 3" }
                  : i === 1
                  ? { gridColumn: "2", gridRow: "1" }
                  : { gridColumn: "2", gridRow: "2" }
              }
            >
              <BranchCard branch={b} index={i} featured={i === 0} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .bento-branches {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .bento-branches .bento-item {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
