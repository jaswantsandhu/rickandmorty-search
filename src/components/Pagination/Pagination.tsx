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
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 my-4">
      <button
        className={`px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-md hover:bg-green-200 ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`px-4 py-2 text-sm font-medium text-gray-800  rounded-md hover:bg-gray-100 ${
            currentPage === number ? "bg-green-200" : ""
          }`}
          onClick={() => {
            window.scrollTo(0, 0);
            onPageChange(number);
          }}
        >
          {number}
        </button>
      ))}
      <button
        className={`px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-md hover:bg-green-200 ${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
