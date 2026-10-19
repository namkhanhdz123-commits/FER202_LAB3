import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to ProductStore</h1>
      <p>Manage and explore products for your needs.</p>
      <Link to="/products">
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          View Products
        </button>
      </Link>
    </div>
  );
}
