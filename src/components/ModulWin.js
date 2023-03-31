import React, { Component } from "react";
import ClickAwayListener from "react-click-away-listener";

export class ModulWin extends Component {
  render() {
    return (
      <div className="full-item">
        <ClickAwayListener onClickAway={() => this.props.onModule()}>
          <div>
            <img src={"./img/" + this.props.item.img} alt="item" />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div
              className="add-to-cart"
              onClick={() => this.props.onAdd(this.props.item)}
            >
              +
            </div>
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

export default ModulWin;
