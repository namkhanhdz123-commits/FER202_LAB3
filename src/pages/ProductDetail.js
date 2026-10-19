import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div style={{ padding: "20px" }}>
        <h3>Không tìm thấy sản phẩm</h3>
        <p>Sản phẩm với ID {id} không tồn tại.</p>
        <button
          onClick={() => navigate("/products")}
          style={{ cursor: "pointer" }}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Detail</h2>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", marginBottom: "20px" }}
      >
        <tbody>
          <tr>
            <td>
              <strong>ID</strong>
            </td>
            <td>{product.id}</td>
          </tr>
          <tr>
            <td>
              <strong>Name</strong>
            </td>
            <td>{product.name}</td>
          </tr>
          <tr>
            <td>
              <strong>Category</strong>
            </td>
            <td>{product.category}</td>
          </tr>
          <tr>
            <td>
              <strong>Price</strong>
            </td>
            <td>{product.price.toLocaleString()}đ</td>
          </tr>
          <tr>
            <td>
              <strong>Description</strong>
            </td>
            <td>{product.description}</td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={() => navigate("/products")}
        style={{ padding: "8px 15px", cursor: "pointer" }}
      >
        Back to Products
      </button>
    </div>
  );
}
