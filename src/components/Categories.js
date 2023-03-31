import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "All",
          name: "Все",
        },
        {
          key: "Chairs",
          name: "Стулья",
        },
        {
          key: "Armchairs",
          name: "Кресла",
        },
        {
          key: "Sofa",
          name: "Диваны",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategories(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
