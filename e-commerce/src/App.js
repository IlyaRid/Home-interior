import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "стул чёрный",
          img: "black-chair.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsum modi, eius in magni hic.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "диван",
          img: "sofa.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius excepturi aperiam reiciendis itaque, numquam assumenda, non nihil voluptatem nobis, atque sint eveniet molestiae. Pariatur earum eveniet nesciunt eaque!",
          category: "chairs",
          price: "200.99",
        },
        {
          id: 3,
          title: "кресло",
          img: "armchair.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, ad!",
          category: "chairs",
          price: "150.99",
        },
      ],
    };

    this.addToOrder = this.addToOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
