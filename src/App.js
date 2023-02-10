import React, { useState } from "react";
import "./App.css";
import Splash from "./components/Splash";
import About from "./components/About";
import Contact from "./components/Contact";
import ArticlesList from "./components/ArticlesList";
import ArticleDetails from "./components/ArticleDetails";
import Users from "./components/Users";
import { getArticleById, getArticles, getCommentsById } from "./utils/api";
import { RouterProvider } from "react-router-dom";
import Error from "./components/Error";

import { createBrowserRouter, Navigate } from "react-router-dom";
import PageLayout from "./components/PageLayout";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  /*   const navigate = useNavigate();
  const handleTitleClick = (topic = "/all", id = "") => {
    window.scrollTo(0, 0);
    navigate(`/articles${topic}${id}`);
  }; */
  const appRouter = createBrowserRouter([
    {
      element: (
        <PageLayout
          isDarkMode={isDarkMode}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ),
      errorElement: <Navigate to="/error" />,
      children: [
        { index: true, element: <Splash /> },
        {
          path: "/articles",
          element: <ArticlesList setIsLoading={setIsLoading} />,
          errorElement: <Navigate to="/error" />,
          loader: async () => {
            const response = await getArticles();
            return response.data.articles;
          },
        },
        {
          path: "/articles/:topic",
          element: <ArticlesList setIsLoading={setIsLoading} />,
          errorElement: <Navigate to="/error" />,
          loader: async (request) => {
            const topic = request.params.topic;
            const response = await getArticles(topic);
            return response.data.articles;
          },
        },
        {
          path: "/articles/:topic/:articleId",
          element: <ArticleDetails />,
          errorElement: <Navigate to="/error" />,
          loader: async (request) => {
            const articleId = request.params.articleId;
            const responseArticle = await getArticleById(articleId);
            const responseComments = await getCommentsById(articleId);
            return {
              article: responseArticle.data.article,
              comments: responseComments.data.comments,
            };
          },
        },
        {
          path: "/users",
          element: <Users />,
          errorElement: <Navigate to="/error" />,
        },
        {
          path: "/about",
          element: <About />,
          errorElement: <Navigate to="/error" />,
        },
        {
          path: "/contact",
          element: <Contact />,
          errorElement: <Navigate to="/error" />,
        },
        {
          path: "/error",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;

  /* return (
    <div className={`${isDarkMode ? "dark" : ""} max-w-screen `}>
      <div className="pb-2 flex flex-col min-h-screen bg-white dark:bg-black md:dark:bg-gradient-to-br from-[#221425] to-black">
        <div className="fixed z-50 w-screen drop-shadow-md">
          <NavBar />
        </div>
        <div
          className={`py-1 px-2 mt-20 mx-auto md:max-w-[900px] ${
            loading ? "blur-sm" : ""
          }`}
        >
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route
              path="/articles/:topic"
              element={
                <ArticlesList
                  handleTitleClick={handleTitleClick}
                  setLoading={setLoading}
                  loading={loading}
                />
              }
            />
            <Route
              path="/articles/:topic/:articleId"
              element={
                <ArticleDetails
                  handleTitleClick={handleTitleClick}
                  setLoading={setLoading}
                  loading={loading}
                />
              }
            />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  ); */
}

export default App;
