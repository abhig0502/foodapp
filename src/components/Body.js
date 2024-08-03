import { resList } from "../utils/mockData";
import { RestrauntCard } from "./RestrauntCard";
import { DominosImageOnHomePageURL } from "../utils/constants";
import { useState } from "react";
const Body = () => {
  const [listofrestraunts, setlistofrestraunts] = useState(resList);

  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = resList.filter(
              (res) => res.info.avgRating > 4
            ); //doubt its printing all the 15 elements of the list (not filtering)
            // console.log(resList);
            setlistofrestraunts(filteredlist);
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
        {resList.map((resItem) => {
          return <RestrauntCard key={resItem.info.id} res={resItem} />;
        })}
      </div>
    </div>
  );
};

export default Body;
