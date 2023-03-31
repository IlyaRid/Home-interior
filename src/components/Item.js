import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <div onClick={() => this.props.onModule(this.props.item)}>
          <img src={"./img/" + this.props.item.img} alt="item" />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
        </div>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}

export default Item;
