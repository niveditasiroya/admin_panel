import React from "react";
import pagenotfoundImage from "../assets/404.png";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <img src={pagenotfoundImage} alt="404 error " />
        </div>
        <div className="mb-16">
          <p className="text-4xl font-bold mb-5">Page Not Found</p>
          <p className="mb-5">
            Oops! Looks like you followed a bad link. If you think this is a
            problem with us, please tell us.
          </p>
          <button
            onClick={routeChange}
            className="rounded-xl px-4 py-2 bg-green-700 text-white"
          >
            Go back home
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
