import React from "react";

export default function Navbar({ setPage }) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        boxSizing: "border-box", 
        backgroundColor: "#1e1e1e",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>📄 PDF Compare</div>
      <div>
        <button
          onClick={() => setPage("upload")}
          style={{
            marginRight: "10px",
            padding: "6px 12px",
            background: "#90caf9",
            color: "black",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Upload
        </button>
        <button
          onClick={() => setPage("history")}
          style={{
            padding: "6px 12px",
            background: "#90caf9",
            color: "black",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          History
        </button>
      </div>
    </nav>
  );
}
