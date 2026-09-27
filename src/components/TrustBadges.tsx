import { motion } from "framer-motion";

const stats = [
  { value: "100%", label: "Genuine Products" },
  { value: "24×7", label: "Always Open" },
  { value: "3", label: "Susgaon Branches" },
  { value: "1000+", label: "Happy Customers" },
];

export default function TrustBadges() {
  return (
    <section style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            style={{
              textAlign: "center",
              padding: "0 32px",
              borderRight: i < stats.length - 1 ? "2px dashed var(--border)" : "none",
              flex: "1 1 160px",
            }}
          >
            <div
              className="gradient-text"
              style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900 }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", marginTop: 4 }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          section > .container > div { border-right: none !important; padding: 12px 20px !important; }
        }
      `}</style>
    </section>
  );
}
