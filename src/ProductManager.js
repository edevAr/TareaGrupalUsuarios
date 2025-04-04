// src/ProductManager.js
import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function ProductManager() {
  const [products, setProducts] = useState([]);

  function addProduct(product) {
    setProducts(function (prev) {
      return [...prev, product];
    });
  }

  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      <ProductForm onAddProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default ProductManager;
