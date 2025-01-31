import React, { useEffect, useState } from "react";
import Header from "../header";
// import SideBar from "../sidebar";
import Mobilenavbar from "../header/MobileNavbar";
import useDarkSide from "../../utils/useDarkSide";
export default function Layout(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkMode, setDarkMode] = useState(false);
// fetch the localstorage theme
  const getTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";
  useEffect(() => {
    if(getTheme == "dark") setDarkMode(true);
    else if (getTheme == "light") setDarkMode(false);
  }, [colorTheme, getTheme]);

  const handleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("xs:hidden");
    setShowSidebar(true);
  };

  // handle dark or light mode function
  const handleThemeMode = (modeType) => {
    if(modeType == "dark-mode") {
      setTheme("dark"); setDarkMode(true);
    } else if (modeType == "light-mode") {
      setTheme("light"); setDarkMode(false)
    }
    // setTheme(colorTheme)
  };
  return (
    <>
      <div className="w-full h-screen flex overflow-hidden ">
        <div className="hidden sm:block md:block xl:block" id="sidebar">
          {/* <SideBar /> */}
        </div>
        {/* <div className="w-full bg-white overflow-auto pb-10">
          <Header sidebar={handleSidebar} showSidebar={showSidebar} />
          <Mobilenavbar />
          {props.children}
        </div> */}
        <div className="w-full bg-white dark:bg-slate-800 dark:border-slate-800 overflow-auto pb-10">
          {/* <header > */}
          <Header handleThemeMode={handleThemeMode} darkMode={darkMode}/>
          {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
          <Mobilenavbar />
          {props.children}
          {/* </header> */}
        </div>
      </div>
    </>
  );
}
