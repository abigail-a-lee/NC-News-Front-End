import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";

function PageLayout({ isDarkMode, isLoading, setIsLoading }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`${isDarkMode ? "dark" : ""} max-w-screen `}>
      <div className="pb-2 flex flex-col min-h-screen bg-white dark:bg-[#221425] md:dark:bg-gradient-to-br from-[#221425] to-black">
        <div className="flex-grow-0 flex-shrink-0 top-0 left-0 right-0 fixed z-[80] w-screen drop-shadow-md">
          <NavBar />
        </div>
        <div
          className={`animated animatedFadeInUp fadeInUp py-1 px-2 mt-20 mx-auto max-w-[100vw] md:max-w-[900px] ${
            isLoading ? "" : ""
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
