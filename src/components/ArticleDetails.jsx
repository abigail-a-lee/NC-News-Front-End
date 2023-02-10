import React, { useState } from "react";
import { postNewComment } from "../utils/api";
import Voting from "./common/Voting";
import moment from "moment";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
import {
  useLoaderData,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";

function date(value) {
  return moment(value).format("ddd, MMM Do, YYYY h:mm:ss A");
}
function fromNow(value) {
  return moment(value).fromNow();
}

function ArticleDetails() {
  const navigate = useNavigate();
  const data = useLoaderData();
  const articleData = data.article[0];
  let comments = data.comments;
  if (!data.comments) {
    comments = [];
  }
  const { topic } = useParams();
  const [commentData, setCommentData] = useState(comments);
  function handleTitleClick(category, article_id = "") {
    navigate(`/articles${category}`);
  }
  const commentSubmit = (comment) => {
    postNewComment(articleData.article_id, comment).then((response) => {
      setCommentData([response.data.comment[0], ...comments]);
    });
  };

  if (topic !== articleData.topic) {
    return <Navigate to="/error" />;
  }

  return (
    <main className="pt-10 text-md md:text-base animated animatedFadeInUp fadeInUp">
      <section className="flex flex-row drop-shadow-md pt-3 pb-6 dark:bg-neutral-900 rounded-md">
        <aside className="flex-col mx-1 min-w-[40px] text-neutral-400 place-content-center text-center">
          <div className="absolute">
            <Voting id={articleData.article_id} votes={articleData.votes} />
          </div>
        </aside>
        <article className="flex-col flex max-w-[90%]">
          <header className="flex-row flex items-center rounded-md pb-1">
            {articleData.topic && (
              <p className="inline-flex text:xs md:text-sm mr-1 text-neutral-900 dark:text-neutral-400">
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
            <img
              className="my-4 ring-1 ring-neutral-800 rounded-lg drop-shadow-md mx-2"
              src={articleData.article_img_url}
              alt=""
            ></img>
          )}
          {articleData.body && (
            <p className="text-neutral-500 dark:text-neutral-500 md:text-md">
              {articleData.body}
            </p>
          )}
        </article>
      </section>
      <section className="bg-neutral-900 p-1 my-4 rounded-md">
        <hr className="mt-10 solid max-w-8xl mx-12"></hr>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg pt-4 lg:text-2xl mx-12 font-bold text-neutral-900 dark:text-neutral-600">
            Comments
          </h2>
        </div>
        <CommentInput commentSubmit={commentSubmit} />
        <Comments commentData={commentData} setCommentData={setCommentData} />
      </section>
    </main>
  );
}

export default ArticleDetails;
