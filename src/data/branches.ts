import type { Branch } from "../types";

export const branches: Branch[] = [
  {
    id: "vidya-valley",
    name: "Shree Balaji Medical — Vidya Valley Road",
    area: "Shop no. 6, Oxford Paradise Vidya Valley Road, Sus, Pune 411021",
    whatsapp: "918668827588",
    mapsUrl: "https://maps.app.goo.gl/1jGQFRhQZFQ5AkTu6",
  },
  {
    id: "main",
    name: "Shree Balaji Medical — Near Sus Bus Stand",
    area: "Shop no. 1, Near Sus Bus Stand, Sus, Pune 411021",
    whatsapp: "919284913512",
    mapsUrl: "https://maps.app.goo.gl/jQDwWKdbT574pXof9",
  },
  {
    id: "sus-nande",
    name: "New Shree Balaji Medical and General Store",
    area: "Shop no. 2, Opp. Joshi Wadewale, Sus–Nande Road, Sus, Pune 411021",
    whatsapp: "917823802260",
    mapsUrl: "https://maps.app.goo.gl/2DBeF4hyiVNw2ijo9",
  },
];

export const getWhatsAppLink = (whatsapp: string, _branchName: string): string => {
  const message = `Hi! I'd like to place an order.`;
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
};
