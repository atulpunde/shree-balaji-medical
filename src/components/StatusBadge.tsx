import { useEffect, useState } from "react";
import { getStoreStatus } from "../utils/storeStatus";
import type { StoreStatus } from "../types";

export default function StatusBadge() {
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());

  useEffect(() => {
    const id = setInterval(() => setStatus(getStoreStatus()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        fontWeight: 700,
        color: status.isOpen ? "#2ecc71" : "#ff5c5c",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: status.isOpen ? "#2ecc71" : "#ff5c5c",
          boxShadow: status.isOpen ? "0 0 8px #2ecc71" : "0 0 8px #ff5c5c",
        }}
      />
      {status.label} · {status.subLabel}
    </div>
  );
}
