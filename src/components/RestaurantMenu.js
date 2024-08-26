import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestraunt";

const RestrauntMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); //resId name in this file and in the app.js file can they be different and why do we have kept this in braces
  const resInfo=useRestaurantMenu(resId);
  
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   // console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  

  const  itemcards  =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
  // console.log(itemcards);
//console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  console.log( resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
 const catogories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@info"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className="Menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <p>
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costfortwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemcards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {" "}
            {item.card.info.name} - {"Rs. "}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}

        {/* <li>{itemcards[0].card.info.name}</li>
        <li>{itemcards[1].card.info.name}</li>
        <li>{itemcards[2].card.info.name}</li> */}
      </ul>
    </div>
    

  );
};

export default RestrauntMenu;
