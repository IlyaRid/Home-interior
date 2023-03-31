import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.length === 0
          ? this.props.searchNothing()
          : this.props.items.map((el) => (
              <Item
                onModule={this.props.onModule}
                key={el.id}
                item={el}
                onAdd={this.props.onAdd}
              />
            ))}
      </main>
    );
  }
}

export default Items;
