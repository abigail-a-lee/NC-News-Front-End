import React from "react";
import moment from "moment";
import avatar from "./common/avatar.jpeg";
import { deleteComment } from "../utils/api";

function date(value) {
  return moment(value).format("ddd, MMM Do, YYYY h:mm:ss A");
}
function fromNow(value) {
  return moment(value).fromNow();
}

function Comments({ commentData, setCommentData }) {
  function handleDelete(id, author, index) {
    if (author !== "You") {
      alert("Cannot delete others' comments");
      return;
    }
    setCommentData(commentData.filter((comment) => comment.comment_id !== id));
    deleteComment(id);
  }

  if (commentData.length === 0) {
    return (
      <div>
        <p>No comments found</p>
      </div>
    );
  }

  return (
    <div>
      {commentData.map((comment, index) => (
        <article
          key={index}
          className="px-2 mb-8 text-base bg-white  rounded-lg dark:bg-opacity-[0%]"
        >
          <img
            className="mr-2.5 w-8 h-8 float-left rounded-full"
            src={avatar}
            alt="avatar"
          />
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              {comment.author && (
                <p className="inline-flex items-center font-bold mr-2 text-sm text-neutral-900 dark:text-neutral-400">
                  {comment.author}
                </p>
              )}
              <p className="inline-flex items-center mr-2 text-xs text-neutral-900 dark:text-white">
                •
              </p>
              {comment.created_at && (
                <p className="text-sm text-neutral-600 dark:text-neutral-600">
                  <time
                    dateTime={comment.created_at}
                    title={date(comment.created_at)}
                  >
                    {fromNow(comment.created_at)}
                  </time>
                </p>
              )}
            </div>

            <button
              id="DeleteButton"
              data-dropdown-toggle=""
              className={`${
                comment.author !== "You" ? "hidden" : ""
              } inline-flex items-center p-2 mr-8 font-medium text-center text-neutral-400 bg-white rounded-lg hover:bg-neutral-100 focus:ring-2 focus:outline-none focus:ring-neutral-500 dark:bg-neutral-900 hover:text-black hover:bg-red-600 hover:bg-opacity-75 dark:focus:ring-red-600`}
              type="button"
              onClick={() => {
                handleDelete(comment.comment_id, comment.author, index);
              }}
            >
              <svg
                className="w-4 h-4 bi bi-trash"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />{" "}
              </svg>
              <span className="sr-only">Comment settings</span>
            </button>
          </footer>
          <div className="mx-4 border-neutral-700 px-6 border-solid border-l-[2px]">
            {comment.body && (
              <p className="text-neutral-500 my-4 dark:text-neutral-500">
                {comment.body}
              </p>
            )}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="flex items-center  text-sm text-neutral-500 hover:underline dark:text-neutral-400"
              >
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
                Reply
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Comments;
