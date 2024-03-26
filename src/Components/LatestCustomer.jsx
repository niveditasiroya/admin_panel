import React, { useState } from "react";
// import image1 from "/assets/Avatar (1).png";

const LatestCustomer = (props) => {
  const data = props.data;
  console.log("data =>", data);
  return (
    <>
      <div className="w- bg-white shadow-lg rounded-xl">
        {/* latest customers */}
        <div className="p-5">
          <h1 className="mb-6 text-2xl font-bold text-left">
            Latest Customers
          </h1>
          <div className="customer-details-container">
            {data.map((item) => {
              return (
                <div className="flex justify-between items-center border-b-2 mb-3">
                  <div className="flex items-center gap-5">
                    <div className="">
                      {/* {console.log(item.profile)} */}
                      <img src={item.profile} alt="avtar" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{item.name}</p>
                      <p className="font-light">{item.email}</p>
                    </div>
                  </div>
                  <div className="font-semibold">$ {item.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestCustomer;
