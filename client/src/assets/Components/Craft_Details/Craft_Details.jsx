
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../loader/Loader";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";


const Craft_Details = ({title}) => {
  const craft = useLoaderData();
  const navigation=useNavigation();
  if (navigation.state === 'loading') return <Loader />
  const {
    itemName,
    subcategoryName,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    userMail,
    userName,
    image,
    description,
  } = craft;
  return (
    <div className="container inter mx-auto px-8 md:px-0 mt-12 mb-10">
      <Helmet>
        <title>
          {title}
        </title>
      </Helmet>
        <h2 className="raleway text-3xl md:text-5xl font-bold text-center my-12"> Craft Details</h2>
      <div className="flex flex-col gap-12">
        <div className="bg-[#1313130F] px-5 py-8 rounded-xl animate__animated animate__backInDown  animate__slow">
          <img
            className="object-contain items-center mx-auto h-full rounded-md lg:h-[650px] lg:w-full"
            src={image}
            alt=""
          />
        </div>
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000" className="space-y-5 text-center border border-gray-600 p-8 rounded-lg ">
          <h1 className="pf font-bold text-2xl md:text-5xl ">
            {itemName}
          </h1>

          <hr />
          <h4 className=" font-bold raleway text-lg  md:text-xl">
             <span className=" font-bold mr2">Sub category : </span> 
             <span className="text-green-500">{subcategoryName}</span>
          </h4>
          <hr />

          <h2 className=" font-bold ">
            Description :
            <span className="  pl-4">
              {description}
            </span>
          </h2>

          
          <hr />
          <div className="flex justify-center gap-16 ">
            <div className="  space-y-5">
              <h2>Price : </h2>
              <h2>Status:</h2>
              <h2>Customization:</h2>
              <h2>Rating:</h2>
              <h2>Processing Time :</h2>
            </div>
            <div className=" font-semibold  space-y-5">
              <h2 className="text-red-500"> {price} </h2>
              <h2 >{stockStatus}</h2>
              <h2> {customization} </h2>
              <h2>{rating} </h2>
              <h2>{processingTime} </h2>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="  text-lg md:text-xl">
              Added By :
              <span className="text-green-600 font-semibold"> {userName}</span>
            </h4>
          </div>
          <div className="hidden md:flex md:justify-center">
            <h4 className="  text-lg md:text-xl">
              Mail :
              <span className="text-green-600 font-semibold"> {userMail}</span>
            </h4>
          </div>
         
        </div>
      </div>
    </div>
  );
};
Craft_Details.propTypes = {
  title: PropTypes.object.isRequired,
}
export default Craft_Details;
