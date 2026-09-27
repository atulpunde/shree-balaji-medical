export default function Footer() {
  return (
    <footer style={{ padding: "30px 0", textAlign: "center", color: "var(--text-muted)", fontSize: 13 }}>
      © {new Date().getFullYear()} Balaji Medical, Susgaon. All rights reserved.
    </footer>
  );
}
