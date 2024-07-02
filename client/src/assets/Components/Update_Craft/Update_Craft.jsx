import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../Hook/UseAuth";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const Update_Craft = ({ title }) => {
  const { register, handleSubmit } = useForm();
  const updateCraftData = useLoaderData();
  console.log(updateCraftData);
  const navigate = useNavigate();
  const { user } = UseAuth();
  const { email } = user;
  const {
    _id,
    itemName,
    subcategoryName,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    image,
    description,
  } = updateCraftData;
  console.log(updateCraftData);
  const onSubmit = (data) => {
    const {
      itemName,
      subcategoryName,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      image,
      description,
    } = data;
    const newCraft = {
      itemName,
      subcategoryName,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      image,
      description,
    };
    console.log(newCraft);
    // send data to the server
    fetch(`https://paint-server-eight.vercel.app/my_art_item/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your craft has been Updated !",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(`/my-art-list/${email}`);
        }
      });
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="px-5 md:px-0"
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container mx-auto">
        <h2 className="raleway text-2xl md:text-5xl font-bold text-center mt-16">
          <span className="inter text-green-500">Update</span> Your Craft Items
        </h2>
        <p className="inter text-center md:w-1/2 mx-auto mt-8">
          Welcome to the update Craft Items page, where creativity thrives!
          Here, you can effortlessly expand your crafting arsenal by adding
          various materials, tools, and supplies.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-2/3 mx-auto raleway mt-12 rounded-xl space-y-4 p-8 border-2 border-gray-500"
        >
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="md:w-1/2 space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                Item Name
              </label>
              <input
                defaultValue={itemName}
                placeholder="Enter item name"
                className="input input-bordered w-full "
                type="text"
                name="itemName"
                id=""
                {...register("itemName", { required: true })}
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <label className=" font-bold text-xl block mb-2  dark:text-white">
                Subcategory Name
              </label>
              <select
                defaultValue={subcategoryName}
                {...register("subcategoryName")}
                id="countries"
                className="bg-gray-50 border input input-bordered border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a Subcategory</option>
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing"> Portrait Drawing</option>
                <option value="Watercolor Painting">Watercolor Painting</option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="md:w-1/2 space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                Price
              </label>
              <input
                defaultValue={price}
                placeholder="Enter price"
                className="input input-bordered w-full "
                type="text"
                name="price"
                id=""
                {...register("price", { required: true })}
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                Rating
              </label>
              <input
                defaultValue={rating}
                placeholder="Enter rating"
                className="input input-bordered w-full"
                type="text"
                name="rating"
                id=""
                {...register("rating", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="md:w-1/2 space-y-4">
              <label className=" font-bold text-xl block mb-2">
                Customization
              </label>
              <select
                defaultValue={customization}
                {...register("customization")}
                id="countries"
                className="bg-gray-50 border input input-bordered border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose Customization</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="md:w-1/2 space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                Processing Time
              </label>
              <input
                defaultValue={processingTime}
                placeholder="Enter processing time"
                className="input input-bordered w-full"
                type="text"
                name="processingTime"
                id=""
                {...register("processingTime", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="md:w-1/2 space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                Stock Status
              </label>
              <input
                defaultValue={stockStatus}
                placeholder="Example: In stock / Made to Order"
                className="input input-bordered w-full "
                type="text"
                name="customization"
                id=""
                {...register("stockStatus", { required: true })}
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                Image
              </label>
              <input
                defaultValue={image}
                placeholder="Enter image url"
                className="input input-bordered w-full"
                type="url"
                name="processingTime"
                id=""
                {...register("image", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="md:w-full space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                Short Description
              </label>
              <input
                defaultValue={description}
                placeholder="Enter description"
                className="input input-bordered w-full "
                type="text"
                name="description"
                id=""
                {...register("description", { required: true })}
              />
            </div>
          </div>
          <div className="w-full">
            <input
              className="btn font-bold bg-green-500 hover:bg-purple-500 hover:text-white text-white btn-block"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
Update_Craft.propTypes = {
  title: PropTypes.object.isRequired,
};
export default Update_Craft;
