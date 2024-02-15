import React from "react";
const ShopItem = ({ product }) => {
  return (
    <>
      <div className='overflow-x-auto' style={{ width: "100%" }}>
        <table
          className='table'
          style={{ backgroundColor: "rgb(247 247 247)" }}
        >
          <thead>
            <tr>
              <th style={{ width: "10%" }}>
                <img src={product.img} alt='Burger' style={{ width: "50%" }} />
              </th>
              <th style={{ width: "40%" }}>
                <h2 className='card-title justify-center'>{product.name} </h2>
              </th>
              <th style={{ width: "8%" }}>{product.color}</th>
              <th style={{ color: "red", fontSize: 20 }}>${product.price}</th>
              <th style={{ width: "20%" }}>
                <button
                  className='btn btn-outline btn-xs btn-secondary'
                  style={{
                    position: "absolute",
                    right: 30,
                    color: "red",
                  }}
                >
                  Add to Cart
                </button>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
};

export default ShopItem;
