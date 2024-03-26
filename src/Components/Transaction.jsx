import React from "react";
import transaction from "../Data/Transaction.json";

const Transaction = () => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-xl p-5">
        <div className="mb-6 text-left">
          <h1 className="text-2xl font-bold">Transaction</h1>
          <p className="font-light">This is a list of latest tarnsactions.</p>
        </div>

        {/* table */}
        <div className="text-left">
          <table className="w-full">
            <thead className="border-b-2">
              <tr className="bg-gray-100 w-full">
                <th className="px-4 py-3">TRANSACTION</th>
                <th className="hidden px-4 py-3 lg:table-cell">DATE & TIME</th>
                <th className="hidden px-4 py-3 md:table-cell">AMOUNT</th>
                <th className="hidden px-4 py-3 sm:table-cell">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {transaction.map((tranData) => {
                return (
                  <tr className="">
                    <td className="px-5 py-3">
                      <span>{tranData.transactionfrom}</span>
                      <span className="pl-2 font-semibold">
                        {tranData.transperson}
                      </span>
                    </td>

                    <td className="hidden px-5 py-3 lg:table-cell">
                      {tranData.datetime}
                    </td>

                    <td className="hidden px-5 py-3 md:table-cell">
                      $ <span className="">{tranData.amount}</span>
                    </td>

                    <td className="hidden px-5 py-3 sm:table-cell">
                      <span
                        className={` rounded-xl px-3 py-2 ${
                          tranData.status === "Completed"
                            ? "bg-green-200"
                            : tranData.status === "In progress"
                            ? "bg-blue-200"
                            : "bg-red-200"
                        }`}
                      >
                        {tranData.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transaction;
