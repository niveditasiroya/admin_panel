// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to={"/"}>Home</Link>{" "}
//         </li>
//         <li>
//           <Link to={"/contact"}>Conatct</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logo from "../assets/Logo.jpg";
import image from "../assets/Avatar.png";
import piechartimage from "../assets/chart-pie.png";
import adjustimg from "../assets/adjustments.png";
import globalimge from "../assets/globe.png";
import cogimage from "../assets/cog.png";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full py-2 text-left focus:outline-none px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="w-full sticky top-0 bg-white h-16 pl-6 pr-6 border-b-2 shadow-md flex justify-end md:justify-between">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute left-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* <div className="flex gap-5 justify-center items-center"> */}
        <div
          className={` md:pb-0 absolute md:static bg-white md:flex left-0 w-full md:w-auto md:pl-0 pl-9 pt-5 md:pt-0 transition-all duration-500 ease-in ${
            open ? "top-[64px] " : "top-[-600px]"
          }`}
        >
          <div className="flex items-center gap-4">
            <div>
              <img src={logo} alt="icon" />
            </div>

            <div class="w-3/4 relative">
              <i className="absolute top-3 right-3 fa-solid fa-magnifying-glass"></i>

              <input
                type="text"
                placeholder="Search"
                className="w-full h-10 px-3 bg-gray-200 rounded-xl shadow-xl"
              />
            </div>
          </div>

          {/* overview sidebar */}
          <div className="hero-container md:hidden flex flex-col justify-between h-[calc(100%_-_4rem)] p-5 mt-5 mr-10 shadow-md">
            <div>
              <div className="mb-4 flex items-center gap-5">
                <div>
                  <img src={piechartimage} alt="icon  " />
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
                  <div className="">
                    <div className="flex items-center">
                      <AccordionItem title="Pages"></AccordionItem>
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

                {/* sales */}
                <div className="flex gap-1 mb-2">
                  <div>
                    <i class="pt-3 fa-solid fa-suitcase"></i>
                  </div>
                  <div className="flex">
                    <div className="">
                      <AccordionItem title="Sales">
                        <ul className="text-left">
                          <li className="mb-3">Product List</li>
                          <li className="mb-3">Billing</li>
                          <li className="mb-3">Invoice</li>
                        </ul>
                      </AccordionItem>
                    </div>
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

                <div className="flex gap-5  mb-3">
                  <div>
                    <i className="fa-solid fa-message"></i>
                  </div>
                  <div>
                    Messages
                    <span class="text-sm ml-4 font-medium me-2 px-2.5 py-0.5 rounded-full bg-pink-300 text-gray-600">
                      1
                    </span>
                  </div>
                </div>

                {/* authentication */}
                <div className=" flex gap-2 mb-6">
                  <div className="">
                    <i class="pt-3 fa-solid fa-lock"></i>
                  </div>
                  <div className="">
                    <div className="flex items-center">
                      <AccordionItem title="Authentication"></AccordionItem>
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

        {/* navbar notification */}
        <div className="flex gap-5 justify-end items-center">
          <div>
            <i className="fa-solid fa-bell"></i>
          </div>
          <div>
            <img src={image} alt="image" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
