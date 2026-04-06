import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: "0",
        backdropFilter: "blur(12px)",
        background: "rgba(2,6,23,0.7)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        zIndex: "100",
      }}
    >
      <div
        className="container flex-between"
        style={{ padding: "18px 0", position: "relative" }}
      >
        <h2
          style={{
            background: "var(--gradient)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Samara.dev
        </h2>

        <div className={`nav-menu ${open ? "open" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projetos</Link>
          <Link href="/ai">IA</Link>
          <Link href="/data-engineering">Engenharia de Dados</Link>
          <Link href="/software">Software</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/contact">Contato</Link>
        </div>

        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}