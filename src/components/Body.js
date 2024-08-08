import { resList } from "../utils/mockData";
import { RestrauntCard } from "./RestrauntCard";
import { DominosImageOnHomePageURL } from "../utils/constants";
import { useEffect, useState } from "react";
const Body = () => {
  const [listofrestraunts, setlistofrestraunts] = useState([]);

  useEffect(() => {
    // fetch("google.com").then((response) => {
    //   console.log("data is fetched");
    //   console.log(response);
    //   setlistofrestraunts(resList);
    // });

    fetchData();
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
      response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //This is Conditional Rendering - a rendering based on some condition is called conditional rendering
  if(listofrestraunts.length===0){
    return <h1>loading...</h1>
  }

  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log(listofrestraunts);
            const filteredlist = listofrestraunts.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistofrestraunts(filteredlist);
            // console.log(filteredlist);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>

      <img
        src={DominosImageOnHomePageURL}
        alt="home-image"
        className="home-page-image"
      />

      <div className="res-container">
        {/* restrauntcards */}
        {listofrestraunts.map((resItem) => {
          return <RestrauntCard key={resItem.info.id} res={resItem} />;
        })}
      </div>
    </div>
  );
};

export default Body;
