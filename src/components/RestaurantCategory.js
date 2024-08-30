import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=(props)=>{
    const {data, showItems, setShowIndex }=props;
    // const [showItem,setshowItem]=useState(false);
    const handleClick=()=>{
        // setshowItem(!showItem);
        setShowIndex();
    };
    return <div>
        {/* header */}
        <div className=" w-6/12 bg-gray-100 rounded-lg shadow-xl p-2  mx-auto my-4 ">
        <div className="flex justify-between" onClick={handleClick}>
            <span className="font-extrabold text-[19px] cursor-pointer">{data.title} ({data.itemCards.length})</span>
            <span className="text-[18px] cursor-pointer">🔽</span>
            </div>
            {showItems && <ItemList items={data.itemCards} /> }
            {/* // i need to pass the key here during map iteration */}
        </div>
        {/* body */}
           
    </div>
}

export default RestaurantCategory;