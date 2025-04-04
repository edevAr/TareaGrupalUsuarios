import React, { useState } from "react";

function ProductForm(props) {
  const [product, setProduct] = useState({ name: "", description: "", price: "", stock: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (product.name && product.price) {
      props.onAddProduct(product);
      setProduct({ name: "", description: "", price: "", stock: "" });
    }
  }

  return (
    <div className="product-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descripcion del producto"
          value={product.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={product.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
          required
        /> 
        <button type="submit">Registrar Producto</button>
      </form>
    </div>
  );
}

export default ProductForm;
