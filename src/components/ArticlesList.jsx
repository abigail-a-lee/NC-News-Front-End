import React, { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticleBox from "./ArticleBox";
import LoadingScreen from "./common/LoadingScreen";
import { useParams } from "react-router-dom";

function ArticlesList({ handleTitleClick }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticles(topic)
      .then((response) => {
        setLoading(false);
        setData(response.data.articles);
      });
  }, [topic]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <h1 className="flex-row mx-auto max-w-[800px] text-shadow shadow-neutral-500 text-3xl text-neutral-300">
        {topic === "all" ? "All topics" : topic}
      </h1>
      <ArticleBox
        data={data}
        handleTitleClick={handleTitleClick}
        topic={topic}
      />
    </>
  );
}

export default ArticlesList;
