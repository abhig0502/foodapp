import { useContext } from "react";
import { RestrauntImageBaseURL } from "../utils/constants";
import UserContext from "../utils/UserContext";


export const RestrauntCard = (props) => {
    const { res } = props;
    // console.log(res);
    const {loggedInUser} =useContext(UserContext);
    return (
      <div className="res-card">
        {/* <img src={res.Image} alt={res.resname} className="card-image" /> */}
        <img
          alt="Restraunt Image"
          src={
            RestrauntImageBaseURL +
            res.info?.cloudinaryImageId
          }
          className="res-image"
        />
        {/* <div className="res-name">{res.Resname}</div>
        <div className="res-food-items">{res.FoodItems.join(", ")}</div>
        <div className="res-cost">Rs {res.Cost}</div> */}
  
        <div className="name">{res.info.name}</div>
        <div className="locality">{res.info.locality}</div>
        <div className="areaName">{res.info.areaName}</div>
        <div className="costForTwo">{res.info.costForTwo}</div>
        <div className="cuisines">{res.info.cuisines.join(", ")}</div>
        <div className="avgRating">avgRating : {res.info.avgRating}</div>
        <div className="my-5 font-bold">{loggedInUser}</div>
      </div>
    );
  };

 export const withPrmotedLabel=(RestrauntCard)=>{
  return (props)=>{
    return <div>
      <label className="absolute bg-orange-500 hover:bg-orange-300 px-2 py-2 mx-1 my-1 rounded-xl text-white text-lg ">Promoted</label>
      <RestrauntCard {...props}/>
    </div>
  }
}  