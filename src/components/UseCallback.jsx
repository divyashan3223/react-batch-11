import React, { useState, useCallback } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 10, quantity: 1 },
    { id: 2, name: "Product B", price: 20, quantity: 1 },
    { id: 3, name: "Product C", price: 15, quantity: 1 },
  ]);


  const handleQuantityChange = useCallback(
    (id, newQuantity) => {
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      );
      setProducts(updatedProducts);
    },
    [products]
  ); 
  const totalPrice = React.useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }, [products]);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onQuantityChange={handleQuantityChange}
        />
      ))}
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

const ProductItem = ({ product, onQuantityChange }) => {
  const handleIncrement = () => {
    onQuantityChange(product.id, product.quantity + 1);
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      onQuantityChange(product.id, product.quantity - 1);
    }
  };

  return (
    <div>
      <p>
        {product.name} - ${product.price}
      </p>
      <button onClick={handleDecrement} disabled={product.quantity === 1}>
        -
      </button>
      <span>{product.quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ProductList;
