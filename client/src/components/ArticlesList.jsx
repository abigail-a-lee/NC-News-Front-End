import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ArticleBox from "./ArticleBox";
import LoadingScreen from "./common/LoadingScreen";
import { useParams } from "react-router-dom";

function ArticlesList({ handleTitleClick }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
console.log(category);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://abi-nc-news.onrender.com/api/articles${
          category !== "all" ? "?topic=" + category : ""
        }`
      )
      .then((response) => {
        setLoading(false);
        console.log("rrrr", response);
        setData(response.data.articles);
      });
  }, [category]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <h1 className="flex-row mx-auto max-w-[800px] text-shadow shadow-neutral-500 text-3xl text-neutral-300">
        {category === "all" ? "All topics" : category}
      </h1>
      <ArticleBox
        data={data}
        handleTitleClick={handleTitleClick}
        category={category}
      />
    </>
  );
}

export default ArticlesList;
