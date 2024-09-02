import { RestrauntImageBaseURL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items[0]?.card?.info);

  return (
    <div>
      {/* Category Items */}
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className=" mx-2 px-2 flex text-left justify-between"
          >
            <div className="min-w-[100px] border border-black border-b-2">
              <div>
                <span className="text-[17px] font-semibold font-sans text-gray-800 ">
                  {item?.card?.info?.name}
                </span>
                <span className="text-[17px] font-semibold font-sans text-gray-800 ">
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.price / 100}
                </span>
              </div>
              <p className=" border-b-4 text-[15px]  text-gray-600 font-sans font-semibold">
                {item?.card?.info?.description}
              </p>
              {/* <hr className="bg-blend-color"></hr> */}
              {/* <hr className=" border-b-[1px] border-solid border-y-gray-700 my-5"></hr> */}
            </div>
            <div className="w-[40px] px-16 my-0 min-w-[100px]">
              <button className="p-2 rounded-lg bg-white shadow-lg absolute m-auto font-sans font-bold mx-[40px] my-[45px] text-black hover:text-white hover:bg-black border-white  ">
                Add +
              </button>

              <img
                className="w-6/12 h-[140px] w-[140px] shadow-2xl"
                src={RestrauntImageBaseURL + item?.card?.info?.imageId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
