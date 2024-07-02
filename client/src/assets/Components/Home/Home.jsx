import { Helmet } from "react-helmet";
import Art_Craft_Categories from "./Art_Craft_Categories/Art_Craft_Categories";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Craft_Items from "./Craft_Items/Craft_Items";
import PropTypes from "prop-types";
const Home = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
        <Banner></Banner>
        <Craft_Items></Craft_Items>
        <Art_Craft_Categories></Art_Craft_Categories>
        <Blog></Blog>
        <Contact></Contact>
    </div>
  );
};
Home.propTypes = {
  title: PropTypes.object.isRequired,
}
export default Home;
