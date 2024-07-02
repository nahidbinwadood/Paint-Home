
import {  BounceLoader} from "react-spinners";

const Loader = () => {

  return (
    <div className=" h-[100vh] flex items-center justify-center">
      {/* <div>
        <img src={loader} />
      </div> */}
      <BounceLoader size={50} color='#BE042F' />
    </div>
  );
};

export default Loader;
