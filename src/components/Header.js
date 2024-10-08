import { LogoImageURL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import headerBackground from "../../assets/headerBackground.png";
import UserContext from "../utils/UserContext";
//usecontext
//redux store
const item="pizza";
export const Header = (props) => {
  // let btnName = "Login";
  const { restrauntsprops } = props;
  const {
    listofrestraunts,
    //setlistofrestraunts,
    //filteredListOfRestraunts,
    setFilteredListOfRestraunts,
  } = restrauntsprops;
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const [searchText, setsearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);

  const handleSearchButtonClick = (e) => {
    // console.log(searchText);
    console.log(e);
    const filteredRestraunt = listofrestraunts.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredListOfRestraunts(filteredRestraunt);
  };

  const handleSearchButtonClickTemp = (item) => {
    // console.log(searchText);
    console.log(item);
    
  };
  return (
    <div className="header">
      {/* <div className="homepage-img-text">zomato</div> */}

      <img
        alt="backround-image"
        src={headerBackground}
        className="header-background-img"
      />
      <div className="header-top">
        <div className="logo-container">
          <img className="logo" src={LogoImageURL} />
        </div>
        <div className="nav-Items">
          <ul>
            {/* <li>
            <h6>Status: {onlineStatus ? "✅" : "🟡"}</h6>
          </li> */}
            <li>
              <Link className="nav-item-text" to={"/"}>Home</Link>
            </li>
            <li>
              <Link className="nav-item-text" to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link className="nav-item-text" to={"/contact"}>Contact Us</Link>
            </li>
            <li>
              <Link className="nav-item-text" to={"/Grocery"}>Grocery</Link>
            </li>

            <li><Link className="text-xl">Cart</Link></li>
            <li>{loggedInUser}</li>
            <li 
              //className="login-btn"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
                // console.log(btnName);
              }}
            >
              <Link className="nav-item-text" to={"/about"}>
                {" "}
                {/* for now i have just linked about us page with this login button */}
                {btnNameReact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      

      <div className="searchtextbox">
        <div className="homepage-img-text">
          <h1 className="homepage-img-text-h1">NAMASTE FOOD</h1>
        </div>
        {/* <label for="search">Search:</label> */}
        <div className="search">
          <input
            type="text"
            id="search-input"
            name="search"
            placeholder="Type here..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchButtonClick();
              }
            }}
          />
          <button className="search-button" onClick={handleSearchButtonClickTemp(item)}>
            Search
          </button>
        </div>
      </div>
     
    </div>
  );
};
