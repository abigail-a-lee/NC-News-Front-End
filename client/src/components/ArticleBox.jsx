import React, { useState, useEffect } from "react";
import { DownVote, UpVote } from "./common/Voting";
import moment from "moment";

function date(value) {
  return moment(value).format("ddd, MMM Do, YYYY h:mm:ss A");
}
function fromNow(value) {
  return moment(value).fromNow();
}

function ArticleBox({ data, handleTitleClick, category }) {
  return (
    <main className="flex-row mx-auto max-w-[800px] ">
      <section className="flex-col">
        {data.map((article, index) => (
          <div className="flex my-4 ring-1 ring-neutral-800 hover:ring-neutral-600 rounded-md overflow-hidden subtleHoverable">
            <aside className="flex-col bg-[#0f1010] min-w-[35px] pt-3 text-neutral-400 place-content-center text-center">
              <div className="absolute">
                <UpVote />
                {article.votes}
                <DownVote />
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
              <figcaption>
                <span
                  className="mr-1 text-sm text-neutral-300 hover:underline"
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
                  pubdate
                  dateTime={article.created_at}
                  title={date(article.created_at)}
                  className="text-neutral-700 text-xs"
                >
                  {fromNow(article.created_at)}
                </time>
              </figcaption>
              <article class="my-1">
                <header class="text-xl text-neutral-300">
                  {article.title}
                </header>
                <div class="relative">
                  <div class="absolute bottom-[1px] bg-gradient-to-b from-transparent to-neutral-900 w-[100%] h-[45%]"></div>
                  <p class="text-neutral-400 font-light max-h-[150px] py-2 text-ellipsis overflow-hidden">
                    {article.body}
                  </p>
                </div>

                <footer class="flex text-neutral-600 text-xs mt-2 font-bold">
                  <span class="hoverable flex">
                    <svg
                      aria-hidden="true"
                      class="mr-1 w-4 h-4"
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
              </article>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default ArticleBox;
