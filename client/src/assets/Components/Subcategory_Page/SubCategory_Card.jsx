import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
const SubCategory_Card = ({craft_item}) => {
    const{_id,itemName,subcategoryName, price,rating,processingTime, image,description}=craft_item;
    return (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000"
        >
            <div className="space-y-6 p-6 border raleway border-gray-400 rounded-2xl"
      >
        <div className="">
          <img
            className="w-full h-60 mx-auto  rounded-xl  "
            src={image}
            alt=""
          />
        </div>
        <div className="h-24">
          <h2 className="text-xl font-semibold">
          {itemName}
          </h2>
          <p className="text-[#878787] mt-4">
          {description}
          </p>
        </div>

        <div className="font-semibold  text-lg">
          <h2>
            Sub Category : <span className="text-green-500 font-bold">{subcategoryName}</span>
          </h2>
        </div>

        <div className="border border-[#30325E33] "></div>
        <div className="flex flex-col gap-4 lg:gap-0 md:flex-row md:justify-between px-2 text-[#878787] ">
          <div className="flex items-center md:justify-center gap-2">
          <RiMoneyDollarCircleFill className="size-6" />
            <h3 className="">Price : <span className="font-semibold inter text-red-500">{price}</span> </h3>
          </div>
          <div className="flex md:items-center lg:justify-center gap-2  ">
        
            
          </div>
          <div className="flex inter lg:items-center lg:justify-center gap-2  ">
            <h3 className=" font-semibold  ">
              Processing Time : <span className="text-red-400">{processingTime}</span>
            </h3>
          </div>
        </div>
        <div className="pt-4 flex gap-4  ">
        
          <h2 className="font-semibold inter">
            Rating: {rating}
          </h2>
        </div>
        
        <div>
          <Link to={`/craft_details/${_id}`}>
            <button data-tooltip-id="my-tooltip" data-tooltip-content="See full information" className="font-bold w-full  cursor-pointer transition hover:scale-105 text-white px-4 py-3 lg:px-6 lg:py-3 rounded-xl bg-[#E23567]">
              View Details
            </button>
            <Tooltip id="my-tooltip" />
          </Link>
        </div>
      </div>
        </div>
    );
};
SubCategory_Card.propTypes = {
    craft_item: PropTypes.object.isRequired,
  };
export default SubCategory_Card;