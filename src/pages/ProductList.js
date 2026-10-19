import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductItem from "../components/ProductItem";
import Pagination from "../components/Pagination";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword") || "";
  const category = searchParams.get("category") || "All Categories";
  const sortBy = searchParams.get("sortBy") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = 3; // Số sản phẩm trên mỗi trang

  const handleSearchChange = (newKeyword) => {
    const params = new URLSearchParams(searchParams);
    if (newKeyword) params.set("keyword", newKeyword);
    else params.delete("keyword");
    params.set("page", "1");
    setSearchParams(params);
  };

  const handleCategoryChange = (newCategory) => {
    const params = new URLSearchParams(searchParams);
    if (newCategory && newCategory !== "All Categories")
      params.set("category", newCategory);
    else params.delete("category");
    params.set("page", "1");
    setSearchParams(params);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) params.set("sortBy", value);
    else params.delete("sortBy");
    params.set("page", "1");
    setSearchParams(params);
  };

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage);
    setSearchParams(params);
  };

  // Lọc và Sắp xếp sản phẩm
  const filteredProducts = useMemo(() => {
    let result = products.filter((item) => {
      const matchKeyword = item.name
        .toLowerCase()
        .includes(keyword.toLowerCase());
      const matchCategory =
        category === "All Categories" || item.category === category;
      return matchKeyword && matchCategory;
    });

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [keyword, category, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / limit) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * limit;
    return filteredProducts.slice(start, start + limit);
  }, [filteredProducts, page, limit]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      {/* Các công cụ tìm kiếm, lọc, sắp xếp */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "15px",
        }}
      >
        <SearchBar keyword={keyword} onSearchChange={handleSearchChange} />
        <CategoryFilter
          category={category}
          onCategoryChange={handleCategoryChange}
        />

        <div>
          <select
            value={sortBy}
            onChange={handleSortChange}
            style={{ padding: "8px" }}
          >
            <option value="">Sắp xếp mặc định</option>
            <option value="price-asc">Giá: Thấp đến Cao</option>
            <option value="price-desc">Giá: Cao đến Thấp</option>
            <option value="name-asc">Tên: A - Z</option>
            <option value="name-desc">Tên: Z - A</option>
          </select>
        </div>
      </div>

      <p>
        <strong>Total Products:</strong> {filteredProducts.length}
      </p>

      {paginatedProducts.length > 0 ? (
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr style={{ background: "#f1f3f5" }}>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products are available.</p>
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
