// /app/error.js
"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Ops! Algo deu errado.</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()} style={{
        padding: "10px 20px",
        marginTop: "20px",
        border: "none",
        borderRadius: "6px",
        background: "#00d4ff",
        color: "#010214",
        cursor: "pointer",
        fontWeight: "bold"
      }}>
        Tentar Novamente
      </button>
    </div>
  );
}