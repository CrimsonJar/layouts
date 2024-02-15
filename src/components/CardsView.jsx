import React from "react";
import products from "./products";
import ShopCard from "./ShopCard";

const CardsView = ({}) => {
  console.log("products", products);
  return (
    <div className='flex flex-wrap justify-center'>
      {products.map((product, index) => (
        <ShopCard key={index} product={product} />
      ))}
    </div>
  );
};

export default CardsView;
