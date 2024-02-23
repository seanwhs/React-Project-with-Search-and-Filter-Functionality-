//ProductCategoryRow.js
import React from "react";
import '../data/products'

export default function ProductCategoryRow({category}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <tr>
            <th colSpan="2">{category}</th>
          </tr>
        </div>
      </div>
    </div>
  );
}

