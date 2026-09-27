import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/content";
import { FaPlus } from "react-icons/fa";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section>
      <div className="container" style={{ maxWidth: 760 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="kicker">❓ Good to know</span>
          <h2 className="section-heading" style={{ marginTop: 14 }}>
            Frequently Asked Questions
          </h2>
        </div>

        {faqs.map((f, i) => (
          <div
            key={f.q}
            style={{
              display: "flex",
              gap: 20,
              borderBottom: "2.5px solid var(--border)",
              padding: "22px 0",
              cursor: "pointer",
            }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span
              className="gradient-text"
              style={{ fontSize: 28, fontWeight: 900, minWidth: 46 }}
            >
              0{i + 1}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <span style={{ fontWeight: 800, fontSize: 17 }}>{f.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  style={{
                    flexShrink: 0,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    border: "2.5px solid var(--text)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaPlus size={12} />
                </motion.span>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: "hidden", color: "var(--text-muted)", marginTop: 12, fontSize: 14 }}
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
