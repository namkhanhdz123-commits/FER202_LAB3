import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price.toLocaleString()}đ</td>
      <td>
        <Link to={`/products/${product.id}`}>
          <button style={{ cursor: "pointer" }}>View Details</button>
        </Link>
      </td>
    </tr>
  );
}
