import { resList } from "../utils/mockData";
import { RestrauntCard } from "./RestrauntCard";
import { DominosImageOnHomePageURL } from "../utils/constants";
const Body = () => {
  return (
    <div className="Body">
      {/* <div className="search">search</div> */}

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            resList = resList.filter((res) => res.info.avgRating > 4);
            console.log(resList);
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
