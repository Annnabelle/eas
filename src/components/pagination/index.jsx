import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./styles.sass";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className='pagination'>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className='paginationArrow'
      >
        <FaArrowLeft />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`paginationButton ${currentPage === index + 1 ? "active" : ""}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className='paginationArrow'
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
