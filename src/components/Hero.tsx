import { motion } from "framer-motion";
import { FaPills, FaBaby, FaIceCream, FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section style={{ paddingTop: 64, overflow: "hidden" }}>
      <div
        className="blob"
        style={{ width: 420, height: 420, top: -160, left: -140, background: "var(--primary-glow)" }}
      />
      <div
        className="blob"
        style={{ width: 360, height: 360, top: 40, right: -160, background: "var(--accent)", opacity: 0.25, animationDelay: "2s" }}
      />

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 40,
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {/* LEFT: bold asymmetric copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="kicker"
          >
            🩺 Susgaon's most-loved pharmacy
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-heading"
            style={{ marginTop: 20 }}
          >
            Skip the
            <br />
            counter.
            <br />
            <span className="gradient-text">Just chat.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              marginTop: 22,
              color: "var(--text-muted)",
              fontSize: 17,
              maxWidth: 460,
            }}
          >
            Medicines, wellness essentials & daily needs — genuine products,
            pharmacist-checked, delivered to your door. No app, no cart, no
            queue. Just message us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <a href="#branches" className="btn-whatsapp" style={{ fontSize: 16 }}>
              Start Chatting →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              marginTop: 34,
              display: "flex",
              gap: 22,
              flexWrap: "wrap",
              fontSize: 13,
              fontWeight: 700,
              color: "var(--text-muted)",
            }}
          >
            {["3 branches", "Open 24×7", "100% genuine"].map((s) => (
              <span key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <FaCheckCircle color="var(--primary)" /> {s}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: fake WhatsApp chat mockup with floating item stickers */}
        <div style={{ position: "relative", minHeight: 380 }}>
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card-neo"
            style={{
              maxWidth: 320,
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "#1f2c34",
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#25d366,#128c7e)",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Shree Balaji Medical</div>
                <div style={{ color: "#8fd3b8", fontSize: 11 }}>● online</div>
              </div>
            </div>

            <div style={{ background: "#0b141a", padding: 16, display: "flex", flexDirection: "column", gap: 10, minHeight: 220 }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                style={{
                  alignSelf: "flex-end",
                  background: "#005c4b",
                  color: "#e9f5ee",
                  padding: "9px 13px",
                  borderRadius: "14px 14px 2px 14px",
                  fontSize: 13,
                  maxWidth: "80%",
                }}
              >
                Hi! Need paracetamol & sunscreen 🙂
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.4 }}
                style={{
                  alignSelf: "flex-start",
                  background: "#1f2c34",
                  color: "#e9edf1",
                  padding: "9px 13px",
                  borderRadius: "14px 14px 14px 2px",
                  fontSize: 13,
                  maxWidth: "80%",
                }}
              >
                Sure! Order packed, arriving in ~20 mins 🛵
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1 }}
                style={{
                  alignSelf: "flex-start",
                  background: "#1f2c34",
                  padding: "10px 14px",
                  borderRadius: "14px 14px 14px 2px",
                  display: "flex",
                  gap: 4,
                }}
              >
                <span className="typing-dot" style={{ animationDelay: "0s" }} />
                <span className="typing-dot" style={{ animationDelay: "0.15s" }} />
                <span className="typing-dot" style={{ animationDelay: "0.3s" }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Floating item stickers around the chat card */}
          {[
            { Icon: FaPills, top: "4%", left: "-6%", delay: 0 },
            { Icon: FaBaby, bottom: "14%", right: "-8%", delay: 0.6 },
            { Icon: FaIceCream, bottom: "-4%", left: "8%", delay: 1.1 },
          ].map(({ Icon, delay, ...pos }, i) => (
            <motion.div
              key={i}
              className="card-neo"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay }}
              style={{
                position: "absolute",
                width: 52,
                height: 52,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "var(--card)",
                ...pos,
              }}
            >
              <Icon size={20} color="var(--primary)" />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          section > .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
