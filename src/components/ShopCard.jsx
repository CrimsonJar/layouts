import React from "react";
const ShopCard = ({ product }) => {
  return (
    <div
      className='card card-compact w-96 bg-base-100 shadow-xl'
      style={{
        backgroundColor: "rgb(247 247 247)",
        margin: 50,
      }}
    >
      <h2 className='card-title justify-center'>{product.name} </h2>
      <p className='justify-center' style={{ display: "flex" }}>
        {product.color}
      </p>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <div className='card-body flex '>
        <p style={{ width: 55, color: "red", fontWeight: "bold" }}>
          $ {product.price}
        </p>
        <button
          className='btn btn-outline btn-xs btn-secondary'
          style={{
            width: 100,
            position: "absolute",
            right: 30,
            bottom: 10,
            color: "red",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
