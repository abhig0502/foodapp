import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
 *  -logo
 *  -nav bar Items
 * Body
 *  -search
 *  -Restraunt container
 *  -Restraunt card
 * Footer
 *  -Copyrights
 *  -Links
 *  -Address
 *  -Contact Us
 *
 */
// const Title = () => (
//   <div className="head">
//     <h1>food ordering app</h1>
//   </div>
// );

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
        />
      </div>
      <div className="searchtextbox">
        <div className="textbox">
          {/* <label for="search">Search:</label> */}
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Type here..."
          />
        </div>
        <div className="search-button">Search</div>
      </div>
      <div className="nav-Items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Delivery</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = (props) => {
  const { res } = props;
  return (
    <div className="res-card">
      <img src={res.Image} alt={res.resname} className="card-image" />
      <div className="res-name">{res.Resname}</div>
      <div className="res-food-items">{res.FoodItems.join(", ")}</div>
      <div className="res-cost">Rs {res.Cost}</div>
    </div>
  );
};

const resList = [
  {
    Resname: "Dominos",
    FoodItems: ["Pizza", "Burger", "Momos", "FrenchFries"],
    Cost: 200,
    Image:
      "https://www.dominos.co.in/blog/wp-content/uploads/2023/02/Pizza-Toppings-Banner.jpg",
  },

  {
    Resname: "Pizzahut",
    FoodItems: ["Pizza", "Burger", "Momos", "FrenchFries"],
    Cost: 350,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjrnQx5wCN4ocqH16DdnOzJKKZ1L7cz22xg&s",
  },

  {
    Resname: "KFC",
    FoodItems: ["Chicken", "Biryani", "Momos", "FrenchFries"],
    Cost: 2000,
    Image:
      "https://b.zmtcdn.com/data/pictures/chains/1/18803651/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|750:500&crop=750:500;*,*",
  },

  {
    Resname: "Dominos",
    FoodItems: ["Pizza", "Burger", "Momos", "FrenchFries"],
    Cost: 200,
    Image:
      "https://www.dominos.co.in/blog/wp-content/uploads/2023/02/Pizza-Toppings-Banner.jpg",
  },

  {
    Resname: "Pizzahut",
    FoodItems: ["Pizza", "Burger", "Momos", "FrenchFries"],
    Cost: 350,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjrnQx5wCN4ocqH16DdnOzJKKZ1L7cz22xg&s",
  },

  {
    Resname: "KFC",
    FoodItems: ["Chicken", "Biryani", "Momos", "FrenchFries"],
    Cost: 2000,
    Image:
      "https://b.zmtcdn.com/data/pictures/chains/1/18803651/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|750:500&crop=750:500;*,*",
  },

  {
    Resname: "Dominos",
    FoodItems: ["Pizza", "Burger", "Momos", "FrenchFries"],
    Cost: 200,
    Image:
      "https://www.dominos.co.in/blog/wp-content/uploads/2023/02/Pizza-Toppings-Banner.jpg",
  },

  {
    Resname: "Pizzahut",
    FoodItems: ["Pizza", "Burger", "Momos", "FrenchFries"],
    Cost: 350,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjrnQx5wCN4ocqH16DdnOzJKKZ1L7cz22xg&s",
  },

  {
    Resname: "KFC",
    FoodItems: ["Chicken", "Biryani", "Momos", "FrenchFries"],
    Cost: 2000,
    Image:
      "https://b.zmtcdn.com/data/pictures/chains/1/18803651/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|750:500&crop=750:500;*,*",
  },
];

const Body = () => {
  return (
    <div className="Body">
      {/* <div className="search">search</div> */}

      <img
        src="https://www.dominos.co.in/blog/wp-content/uploads/2023/02/Pizza-Toppings-Banner.jpg"
        alt="home-image" className="home-page-image"
      />

      <div className="res-container">
        {/* restrauntcards */}
        {resList.map((resItem) => {
          return <RestrauntCard res={resItem} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* //Header */}
      <Header />
      {/* //Body */}
      <Body />
      {/* //Footer */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
