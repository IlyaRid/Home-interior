import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} alt="item" />
        <h2>
          {this.props.item.title} x {this.props.item.quantity}
        </h2>
        <b>{(this.props.item.price * this.props.item.quantity).toFixed(2)}$</b>
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
