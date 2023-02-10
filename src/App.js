import React, { useState, useEffect } from "react";
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

function useArticleLoader(topic, sortBy, order) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getArticles(topic, sortBy, order);
      setArticles(response.data.articles);
    }
    fetchData();
  }, [topic, sortBy, order]);

  return articles;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
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
            const response = await getArticles("all");
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
}

export default App;
