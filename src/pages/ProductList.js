import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { products } from "../data/products";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("keyword") || "",
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All Categories",
  );

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(
        searproduct.name.toLowrCase().includes(searchTerm.toLowerCase()),
      );
    const categoryMatch =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;
    return nameMatch && categoryMatch;
  });

  useEffect(() => {
    setSearchParams({ keyword: searchTerm, category: selectedCategory });
  }, [searchTerm, selectedCategory, setSearchParams]);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(location.pathname, {
      replace: true,
    });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(
      event.target.valsetSelectedCategory(event.target.value),
    );
  };

  return (
    <div>
      <h1>Product List</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name"
        />
        <select
          value={selectedCategory}
          onChange={(handlvalue = { selectedCategory })}
        >
          <option value="All Categories">All Categories</option>
          <option value="Điện thoại">Điện thoại</option>
          <option value="Laptop">Laptop</option>
          <option value="Máy tính bảng">Máy tính bảng</option>
        </select>
        <button type="submit">Search</button>
      </form>

      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>Price:</strong> $
                {product.pri < p > <strong>Price:</strong>}${product.price}
              </p>

              <p>
                <strong>Description:</strong>
                {product.description}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default ProductList;
