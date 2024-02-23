// ProductRow.js
import React from "react";

export default function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td colSpan={2}>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
