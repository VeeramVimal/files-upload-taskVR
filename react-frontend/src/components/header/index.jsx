import React, { useEffect, useState } from "react";
import "./header.css";
import { DatePicker, Space } from "antd";
import Logo from "../../assets/Images/terolo.svg";
import { ImagePath } from "../../utils/imageUtils";
const { NavbarData } = require("./navigateData");
export default function Header(props) {
  const { RangePicker } = DatePicker; // date-picker range
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // toggle nav-bar function
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    // setOpen(!open)
  };

  return (
    <header className="">
      {/* <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8 shadow dark:bg-slate-800"
        aria-label="Global"
      > */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-gray-200 dark:border-gray-600" aria-label="Global">
        <div className="flex lg:flex-1">
          {/* <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
      </a> */}
          <a href="#" className="flex items-center">
            <img
              src={ImagePath("Images/bm.png")}
              // src={Logo}
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="self-center text-2xl text-gray-900 font-semibold whitespace-nowrap dark:text-white hover:text-primary">
              BIT-X
            </span>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {NavbarData &&
            NavbarData.length > 0 &&
            NavbarData.map((item, index) => {
              return (
                <div className="relative group">
                  {item.subMenu == true && item["childMenu"].length >= 0 ? (
                    <div className="">
                      <button
                        type="button"
                        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-800 dark:text-gray-300 hover:text-primary"
                        aria-expanded="false"
                        // onMouseDown={}
                        // onClick={() => setOpen(!open)}
                        onClick={() => handleClick(index)}
                      >
                        {item.name}
                        <svg
                          className="h-5 w-5 flex-none text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      {index === activeIndex && (
                        <div
                          // className={`${
                          //   open ? "absolute" : "hidden"
                          // } -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}   dark:bg-slate-700/50
                          className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:ring-slate-500/30 dark:bg-slate-800 dark:shadow-lg group-hover:block"
                          // onMouseLeave={() => setOpen(!open)}
                          aria-hidden="true"
                        >
                          <div className="p-4">
                            {item["childMenu"].map((sub_item, index) => {
                              return (
                                <div
                                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 "
                                  key={sub_item.id}
                                >
                                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    {/* title side logo */}
                                    {sub_item.titleLogo}
                                  </div>
                                  <div className="flex-auto">
                                    <a
                                      href={sub_item.URL}
                                      className="block font-semibold text-gray-900"
                                    >
                                      {sub_item.name}
                                      <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-600 hover:text-primary">
                                      {sub_item.title}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : item.subMenu == false ? (
                    <a
                      href={item.URL}
                      className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-300 hover:text-primary"
                    >
                      {item.name}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
        </div>
        {/* <div className="hidden lg:flex transition duration-500 ease-in-out rounded-full p-2 relative lg:gap-x-12">
        <i className="ri-notification-line ri-lg ml-10 text-blue-500"></i>
        <i class="ri-sun-fill ml-10 ri-lg w-14 text-blue-500 gap-x-3"></i>
      </div> */}
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
        
      </div> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="relative group">
            {props.darkMode ? (
              <button onClick={() => props.handleThemeMode("light-mode")}>
                {/* light mode icon */}
                <i class="ri-sun-line ml-10 ri-lg w-14 text-blue-500"></i>
              </button>
            ) : (
              <button onClick={() => props.handleThemeMode("dark-mode")}>
                {/* dark mode icon */}
                <i class="ri-moon-line ml-10 ri-lg w-14 text-blue-500"></i>
              </button>
            )}
          </div>
          <div className="relative group">
            <i className="ri-notification-line ri-lg ml-10 text-blue-500"></i>
          </div>
          <div className="relative group">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-800 ml-10 dark:text-gray-300 hover:text-primary"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
