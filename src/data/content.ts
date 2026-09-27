import {
  FaPills,
  FaSprayCan,
  FaIceCream,
  FaBaby,
  FaSoap,
  FaCapsules,
  FaBriefcaseMedical,
  FaShoppingBasket,
} from "react-icons/fa";
import type { ItemTypeEntry, TrustBadgeEntry, TestimonialEntry, FaqEntry } from "../types";

export const itemTypes: ItemTypeEntry[] = [
  { label: "Medicines", icon: FaPills },
  { label: "Cosmetics", icon: FaSprayCan },
  { label: "Perfumes", icon: FaSprayCan },
  { label: "Ice Cream", icon: FaIceCream },
  { label: "Baby Care", icon: FaBaby },
  { label: "Personal Care", icon: FaSoap },
  { label: "Health Supplements", icon: FaCapsules },
  { label: "First Aid", icon: FaBriefcaseMedical },
  { label: "Daily Essentials", icon: FaShoppingBasket },
];

export const trustBadges: TrustBadgeEntry[] = [
  { title: "100% Genuine Products", desc: "Sourced only from verified distributors." },
  { title: "Pharmacist-Checked", desc: "Every prescription is reviewed before dispatch." },
  { title: "Fast Home Delivery", desc: "Quick turnaround, right to your door." },
  { title: "Trusted Locally", desc: "Serving Susgaon families for years." },
];

export const testimonials: TestimonialEntry[] = [
  { name: "Aarav Shah", text: "Ordering on WhatsApp is so easy — got my medicines within the hour." },
  { name: "Priya Kulkarni", text: "Genuine products every time, and the staff double-check every prescription." },
  { name: "Rohan Deshmukh", text: "Love that I can just message them instead of downloading another app." },
  { name: "Sneha Patil", text: "Quick delivery and always polite on WhatsApp. My go-to pharmacy now." },
];

export const faqs: FaqEntry[] = [
  {
    q: "How do I place an order?",
    a: "Tap the WhatsApp button for your nearest branch and send us your requirement — we'll take it from there.",
  },
  {
    q: "Do I need an app or account?",
    a: "No. Everything happens over WhatsApp — no app, no login, no cart.",
  },
  {
    q: "Can I order prescription medicines?",
    a: "Yes, just share a clear photo of your prescription on WhatsApp and our pharmacist will verify it.",
  },
  {
    q: "What are your store timings?",
    a: "Check the live 'Open Now' status on each branch card — it updates automatically.",
  },
  {
    q: "Is home delivery available?",
    a: "Yes, we offer free home delivery — just ask on WhatsApp when you place your order.",
  },
];
