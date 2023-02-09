import React from "react";
import Voting from "./common/Voting";
import moment from "moment";

function date(value) {
  return moment(value).format("ddd, MMM Do, YYYY h:mm:ss A");
}
function fromNow(value) {
  return moment(value).fromNow();
}

function ArticleBox({ data, handleTitleClick, category }) {
  return (
    <main className="flex-row flex mx-auto  text-xs md:text-sm">
      <section className="">
        {data.map((article, index) => (
          <div
            key={index}
            className="bg-neutral-900 flex flex-row my-4 ring-1 ring-neutral-800 hover:ring-neutral-600 rounded-md overflow-hidden subtleHoverable"
          >
            <aside className="flex-col bg-[#0f1010] min-w-[35px] pt-3 text-neutral-400 place-content-center text-center">
              <div className="absolute">
                <Voting id={article.article_id} votes={article.votes} />
              </div>
            </aside>
            <div
              className="flex-col p-2 bg-neutral-900 inline-block "
              onClick={() => {
                const category = `/${article.topic}`;
                const id = `/${article.article_id}`;
                handleTitleClick(category, id);
              }}
            >
              <figcaption className="flex flex-col">
                <header>
                  <p className="pb-1 text-xs md:text-sm">
                    <span
                      className="mr-1 text-xs text-neutral-300 hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        const category = `/${article.topic}`;
                        handleTitleClick(category);
                      }}
                    >
                      {article.topic}
                    </span>
                    <span className="mr-1 text-neutral-700 text-xs">
                      Posted by {article.author}
                    </span>
                    <time
                      dateTime={article.created_at}
                      title={date(article.created_at)}
                      className="text-neutral-700 text-[0px] md:text-xs"
                    >
                      {fromNow(article.created_at)}
                    </time>
                  </p>
                  <h3 className="text-sm md:text-xl flex-row flex text-neutral-300">
                    {article.title}
                  </h3>
                </header>
                <summary className="">
                  <div className="relative">
                    <div className="absolute bottom-[1px] bg-gradient-to-b from-transparent to-neutral-900 w-[100%] h-[45%]"></div>
                    <p className="min-h-[110px] text-neutral-400 font-light max-h-[150px] py-2 text-ellipsis overflow-hidden">
                      {article.body}
                    </p>
                  </div>
                </summary>
              </figcaption>

              <footer className="flex text-neutral-600 text-xs mt-2 font-bold">
                <span className="hoverable flex">
                  <svg
                    aria-hidden="true"
                    className="mr-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  {article.comment_count} Comments
                </span>
              </footer>
            </div>
            <section className=" md:my-auto max-w-[28vw] min-w-[28vw] min-h-[30vh]  md:min-w-[15vw] md:min-h-[15vh] md:max-w-[15vw]">
              <aside className="flex-col flex justify-start">
                {article.article_img_url && (
                  <img
                    className="p-4"
                    src={article.article_img_url}
                    alt=""
                  ></img>
                )}
              </aside>
            </section>
          </div>
        ))}
      </section>
    </main>
  );
}

export default ArticleBox;
