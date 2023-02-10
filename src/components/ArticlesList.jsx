import React from "react";
import { useLoaderData, useParams, Navigate } from "react-router-dom";
import ArticleBox from "./ArticleBox";

function ArticlesList() {
  const { topic } = useParams();
  const data = useLoaderData();

  if (data.length === 0) {
    return <Navigate to="/error" />;
  }

  return (
    <main className="animated animatedFadeInUp fadeInUp">
      <h1 className="select-none flex-row mx-auto text-shadow shadow-neutral-500 text-3xl text-neutral-300">
        {topic === undefined ? "All articles" : topic}
      </h1>
      <ArticleBox data={data} topic={topic} />
    </main>
  );
}

export default ArticlesList;
