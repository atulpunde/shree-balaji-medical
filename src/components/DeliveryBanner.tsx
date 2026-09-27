import { motion } from "framer-motion";
import { FaMotorcycle } from "react-icons/fa";
import BranchWhatsAppSelector from "./BranchWhatsAppSelector";

export default function DeliveryBanner() {
  return (
    <section
      style={{
        padding: 0,
        overflow: "hidden",
        clipPath: "polygon(0 6%, 100% 0, 100% 94%, 0 100%)",
        background:
          "repeating-linear-gradient(115deg, var(--primary) 0px, var(--primary) 26px, var(--accent) 26px, var(--accent) 52px)",
      }}
    >
      <div
        className="container"
        style={{
          padding: "80px 20px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: 30,
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(34px, 6vw, 60px)",
              fontWeight: 900,
              lineHeight: 0.95,
              color: "#04121f",
              letterSpacing: "-0.02em",
            }}
          >
            FREE
            <br />
            HOME
            <br />
            DELIVERY
          </h2>

          {/* Road with a riding scooter */}
          <div
            style={{
              position: "relative",
              marginTop: 30,
              height: 2,
              background: "repeating-linear-gradient(90deg, #04121f 0 14px, transparent 14px 26px)",
              maxWidth: 320,
            }}
          >
            <motion.div
              animate={{ x: ["0%", "260%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: -14, left: 0 }}
            >
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 0.4, repeat: Infinity }}>
                <FaMotorcycle size={26} color="#04121f" />
              </motion.div>
            </motion.div>
          </div>

          <BranchWhatsAppSelector>
            {(toggle, open) => (
              <button
                type="button"
                onClick={(event) => toggle(event.currentTarget)}
                aria-expanded={open}
                className="btn-whatsapp"
                style={{ marginTop: 34, fontSize: 16 }}
              >
                Order Now, Ride's Ready →
              </button>
            )}
          </BranchWhatsAppSelector>
        </div>

        {/* Rotating sticker badge */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            style={{ position: "relative", width: 170, height: 170 }}
          >
            <svg viewBox="0 0 200 200" width="170" height="170">
              <defs>
                <path
                  id="circlePath"
                  d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                />
              </defs>
              <text fontSize="13.5" fontWeight="800" fill="#04121f" letterSpacing="1">
                <textPath href="#circlePath">
                  • FREE DELIVERY • FREE DELIVERY • FREE DELIVERY
                </textPath>
              </text>
            </svg>
          </motion.div>
          <div
            style={{
              position: "absolute",
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "#04121f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 53,
            }}
          >
            <FaMotorcycle size={26} color="#fff" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          section > .container { grid-template-columns: 1fr !important; text-align: center; }
          section > .container > div:first-child > div { margin-inline: auto; }
        }
      `}</style>
    </section>
  );
}
