import React from "react";
import products from "./products";
import ShopItem from "./ShopItem";

const ListView = ({}) => {
  console.log("products", products);
  return (
    <div className='flex flex-wrap justify-center'>
      {products.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ListView;
