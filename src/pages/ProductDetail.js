import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 999,
    description: "A high-performance laptop.",
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 499,
    description: "A powerful smartphone.",
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 99,
    description: "A convenient coffee maker.",
  },
  // Add more products as needed
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>
        <strong>Category:</strong>
        {product.category}
      </p>
      <p>
        <strong>Price:</strong>${product.price}
      </p>
      <p>
        <strong>Description:</strong>
        {product.description}
      </p>
      <Link to="/">Back to Product List</Link>
    </div>
  );
}

export default ProductDetail;
