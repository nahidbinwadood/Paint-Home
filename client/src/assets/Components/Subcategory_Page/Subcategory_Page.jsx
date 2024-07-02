import { useLoaderData, useNavigation } from "react-router-dom";
import SubCategory_Card from "./SubCategory_Card";
import Loader from "../loader/Loader";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Subcategory_Page = ({title}) => {

    const loadedSubData=useLoaderData();
    const subCategoryName=loadedSubData[0].subcategoryName;

    //loading :

    const navigation=useNavigation();
    if (navigation.state === 'loading') return <Loader />
    return (
        <div className="mt-24 px-4 md:px-0 container mx-auto">
            <Helmet>
                <title>
                    {title}
                </title>
            </Helmet>
            <h2 data-aos="flip-left" data-aos-easing="linear" data-aos-duration="2000"
             className="raleway text-2xl md:text-4xl font-bold text-center mb-12">Your Chosen Category : <span className="text-green-500">{subCategoryName}</span> </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    loadedSubData.map(craft_item=> <SubCategory_Card craft_item={craft_item} key={craft_item._id}></SubCategory_Card>)
                }
                
            </div>
        </div>
    );
};
Subcategory_Page.propTypes = {
    title: PropTypes.object.isRequired,
  }
export default Subcategory_Page;