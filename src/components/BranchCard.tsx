import { useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { getWhatsAppLink } from "../data/branches";
import StatusBadge from "./StatusBadge";
import type { Branch } from "../types";

interface BranchCardProps {
  branch: Branch;
  index: number;
  featured?: boolean;
}

export default function BranchCard({ branch, index, featured = false }: BranchCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800, height: "100%" }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-neo"
    >
      <div
        style={{
          padding: featured ? 32 : 24,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: -14,
            right: 16,
            background: "var(--primary)",
            color: "var(--bg)",
            fontWeight: 900,
            fontSize: featured ? 22 : 16,
            padding: "6px 12px",
            borderRadius: 10,
            border: "2.5px solid var(--text)",
            transform: "rotate(6deg)",
          }}
        >
          0{index + 1}
        </span>

        <div>
          <h3 style={{ fontSize: featured ? 24 : 18 }}>{branch.name}</h3>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 4 }}>
            {branch.area}
          </p>
        </div>

        <StatusBadge />

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "auto", paddingTop: 8 }}>
          <a
            href={getWhatsAppLink(branch.whatsapp, branch.name)}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp size={18} /> Order Now
          </a>
          <a
            href={branch.mapsUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text)",
              border: "2.5px solid var(--border)",
              padding: "11px 16px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            <FaMapMarkerAlt /> Directions
          </a>
        </div>
      </div>
    </motion.div>
  );
}
