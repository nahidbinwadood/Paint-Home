import { Link, useLoaderData, useNavigation } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import loader from "../loader/Spinner@1x-1.0s-200px-200px.gif";
import Loader from "../loader/Loader";
import { Tooltip } from "react-tooltip";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";




const All_Art_Items = ({title}) => {
  const { loading } = UseAuth();
  const allItems = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loader />;
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <h2 className="raleway text-5xl font-bold text-center mt-16">
          All Arts and Paints
        </h2>
        <p className="text-center inter text-md md:w-1/2 mx-auto raleway my-4">
          All Arts and Paints is a haven for creative souls, offering a diverse
          range of artistic materials and supplies. From premium paints in every
          hue to high-quality brushes and canvases, it caters to both seasoned
          artists and beginners.
        </p>
      </div>
      {loading ? (
        <div className=" h-[70vh] flex items-center justify-center">
          <div>
            <img src={loader} />
          </div>
        </div>
      ) : (
        <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"
         className="inter mt-16">
          {/* Large: */}
          <div className="hidden md:block">
            <div className="overflow-x-auto ">
              <table className="table border-collapse border border-gray-400">
                {/* head */}
                <thead>
                  <tr className="text-white raleway text-base bg-[#DE00DF]">
                    <th></th>
                    <th>Created By</th>
                    <th>Item Name </th>
                    <th>Sub Category Name </th>
                    {/* <th>Processing Time </th> */}
                    <th>Price</th>
                    {/* <th>Rating</th> */}
                    <th className="text-center">View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {allItems.map((item, idx) => (
                    <tr className="border border-gray-300" key={item._id}>
                      <th>{idx + 1}</th>
                      <td>{item.userName}</td>
                      <td>{item.itemName}</td>
                      <td>{item.subcategoryName}</td>
                      {/* <td>{item.processingTime}</td> */}
                      <td>{item.price}</td>
                      {/* <td>{item.rating}</td> */}
                      <td>
                        <Link to={`/craft_details/${item._id}`}>
                          <button
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="See full information"
                            className="font-bold w-full  cursor-pointer transition hover:scale-105 px-4 py-3  rounded-xl bg-[#FFD302] text-white"
                          >
                            View Details
                          </button>
                          <Tooltip id="my-tooltip" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Small  */}
          <div>
            <div className=" md:hidden">
              <div className="overflow-x-auto ">
                <table className="table border-collapse border border-gray-400">
                  {/* head */}
                  <thead>
                    <tr className="text-white raleway text-base bg-[#DE00DF]">
                      <th>Item Name </th>
                      <th>Price</th>
                      <th>View Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {allItems.map((item) => (
                      <tr className="border border-gray-300" key={item._id}>
                        <td>{item.itemName}</td>
                        <td>{item.price}</td>
                        <td>
                          <Link to={`craft_details/${item._id}`}>
                            <button className="font-bold w-full  cursor-pointer transition hover:scale-105 px-4 py-3  rounded-xl bg-[#FFD302] text-white">
                              View Details
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
All_Art_Items.propTypes = {
  title: PropTypes.object.isRequired,
}
export default All_Art_Items;
