import gif from "../../assets/jaconda-17.gif";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src={gif} alt="" />
      <h3 className="text-3xl text-center">page not found</h3>
      <Link
        to={"/"}
        className="btn rounded-md mt-10  bg-pink-600 hover:bg-pink-700 border-none text-white"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
