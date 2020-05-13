import React from "react";

function CartItem({ item, value }) {
  const { id, title, price, img, count, total } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row text-capialize text-center my-2">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <div className="col-10 col-lg-2 mx-auto text-center my-1">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 col-lg-2 mx-auto text-center my-1">
        <span className="d-lg-none">price : </span>
        <b>${price}</b>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 col-lg-2 mx-auto text-center my-1">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 col-lg-2 mx-auto text-center my-1">
        <strong>Item Total : $ {total}</strong>
      </div>
    </div>
  );
}

export default CartItem;
