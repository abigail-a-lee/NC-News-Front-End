import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Splash from "./components/Splash";
import About from "./components/About";
import Contact from "./components/Contact";
import ArticlesList from "./components/ArticlesList";
import ArticlesDetails from "./components/ArticlesDetails";
import Users from "./components/Users";

import { Routes, Route } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="pb-2 flex flex-col min-h-screen bg-white dark:bg-gradient-to-br from-[#221425] to-black">
        <div className="fixed z-50 w-screen drop-shadow-md">
          <NavBar />
        </div>
        <div className="py-10 mt-20 px-4">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/articles/all" element={<ArticlesList />} />
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
