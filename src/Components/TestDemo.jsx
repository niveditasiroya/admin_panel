import React, { useState } from "react";
import image from "../assets/chart-pie.png";
import adjustimg from "../assets/adjustments.png";
import globalimge from "../assets/globe.png";
import cogimage from "../assets/cog.png";
import AccordionItem from "./AccordionItem";

const SliderMenu = () => {
  return (
    <>
      <div className="hero-container sticky top-14 hidden lg:flex flex-col justify-between w-1/6 h-[calc(100%_-_4rem)] p-5 border-r-2 md:shadow-md">
        <div>
          <div className="">
            <div className="mb-4 flex items-center gap-5">
              <div>
                <img src={image} alt="icon  " />
              </div>
              <div>
                <p className="text-green-700 text-xl">Overview</p>
              </div>
            </div>

            <div className="mb-4">
              <div className=" flex gap-2 mb-1">
                <div className="">
                  <i className="pt-3 fa-solid fa-file-lines"></i>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <AccordionItem title="Pages"></AccordionItem>
                    </div>
                    <div>
                      <span>
                        <svg
                          data-accordion-icon
                          className="w-3 h-3 rotate-180 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* sales */}
              <div className="flex gap-1 mb-2">
                <div>
                  <i class="pt-3 fa-solid fa-suitcase"></i>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="">
                    <AccordionItem title="Sales">
                      <ul className="text-left">
                        <li className="mb-3">Product List</li>
                        <li className="mb-3">Billing</li>
                        <li className="mb-3">Invoice</li>
                      </ul>
                    </AccordionItem>
                  </div>
                  <div>
                    <span className="pt-3">
                      <svg
                        data-accordion-icon
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* messages */}
              <div className="flex gap-1 items-center mb-3">
                <div>
                  <i className="fa-solid fa-message"></i>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div>
                    <AccordionItem title="Messages"></AccordionItem>
                  </div>
                  <div>
                    <span class="text-sm font-medium px-2.5 py-0.5 rounded-full bg-pink-300 text-gray-600">
                      1
                    </span>
                  </div>
                </div>
              </div>

              {/* authentication */}
              <div className=" flex gap-2 mb-6">
                <div className="">
                  <i class="pt-3 fa-solid fa-lock"></i>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <AccordionItem title="Authentication"></AccordionItem>
                    </div>
                    <div>
                      <span>
                        <svg
                          data-accordion-icon
                          className="w-3 h-3 rotate-180 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex mb-3 gap-7">
                <div>
                  <i class="fa-solid fa-file-invoice"></i>
                </div>
                <div>Docs</div>
              </div>
              <div className="flex mb-3 gap-5">
                <div>
                  <i class="fa-solid fa-file-circle-plus"></i>
                </div>
                <div>Components</div>
              </div>
              <div className="flex mb-3 gap-6">
                <div>
                  <i class="fa-brands fa-hire-a-helper"></i>
                </div>
                <div>Helps</div>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div>
              <img src={adjustimg} alt="" />
            </div>
            <div>
              <img src={globalimge} alt="" />
            </div>
            <div>
              <img src={cogimage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderMenu;
