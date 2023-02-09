import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import About from "./components/About";
import Contact from "./components/Contact";
import ArticlesList from "./components/ArticlesList";
import ArticleDetails from "./components/ArticleDetails";
import Users from "./components/Users";

import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();
  const handleTitleClick = (topic = "/all", id = "") => {
    navigate(`/articles${topic}${id}`);
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""} max-w-[100vw]`}>
      <div className="pb-2 flex flex-col min-h-screen bg-white dark:bg-gradient-to-br from-[#221425] to-black">
        <div className="fixed z-50 w-screen drop-shadow-md">
          <NavBar />
        </div>
        <div className="py-4 px-2 mt-20 mx-auto max-w-[900px]">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route
              path="/articles/:topic"
              element={<ArticlesList handleTitleClick={handleTitleClick} />}
            />
            <Route
              path="/articles/:topic/:articleId"
              element={<ArticleDetails handleTitleClick={handleTitleClick} />}
            />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
