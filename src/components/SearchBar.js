//SearchBar.js
import React from "react";

export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) {
  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleInStockChange = (e) => {
    onInStockChange(e.target.checked);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-1 mb-2">
            <form>
              <input type="text" value={filterText} onChange={handleFilterTextChange} placeholder="Search..." />&nbsp;
              <label>
                <input type="checkbox" checked={inStockOnly} onChange={handleInStockChange} /> Only show
                products in stock
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
