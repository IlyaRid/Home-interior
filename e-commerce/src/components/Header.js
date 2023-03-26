import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";
import Search from "./Search";

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach((el) => {
    sum += Number.parseFloat(el.price * el.quantity);
  });

  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} deletOrder={props.deletOrder} />
      ))}
      <p className="sum">Сумма: {sum.toFixed(2)}$</p>
    </div>
  );
};

const showNothing = () => {
  return <div className="empty"> Корзина пуста </div>;
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div className="head">
        <span className="logo">Home interior</span>
        <Search search={props.search} />
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
