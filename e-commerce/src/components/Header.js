import React from "react";

export default function header() {
  return (
    <header>
      <div>
        <span className="logo">Home interior</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
