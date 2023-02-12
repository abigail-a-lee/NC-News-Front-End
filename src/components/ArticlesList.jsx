import React from "react";
import { useState } from "react";
import Sort from "./common/Sort";
import { useLoaderData, useParams, Navigate } from "react-router-dom";
import ArticleBox from "./ArticleBox";

function ArticlesList({}) {
  const { topic } = useParams();
  const [data, setData] = useState(useLoaderData());

  if (data.length === 0) {
    return <Navigate to="/error" />;
  }

  return (
    <main className="animated animatedFadeInUp fadeInUp">
      <header className="select-none flex mx-auto">
        <h1 className="flex justify-start text-shadow shadow-neutral-500 text-3xl text-neutral-300">
          {topic === undefined ? "All articles" : topic}
        </h1>
        <h1 className="flex justify-end">
          <Sort setData={setData} />
        </h1>
      </header>
      <ArticleBox data={data} topic={topic} />
    </main>
  );
}

export default ArticlesList;
