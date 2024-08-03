import { RestrauntImageBaseURL } from "../utils/constants";

export const RestrauntCard = (props) => {
    const { res } = props;
    // console.log(res);
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
        <div className="cuisines">{res.info.cuisines}</div>
        <div className="avgRating">avgRating : {res.info.avgRating}</div>
      </div>
    );
  };