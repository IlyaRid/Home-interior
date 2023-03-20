import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ModulWin from "./components/ModulWin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: JSON.parse(localStorage.getItem("orders")) || [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул чёрный",
          img: "black-chair.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ipsum modi, eius in magni hic.",
          category: "Chairs",
          price: "49.99",
          quantity: 1,
        },
        {
          id: 2,
          title: "Диван",
          img: "sofa.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius excepturi aperiam reiciendis itaque, numquam assumenda, non nihil voluptatem nobis, atque sint eveniet molestiae. Pariatur earum eveniet nesciunt eaque!",
          category: "Sofa",
          price: "200.99",
          quantity: 1,
        },
        {
          id: 3,
          title: "Кресло",
          img: "armchair.jpg",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, ad!",
          category: "Armchairs",
          price: "150.99",
          quantity: 1,
        },
      ],
      moduleWin: false,
      fullItem: {},
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deletOrder = this.deletOrder.bind(this);
    this.chooseCategories = this.chooseCategories.bind(this);
    this.onModule = this.onModule.bind(this);
  }

  render() {
    localStorage.setItem("orders", JSON.stringify(this.state.orders));

    return (
      <div className="wrapper">
        <Header orders={this.state.orders} deletOrder={this.deletOrder} />
        <Categories chooseCategories={this.chooseCategories} />
        <Items
          onModule={this.onModule}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.moduleWin && (
          <ModulWin
            onModule={this.onModule}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onModule(item) {
    this.setState({ fullItem: item });
    this.setState({ moduleWin: !this.state.moduleWin });
  }

  chooseCategories(category) {
    if (category === "All") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deletOrder(id) {
    let lastCopy = 0;
    this.state.orders.forEach((el) => {
      if (el.id === id) {
        if (el.quantity > 1) {
          el.quantity--;
          lastCopy = el.quantity;
        }
      }
    });
    this.setState({ orders: this.state.orders });
    console.log(lastCopy);
    if (lastCopy === 0)
      this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
        el.quantity++;
      }
    });
    this.setState({ orders: this.state.orders });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
