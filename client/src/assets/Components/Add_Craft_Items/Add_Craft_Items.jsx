import { useForm } from "react-hook-form";
import UseAuth from "../Hook/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Add_Craft_Items = ({title}) => {
  const { user } = UseAuth();
  const { displayName, email } = user;
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
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
    } = data;
    const newCraft = {
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
    };
    console.log(newCraft);
    // send data to the server
    fetch("https://paint-server-eight.vercel.app/add_craft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            title: "Success!",
            text: "Your craft has been added !",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(`/my-art-list/${email}`);
        }
      });
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="px-5 md:px-0"
    >
      <Helmet>
        <title>
          {title}
        </title>
      </Helmet>
      <div className="container mx-auto">
        <h2 className="raleway text-2xl md:text-5xl font-bold text-center mt-16">
          <span className="text-[#BE042F]">Add</span> New Craft Items
        </h2>
        <p className="inter text-center md:w-1/2 mx-auto mt-8">
          Welcome to the Add Craft Items page, where creativity thrives! Here,
          you can effortlessly expand your crafting arsenal by adding various
          materials, tools, and supplies.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-2/3 mx-auto rounded-xl raleway mt-12 space-y-4 p-8 border-2 border-gray-500"
        >
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <div className="md:w-1/2 space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                Item Name
              </label>
              <input
                placeholder="Enter item name"
                className="input input-bordered w-full "
                type="text"
                name="itemName"
                id=""
                {...register("itemName", { required: true })}
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <label className=" font-bold text-xl block mb-2">
                Subcategory Name
              </label>
              <select
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
            <div className="md:w-1/2 space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                User Name
              </label>
              <input
                placeholder="Enter User Name"
                defaultValue={displayName}
                className="input input-bordered w-full "
                type="text"
                name="customization"
                id=""
                {...register("userName", { required: true })}
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                User Mail
              </label>
              <input
                placeholder="Enter user mail"
                defaultValue={email}
                className="input input-bordered w-full"
                type="email"
                name="processingTime"
                id=""
                {...register("userMail", { required: true })}
              />
            </div>
          </div>
          <div className="flex gap-10 w-full">
            <div className="md:w-full space-y-4">
              <label className="font-bold text-xl" htmlFor="Name">
                Short Description
              </label>
              <input
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
              className="btn font-bold bg-[#EF5272] text-white  btn-block"
              type="submit"
              value="Add Craft"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
Add_Craft_Items.propTypes = {
  title: PropTypes.object.isRequired,
}
export default Add_Craft_Items;
