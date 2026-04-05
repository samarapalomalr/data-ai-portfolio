import React from "react";
import Link from "next/link";

export default function Navbar() {
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
        style={{ padding: "18px 0" }}
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

        <div style={{ display: "flex", gap: "25px" }}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projetos</Link>
          <Link href="/ai">IA</Link>
          <Link href="/data-engineering">Engenharia de Dados</Link>
          <Link href="/software">Software</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/contact">Contato</Link>
        </div>
      </div>
    </nav>
  );
}