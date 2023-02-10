import React from "react";
import { Link } from "react-router-dom";
import errorPic from "./common/error.png";

function Error() {
  return (
    <div className="my-10 flex-col justify-center animated animatedFadeInUp fadeInUp">
      <img
        src={errorPic}
        className="h-[400px] mx-auto drop-shadow-md rounded-full ring-2 ring-white shadow-md shadow-white"
        alt="oh noes"
      ></img>
      <div className="my-2 text-3xl text-white text-center">
        <p>404: Not Found</p>
        <p>404お探しのページが見つかりませんでした</p>
        <footer className="my-8 ">
          <button className="hover:text-black hover:bg-violet-400 bg-violet-800 bg-opacity-50 p-2 rounded-md hover:cursor-pointer">
            <Link to="/">Go home?</Link>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Error;
