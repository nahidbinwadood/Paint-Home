import { useState } from "react";
import Craft_Categories_Card from "./Craft_Categories_Card";
import { useNavigation } from "react-router-dom";
import Loader from "../../loader/Loader";

const Art_Craft_Categories = () => {
  const [data, setData] = useState([]);
  useState(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://paint-server-eight.vercel.app/sub-collection"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
    return () => {};
  }, []);
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loader />;
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="mt-24 px-4 md:px-0 container mx-auto"
    >
      <h2 className="inter text-2xl md:text-4xl font-bold text-center mb-12">
        Art and Craft Categories
      </h2>
      <h2 className="raleway text-2xl md:text-2xl font-semibold text-center mb-12">
        Choose one of <span className="text-green-600">subcategories</span> for
        more information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((craft_item) => (
          <Craft_Categories_Card
            craft_item={craft_item}
            key={craft_item._id}
          ></Craft_Categories_Card>
        ))}
      </div>
    </div>
  );
};

export default Art_Craft_Categories;
