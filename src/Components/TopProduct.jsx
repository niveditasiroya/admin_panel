import React from "react";
import topProduct from "../Data/TopProduct.json";

const TopProduct = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-xl p-5">
        <h1 className="mb-6 text-2xl font-bold text-left">Top Products</h1>

        <div>
          <div>
            {topProduct.map((prodDetail) => {
              return (
                <div className="flex justify-between items-center border-b-2 mb-3">
                  <div className="text-left">
                    <p className="font-semibold">{prodDetail.name}</p>
                    <p className="font-light">{prodDetail.tool}</p>
                  </div>
                  <div>
                    <span className="font-semibold">
                      {prodDetail.salesprice}
                    </span>
                    span
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProduct;
