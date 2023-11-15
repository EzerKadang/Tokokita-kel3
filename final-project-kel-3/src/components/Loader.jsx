import { loader } from "../utils/images";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <img src={loader} alt="loading" className="w-[80px]" />
      </div>
    </div>
  );
};

export default Loader;
