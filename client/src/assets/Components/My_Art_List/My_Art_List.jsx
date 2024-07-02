import { useLoaderData, useNavigation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import My_Art_Card from "./My_Art_Card";
import { useState } from "react";
import Error_Page from "../Error_Page/Error_Page";
import Loader from "../loader/Loader";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";


const My_Art_List = ({title}) => {
  const loadedMyArts = useLoaderData();
  const [myArts, setMyArts] = useState(loadedMyArts);
  const [showMyArts, setShowMyArts] = useState([]);

  // Loading:
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loader />;

  const handleFilter = (filter) => {
    if (filter == "yes") {
      console.log(showMyArts);
      const sortByRating = myArts.sort((a, b) => {
        if (a.customization === "Yes" && b.customization === "No") {
          return -1;
        } else if (a.customization === "No" && b.customization === "Yes") {
          return 1;
        } else {
          return 0;
        }
      });
      setShowMyArts([...sortByRating]);
    } else if (filter == "no") {
      const sortByRating = myArts.sort((a, b) => {
        if (a.customization === "Yes" && b.customization === "No") {
          return 1;
        } else if (a.customization === "No" && b.customization === "Yes") {
          return -1;
        } else {
          return 0;
        }
      });
      setShowMyArts([...sortByRating]);
    }
  };
  return (
    <div className="px-4 md:px-0">
      <Helmet>
        <title>
          {title}
        </title>
      </Helmet>
      <div className="mt-24 container mx-auto">
        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
          <h2 className="raleway text-2xl md:text-4xl font-bold text-center mb-12">
            My Craft Items
          </h2>
        </div>

        {loadedMyArts.length > 0 ? (
          <div>
            {/* Sort */}

            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000"
             className="flex justify-end mb-24">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 bg-green-500 px-10 "
                >
                  <h2 className="text-white ws font-semibold text-xl">
                    Sort By
                  </h2>
                  <RiArrowDropDownLine className="size-8 text-white" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li onClick={() => handleFilter("yes")}>
                    <a> Customization (Yes)</a>
                  </li>
                  <li onClick={() => handleFilter("no")}>
                    <a> Customization (No) </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myArts.map((myCraft) => (
                <My_Art_Card
                  key={myCraft._id}
                  myArts={myArts}
                  setMyArts={setMyArts}
                  myCraft={myCraft}
                ></My_Art_Card>
              ))}
            </div>
          </div>
        ) : (
          <Error_Page ></Error_Page>
        )}
      </div>
    </div>
  );
};
My_Art_List.propTypes = {
  title: PropTypes.object.isRequired,
}
export default My_Art_List;
