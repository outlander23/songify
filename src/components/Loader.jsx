import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="w-full justify-center items-center flex-col ">
    <img src={loader} alt="loader" className="w-32 h-32" />
    <h1 className="font-bold text-2xl ">{title || "Loading"}</h1>
  </div>
);

export default Loader;
