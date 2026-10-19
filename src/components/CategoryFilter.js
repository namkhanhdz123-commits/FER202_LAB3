import React from "react";

export default function CategoryFilter({ category, onCategoryChange }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        style={{ padding: "8px" }}
      >
        <option value="All Categories">All Categories</option>
        <option value="Điện thoại">Điện thoại</option>
        <option value="Laptop">Laptop</option>
        <option value="Máy tính bảng">Máy tính bảng</option>
        <option value="Phụ kiện">Phụ kiện</option>
      </select>
    </div>
  );
}
