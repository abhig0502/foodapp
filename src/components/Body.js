import { resList } from "../utils/mockData";
import { RestrauntCard,withPrmotedLabel } from "./RestrauntCard";
import { DominosImageOnHomePageURL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = (props) => {
  // const [listofrestraunts, setlistofrestraunts] = useState([]);
  // const {listofrestraunts, setlistofrestraunts} = props;
  const { restrauntsprops } = props;
  const {
    listofrestraunts,
    setlistofrestraunts,
    filteredListOfRestraunts,
    setFilteredListOfRestraunts,
  } = restrauntsprops;
  // console.log(listofrestraunts); 
  const RestrauntCardPromoted=withPrmotedLabel(RestrauntCard);

  useEffect(() => {
    // fetch("google.com").then((response) => {
    //   console.log("data is fetched");
    //   console.log(response);
    //   setlistofrestraunts(resList);
    // });

    fetchData();
    // console.log("inside res use effect");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630"
    );
    // console.log("data is fetched");
    // console.log(data);
    //  data.json().then((data) => {
    //   console.log(data);
    //  });
    const response = await data.json();
    //why he has used optional chaining here setlistofrestraunts(response?.data?.cards[1]?.card?.card?.gridElements?.inforWithStyle?.restraunts)
    setlistofrestraunts(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestraunts(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    //console.log(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  //This is Conditional Rendering - a rendering based on some condition is called conditional rendering
  // if(listofrestraunts.length===0){
  // //  return <h1>loading...</h1>
  //  return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !! please check your internet connection!
      </h1>
    );
  }

  return listofrestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      {/* <img
        src={DominosImageOnHomePageURL}
        alt="home-image"
        className="home-page-image"
      /> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log(listofrestraunts);
            const filteredlist = listofrestraunts.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredListOfRestraunts(filteredlist);
            // console.log(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {/* restrauntcards */}
        {filteredListOfRestraunts.map((resItem) => {
          return (
            <Link key={resItem.info.id} to={"/restaurants/" + resItem.info.id}>
            {
              resItem.info.avgRating>4.1 ? <RestrauntCardPromoted res={resItem}/> : <RestrauntCard res={resItem}/> 
            }
 
            </Link>
          ); //why we have put this key to link tag from restrauntcard?
        })}
      </div>
    </div>
  );
};
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const oddnumbers = numbers.filter((number) => {
//   return number % 2 === 1;
// });
// console.log(oddnumbers);
export default Body;
