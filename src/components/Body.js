import { resList } from "../utils/mockData";
import { RestrauntCard } from "./RestrauntCard";
const Body = () => {
  return (
    <div className="Body">
      {/* <div className="search">search</div> */}

      <img
        src="https://www.dominos.co.in/blog/wp-content/uploads/2023/02/Pizza-Toppings-Banner.jpg"
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
