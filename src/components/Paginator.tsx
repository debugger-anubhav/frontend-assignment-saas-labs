import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    const maxVisiblePages = 8; // Limit the number of visible pages
    const startPage = Math.max(
      1,
      Math.min(
        currentPage - Math.floor(maxVisiblePages / 2),
        totalPages - maxVisiblePages + 1
      )
    );
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <li>
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`pagination-button ${i === currentPage ? "active" : ""}`}
            style={{ color: i === currentPage ? "#009879" : "black" }}
            aria-current={i === currentPage ? "page" : undefined}
            aria-label={`Page ${i}`}
          >
            {i}
          </button>
        </li>
      );
    }
    return buttons;
  };

  return (
    <nav className="pagination" aria-label="Pagination Navigation">
      <ul className="pagination-list">
        <li className="pagination-item">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            {"<<"}
          </button>
        </li>

        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            {"<"}
          </button>
        </li>

        {renderPageButtons()}

        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            {">"}
          </button>
        </li>

        <li>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            {">>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
