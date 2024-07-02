import { useContext } from "react";
import { AuthContext } from "../Firebase_AuthProvider/Firebase_AuthProvider";

const UseAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default UseAuth;
