import { Link, useNavigate} from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import UseAuth from "../Hook/UseAuth";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const My_Art_Card = ({ myCraft,myArts,setMyArts }) => {
  const {user}=UseAuth();
  const {email}=user;
  const { _id,itemName, subcategoryName,price,rating,customization, stockStatus,image,description,} = myCraft;
  const navigate = useNavigate();


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://paint-server-eight.vercel.app/my_art_list/${_id}`,{
            method:"DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
            }
            const remaining=myArts.filter(art=> art._id !== id)
            setMyArts(remaining);
            navigate(`/my-art-list/${email}`);
          });
      }
    });
  };
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
      <div className="space-y-6 p-6 border raleway border-gray-400 rounded-2xl">
        <div className="">
          <img
            className="w-full h-60 mx-auto  rounded-xl  "
            src={image}
            alt=""
          />
        </div>
        <div className="h-24">
          <h2 className="text-xl font-semibold">{itemName}</h2>
          <p className="text-[#878787] mt-4">{description}</p>
        </div>

        <div className="font-semibold  text-lg">
          <h2>
            Sub Category :{" "}
            <span className="text-green-500 font-bold">
              {subcategoryName}
            </span>
          </h2>
        </div>

        <div className="border border-[#30325E33] "></div>
        <div className="flex flex-col gap-4 lg:gap-0 md:flex-row md:justify-between px-2 text-[#878787] t">
          <div className="flex items-center md:justify-center gap-2">
            <RiMoneyDollarCircleFill className="size-6" />
            <h3 className="">
              Price :{" "}
              <span className="font-semibold inter text-red-600">
                {price}
              </span>{" "}
            </h3>
          </div>
          <div className="flex md:items-center lg:justify-center gap-2  "></div>
          <div className="flex lg:items-center lg:justify-center gap-2  ">
            <h3 className=" font-semibold ">
              Stock Status : <span className="text-red-700">{stockStatus}</span>
            </h3>
          </div>
        </div>
        <div className="pt-4 flex gap-4 justify-between px-4 ">
          <h2 className="font-semibold inter">Rating: <span className="font-bold ">{rating}</span></h2>
          <h2 className="font-semibold inter">Customization: <span className="font-bold text-red-400">{customization}</span> </h2>
        </div>

        <div>
          <Link to={`/update-craft/${_id}`}>
            <button data-tooltip-id="my-tooltip" data-tooltip-content="Update Your Craft" className="font-bold w-full mb-5 cursor-pointer transition hover:scale-105 text-white px-4 py-3 lg:px-6 lg:py-3 rounded-xl bg-green-500">
              Update
            </button>
            <Tooltip id="my-tooltip" />
          </Link>
          
            <button data-tooltip-id="my-tooltip"  data-tooltip-place="bottom" data-tooltip-content="Delete Your Craft" onClick={()=>handleDelete(_id)} className="font-bold w-full  cursor-pointer transition hover:scale-105 text-white px-4 py-3 lg:px-6 lg:py-3 rounded-xl bg-red-500">
              Delete
            </button>
            <Tooltip id="my-tooltip" />
          
        </div>
      </div>
    </div>
  );
};
My_Art_Card.propTypes = {
  myCraft: PropTypes.object.isRequired,
};
My_Art_Card.propTypes = {
    myArts: PropTypes.object.isRequired,
};
My_Art_Card.propTypes = {
    setMyArts: PropTypes.object.isRequired,
};
export default My_Art_Card;
