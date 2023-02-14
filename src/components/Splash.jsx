import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Splash() {
  return (
    <main>
      <header className="focus-in-contract-bck text-center flex-column justify-between items-center mb-2 bg-clip-text ">
        <h1 className="drop-shadow-md color-change-5x text-6xl md:text-[100px] font-semibold opacity-80  text-transparent mx-auto">
          Welcome.
        </h1>
      </header>
      <article className="m-2 text-2xl text-white text-left">
        <p
          className="focus-in-contract-bck bg-black p-4 rounded-lg bg-opacity-25 my-2"
          style={{ animationDelay: "1s" }}
        >
          This is a frontend project I created during a one week solo sprint as
          part of my 13 week full stack development course with Northcoders.{" "}
          <br /> <br />
          It is a sister project to the backend API I created a month prior,
          which utilises Express.JS and PostgreSQL
        </p>
        <p
          className="focus-in-contract-bck bg-black p-4 rounded-lg bg-opacity-25 my-2"
          style={{ animationDelay: "3s" }}
        >
          The goal I decided to work towards was to create a Reddit-inspired
          topical discussion site, allowing users to vote up/vote down articles
          they like/dislike, as well as post comments on articles.
        </p>
        <p
          className="focus-in-contract-bck bg-black p-4 rounded-lg bg-opacity-25 my-2"
          style={{ animationDelay: "5s" }}
        >
          Built using React, TailwindCSS for styling and Axios for API calls.
        </p>
      </article>
      <footer>
        <h2
          className="focus-in-contract-bck mt-8 hover:bg-violet-400 max-w-[200px] mx-auto p-2 bg-violet-800 bg-opacity-25  hover:text-black text-center cursor-pointer rounded-md text-5xl text-white "
          style={{ animationDelay: "7s" }}
        >
          <Link to="/articles">Start</Link>
        </h2>
      </footer>
    </main>
  );
}

export default Splash;
