import { useLoaderData, useNavigation } from "react-router-dom";
import Craft_Card from "../../Craft_Card/Craft_Card";
import Loader from "../../loader/Loader";

const Craft_Items = () => {
  const allCraftedItems = useLoaderData();
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
      <h2 className="raleway text-2xl md:text-4xl font-bold text-center mb-4">
        Craft Items{" "}
      </h2>
      <p className="text-center inter text-md md:w-1/2 mx-auto raleway my-4  mb-12">
        Craft items encompass a vast array of creative supplies, from beads and
        fabrics to paints and brushes. They inspire imagination and enable
        individuals to express themselves through art.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCraftedItems.map((craft_item) => (
          <Craft_Card craft_item={craft_item} key={craft_item._id}></Craft_Card>
        ))}
      </div>
    </div>
  );
};

export default Craft_Items;
