import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav
      style={{
        padding: "15px",
        background: "#f8f9fa",
        borderBottom: "1px solid #dee2e6",
        marginBottom: "20px",
      }}
    >
      <Link
        to="/"
        style={{
          marginRight: "20px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Home Page
      </Link>
      <Link
        to="/products"
        style={{ textDecoration: "none", fontWeight: "bold" }}
      >
        Product List
      </Link>
    </nav>
  );
}
