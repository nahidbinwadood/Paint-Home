import PropTypes from "prop-types";
import UseAuth from "../Hook/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import loader from '../loader/Spinner@1x-1.0s-200px-200px.svg'
const Craft_Secret = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) {
    return (
        <div className=" h-[70vh] flex items-center justify-center">
        <div><img src={loader} /></div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/log_in" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};
Craft_Secret.propTypes = {
  children: PropTypes.object.isRequired,
};
export default Craft_Secret;
