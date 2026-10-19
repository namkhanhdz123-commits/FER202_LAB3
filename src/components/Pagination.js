import React from "react";

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        gap: "5px",
        alignItems: "center",
      }}
    >
      <button
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        style={{ cursor: page <= 1 ? "not-allowed" : "pointer" }}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const pageNum = index + 1;
        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            style={{
              fontWeight: page === pageNum ? "bold" : "normal",
              background: page === pageNum ? "#e2e6ea" : "#fff",
              cursor: "pointer",
              padding: "5px 10px",
            }}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        style={{ cursor: page >= totalPages ? "not-allowed" : "pointer" }}
      >
        Next
      </button>
    </div>
  );
}
