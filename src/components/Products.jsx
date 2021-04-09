import React from "react";
import { ProductsCard } from "./ProductsCard";
import { useSelector } from "react-redux";

export const Products = () => {
  const products = useSelector((state) => state.allProducts);

  return (
    <div className="container-fluid">
      <div className="row mx-auto gy-5">
        {products.map((item) => (
          <ProductsCard item={item} />
        ))}
      </div>
    </div>
  );
};
