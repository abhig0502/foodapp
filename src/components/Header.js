import { LogoImageURL } from "../utils/constants";

export const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LogoImageURL}
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