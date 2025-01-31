import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function MobileAccordionMenu({ items }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const current_path = location.pathname;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <>
      {items &&
        items.length > 0 &&
        items.map((menu_item, index) => (
          <div className="-mx-3">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              aria-controls="disclosure-1"
              aria-expanded="false"
              // onClick={() => setOpen(!open)}
              onClick={() => handleClick(index)}
            >
              {menu_item.name}
              {/* <!--
     Expand/collapse icon, toggle classes based on menu open state.
     Open: "rotate-180", Closed: ""
   --> */}
              <svg
                className="h-5 w-5 flex-none"
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
            {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
            {index === activeIndex && (
              <div
                // className={`${open ? "block" : "hidden"} mt-2 space-y-2`}
                className="mt-2 space-y-2"
              >
                {/* <MobileAccordionMenu items={menu_item["childMenu"]} /> */}
                {menu_item["childMenu"].map((sub_menu_item) => {
                  return (
                    <>
                      <a
                        key={sub_menu_item.id}
                        href={sub_menu_item.URL}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {sub_menu_item.name}
                      </a>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        ))}
    </>
  );
}
export default MobileAccordionMenu;
