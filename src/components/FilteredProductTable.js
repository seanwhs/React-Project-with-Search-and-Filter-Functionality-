// FilteredProductTable.js
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "../data/products";

export default function FilteredProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (text) => {
    setFilterText(text);
  };

  const handleInStockChange = (stocked) => {
    setInStockOnly(stocked);
  };

  return (
    <div className="container mt-4 border border-primary">
      <div className="row">
        <div className="col">
          <h1>Products</h1>
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={handleFilterTextChange}
            onInStockChange={handleInStockChange}
          />
          <ProductTable
            products={PRODUCTS}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </div>
      </div>
    </div>
  );
}
