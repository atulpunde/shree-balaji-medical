import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { branches, getWhatsAppLink } from "../data/branches";

interface BranchWhatsAppSelectorProps {
  children: (toggle: (trigger: HTMLElement) => void, open: boolean) => ReactNode;
}

export default function BranchWhatsAppSelector({ children }: BranchWhatsAppSelectorProps) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (triggerRef.current?.contains(target) || panelRef.current?.contains(target)) return;

      setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  const toggle = (trigger: HTMLElement) => {
    triggerRef.current = trigger;
    if (open) {
      setOpen(false);
      return;
    }

    const bounds = trigger.getBoundingClientRect();
    const panelWidth = Math.min(260, window.innerWidth - 24);
    const panelHeight = 220;
    const left = Math.max(12, Math.min(bounds.right - panelWidth, window.innerWidth - panelWidth - 12));
    const top = bounds.bottom + 12 + panelHeight <= window.innerHeight
      ? bounds.bottom + 12
      : Math.max(12, bounds.top - panelHeight - 12);

    setPosition({ top, left });
    setOpen(true);
  };

  return (
    <>
      {children(toggle, open)}
      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              style={{
                position: "fixed",
                top: position.top,
                left: position.left,
                zIndex: 1000,
                boxSizing: "border-box",
                width: "min(260px, calc(100vw - 24px))",
                background: "var(--card)",
                border: "2.5px solid var(--border)",
                borderRadius: 14,
                padding: 14,
                boxShadow: "6px 6px 0 rgba(0,0,0,0.25)",
              }}
            >
              <p style={{ fontSize: 13, fontWeight: 700, margin: "0 0 10px" }}>
                Order from your nearest branch:
              </p>
              {branches.map((branch) => (
                <a
                  key={branch.id}
                  href={getWhatsAppLink(branch.whatsapp, branch.name)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    fontSize: 13,
                    padding: "8px 0",
                    color: "var(--text)",
                    textDecoration: "none",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  {branch.area}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}