import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Splash() {
  return (
    <div>
      <header className="focus-in-contract-bck py-8 lg:py-16 text-center">
        <div className="flex-column justify-between items-center mb-2 bg-clip-text ">
          <h1 className="drop-shadow-md pb-20 color-change-5x text-6xl md:text-[100px] font-semibold opacity-80  text-transparent mx-auto">
            Welcome.
          </h1>
        </div>
      </header>{" "}
      <h2 className=" hover:bg-violet-400 max-w-[200px] mx-auto p-2 bg-violet-800 bg-opacity-25 focus-in-contract-bck-delayed hover:text-black text-center cursor-pointer rounded-md text-5xl text-white animated animatedFadeInUp fadeInUp">
        <Link to="/articles">Start</Link>
      </h2>
    </div>
  );
}

export default Splash;
