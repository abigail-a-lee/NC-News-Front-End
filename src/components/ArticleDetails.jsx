import React, { useState, useEffect } from "react";
import { getArticleById } from "../utils/api";
import { UpVote, DownVote } from "./common/Voting";
import moment from "moment";
import LoadingScreen from "./common/LoadingScreen";
import { useParams } from "react-router-dom";

function date(value) {
  return moment(value).format("ddd, MMM Do, YYYY h:mm:ss A");
}
function fromNow(value) {
  return moment(value).fromNow();
}

function ArticleDetails({ handleTitleClick }) {
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { articleId } = useParams();

  useEffect(() => {
    getArticleById(articleId)
    .then((articleResponse) => {
      setArticleData(articleResponse.data.article[0]);
      setLoading(false);
    });
  }, [articleId]);

  if (loading) {
    return <LoadingScreen />;
  }

  
  return (
    <main>
      <section className="flex flex-row max-w-3xl drop-shadow-md mx-auto pt-3 pb-6 rounded-t-lg dark:bg-neutral-900 text-base rounded-lg">
        <aside className="pr-10 text-neutral-400 place-content-center text-center">
              <div className="absolute">
                <UpVote />
                {articleData.votes}
                <DownVote />
              </div>
            </aside>
            <article className="flex-col flex"> 
          <header className="flex-row flex items-center rounded-lg pb-1">
            {articleData.topic && (
              <p className="inline-flex text-sm mr-1 text-neutral-900 dark:text-neutral-400">
                {}
                <span
                  className="hoverable mr-1"
                  onClick={() => {
                    const category = `/${articleData.topic}`;
                    handleTitleClick(category);
                  }}
                >
                  {articleData.topic}
                </span>
              </p>
            )}
            {articleData.author && (
              <p className="inline-flex items-center text-xs text-neutral-900 dark:text-neutral-600">
                Posted by {articleData.author}&nbsp;
              </p>
            )}

            {articleData.created_at && (
              <p className="inline-flex items-center text-xs text-neutral-900 dark:text-neutral-600">
                <time
                  dateTime={articleData.created_at}
                  title={date(articleData.created_at)}
                >
                  {fromNow(articleData.created_at)}
                </time>
              </p>
            )}
                                  

          </header>

          <h3 className=" pb-1 text-xl  font-bold text-neutral-900 dark:text-neutral-400">
            {articleData.title && <span>{articleData.title}</span>}
          </h3>
          {articleData.article_img_url && (
            <img className="my-4 ring-2 ring-neutral-600 rounded-lg drop-shadow-md max-w-[700px]" src={articleData.article_img_url} alt=''></img>
          )}
          {articleData.body && (
            <p className=" text-neutral-500 dark:text-neutral-500 text-md">
              {articleData.body}
            </p>
          )}
          </article>

      </section>

      </main>
  );
}

export default ArticleDetails
