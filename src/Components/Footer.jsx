import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row items-center h-16 justify-center sm:justify-between bg-white p-4 border-t-2 shadow-md">
        <div className="text-left">
          @ 2021 Themesberg, LLC. <span>All right reserved.</span>
        </div>
        <div className="flex gap-7">
          <div>
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
