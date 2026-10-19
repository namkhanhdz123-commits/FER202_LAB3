import React from "react";

export default function SearchBar({ keyword, onSearchChange }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Search Products by Name..."
        value={keyword}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
    </div>
  );
}
