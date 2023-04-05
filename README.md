<h1 align="center">Home interior</h1>
<h3 align="center">Online store</h3>

<p align="center">
<img  src="./public/img/Preview.png" width="100%">
</p>


## Description

&nbsp;&nbsp;&nbsp;&nbsp;Home Interior is an online store developed in the process of learning how to work with the React js framework. It has all the main functions of a real e-commerce project. On the main page, after the main banner, a list of products is displayed. It can be filtered by category. In addition, a keyword search is implemented.

&nbsp;&nbsp;&nbsp;&nbsp;By clicking on the card of the product you like, a modal window opens with more detailed information. Selected products can be added to the shopping cart. The basket itself also displays all the added products, their quantity and price, both for each product and for the total.

<p align="center">
<img  src="./public/img/Preview.gif" width="70%">
</p>

## About the project

&nbsp;&nbsp;&nbsp;&nbsp;The whole project is written using only React js framework. This was done specifically for educational purposes. The whole project is divided into components, which allows you to avoid code reuse. The main application logic is contained in the App.js file, where all other components are imported. To implement the basket, local storage was used. This allowed the shopping list to be saved after page refresh.

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: JSON.parse(localStorage.getItem("orders")) || [],
      ...
    };
    ...
  }
  
   render() {
    localStorage.setItem("orders", JSON.stringify(this.state.orders));

    return (
      <div className="wrapper">
        ...
      </div>
    );
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
```

##

&nbsp;&nbsp;&nbsp;&nbsp;Filtering by category is done by matching a special field for each product with the key field of the selected category. However, search is implemented much more interesting. In the process of working on this project and learning React js, I came across the fact that many people make the search implementation very complicated. Having understood this issue, I managed to make the input into a separate component. In the same place, using the UseState() hook, capture the string entered into the search and pass it to the search function, which is located in the App.js component.

&nbsp;&nbsp;&nbsp;&nbsp;The search function itself is implemented using the includes() method, which checks if the key string is included in the product headers. Perhaps this way of implementing the search is not ideal and with deeper testing it will show shortcomings, however, it seemed to me simpler and more understandable compared to what I managed to find in open sources.

```javascript
//in component Search.js
export default function Search(props) {
  let [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      props.search(e.target.value);
    }
  };

  return (
    <input
      className="search"
      type="search"
      placeholder="Search"
      value={searchField}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />
  );
}

//in component App.js
search(keyword) {
    this.setState({
      currentItems: this.state.items.filter((el) =>
        el.title.toLowerCase().includes(keyword)
      ),
    });
    if (this.state.currentItems.length === 0) {
      console.log(this.state.currentItems);
    }
  }

  searchNothing() {
    return (
      <div className="emptySearch">По данному запросу ничего не найдено</div>
    );
  }
```
