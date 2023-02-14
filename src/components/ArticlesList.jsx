import React, { useState } from "react";
import { useLoaderData, useParams, Navigate } from "react-router-dom";
import ArticleBox from "./ArticleBox";
import InfiniteScroll from "react-infinite-scroller";
import { getArticles } from "../utils/api";
import Sort from "./common/Sort";
import Spinner from "./common/Spinner";

function ArticlesList() {
  const { topic } = useParams();
  const [page, setPage] = useState(1);
  const [data, setData] = useState(useLoaderData([]));
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [hasMore, setHasMore] = useState(true);

  function loadMore() {
    getArticles(topic, sort, order, page + 1)
      .then((response) => {
        setData([...data, ...response.data.articles]);
        setPage(page + 1);
        setHasMore(response.data.articles.length > 0);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (data.length === 0) {
    return <Navigate to="/error" />;
  }

  return (
    <main className="animated animatedFadeInUp fadeInUp">
      <header className="select-none flex mx-auto">
        <h1 className="flex justify-start text-shadow shadow-neutral-500 text-3xl text-neutral-300">
          {topic === undefined ? "All articles" : topic}
        </h1>
        <Sort
          setSort={setSort}
          setOrder={setOrder}
          setData={setData}
          setPage={setPage}
          setHasMore={setHasMore}
        />
      </header>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
          <div className="mx-auto max-w-[10%]">
            <Spinner />
          </div>
        }
        threshold={400}
      >
        <article>
          <ArticleBox data={data} topic={topic} />
        </article>
      </InfiniteScroll>
      <footer
        className={`${
          hasMore ? "hidden" : ""
        } flex flex-col mx-auto text-center items-center`}
      >
        <h1 className=" text-shadow shadow-neutral-500 text-3xl  text-neutral-300 py-8">
          That's all we could find!
        </h1>
        <button
          className="hover:text-black hover:bg-violet-400 bg-violet-800 bg-opacity-50 p-2 rounded-md hover:cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Back to top
        </button>
      </footer>
    </main>
  );
}

export default ArticlesList;
