import type { StoreStatus } from "../types";

// ✅ ACTIVE LOGIC: 24x7 operation
export function getStoreStatus(): StoreStatus {
  return {
    isOpen: true,
    label: "Open Now",
    subLabel: "Open 24 hours",
  };
}

/* 🔁 ALTERNATE LOGIC (commented out): 9:00 AM – 2:00 AM
   To activate: comment out the getStoreStatus() function above,
   and uncomment the function below. That's the only change needed.

export function getStoreStatus(): StoreStatus {
  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;

  // Open from 9:00 AM to 2:00 AM (next day, i.e. hour 26 on a 0-26 scale)
  const isOpen = currentHour >= 9 || currentHour < 2;

  return {
    isOpen,
    label: isOpen ? "Open Now" : "Closed",
    subLabel: isOpen ? "Open till 2:00 AM" : "Opens at 9:00 AM",
  };
}
*/
