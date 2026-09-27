import { motion } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import BranchWhatsAppSelector from "./BranchWhatsAppSelector";

export default function FloatingWhatsApp() {
  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 100 }}>
      <BranchWhatsAppSelector>
        {(toggle, open) => (
          <motion.button
            onClick={(event) => toggle(event.currentTarget)}
            aria-label={open ? "Close branch selection" : "Choose a branch to contact on WhatsApp"}
            aria-expanded={open}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: 58,
              height: 58,
              borderRadius: "50%",
              background: "#25d366",
              color: "#fff",
              border: "3px solid #04150c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(37,211,102,0.5)",
            }}
          >
            {open ? <FaTimes /> : <FaWhatsapp />}
          </motion.button>
        )}
      </BranchWhatsAppSelector>
    </div>
  );
}
