import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
const Craft_Categories_Card = ({ craft_item }) => {
  const { subcategoryName, image, description } = craft_item;
  return (
    <Link
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-tooltip-id="my-tooltip"
      data-tooltip-content={`See all data about ${subcategoryName}`}
      to={`subcategory_cards/${subcategoryName}`}
    >
      <Tooltip id="my-tooltip" />
      <div className="space-y-6 p-6 border raleway border-gray-400 rounded-2xl">
        <div className="">
          <img
            className="w-full h-60 mx-auto  rounded-xl  "
            src={image}
            alt=""
          />
        </div>
        <div className="h-24 space-y-4">
          <h2 className="font-bold">
            Sub Category :{" "}
            <span className="text-green-500 font-bold">{subcategoryName}</span>
          </h2>
          <p className="mt-4">
            {" "}
            <span className=" font-bold"> Description : </span> {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
Craft_Categories_Card.propTypes = {
  craft_item: PropTypes.object.isRequired,
};
export default Craft_Categories_Card;
