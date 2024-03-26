import React from "react";
import LatestCustomer from "./LatestCustomer";
import TopProduct from "./TopProduct";
import Transaction from "./Transaction";
import Footer from "./Footer";
import customerData from "../Data/CustomerData.json";
import Sales from "./Sales";

const DetailPage = () => {
  return (
    <>
      <div className="pl-5 lg:pl-20 pr-5 lg:pr-20 pt-5 lg:pt-10 pb-5 lg:pb-10 w-full bg-gray-200">
        <div className="">
          <div>
            <Sales />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-3/6 lg:w-2/4 xl:w-1/4">
              <LatestCustomer data={customerData} />
            </div>
            <div className="md:w-3/6 lg:w-2/4 xl:w-3/4">
              <TopProduct />
            </div>
          </div>
          <div className="mt-6">
            <Transaction />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
