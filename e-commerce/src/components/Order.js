import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} alt="item" />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        <div
          className="delet-from-cart"
          onClick={() => this.props.deletOrder(this.props.item.id)}
        >
          -
        </div>
      </div>
    );
  }
}

export default Order;
