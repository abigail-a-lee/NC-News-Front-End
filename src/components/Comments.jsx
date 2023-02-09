import React, { useState } from "react";
import moment from "moment";
import avatar from "./common/avatar.jpeg";

function date(value) {
  return moment(value).format("ddd, MMM Do, YYYY h:mm:ss A");
}
function fromNow(value) {
  return moment(value).fromNow();
}

function Comments({ commentData }) {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

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
              id="dropdownCommentButton"
              data-dropdown-toggle=""
              className="inline-flex items-center p-2 mr-8 font-medium text-center text-neutral-400 bg-white rounded-lg hover:bg-neutral-100 focus:ring-2 focus:outline-none focus:ring-neutral-500 dark:bg-neutral-900 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
              type="button"
              onClick={handleDropDown}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <span className="sr-only">Comment settings</span>
            </button>

            <div
              id="dropdownComment1"
              className={`${
                isOpen ? "block" : "hidden"
              } z-10 w-36 bg-white absolute right-0 rounded divide-y divide-neutral-100 shadow dark:bg-neutral-700 dark:divide-neutral-600`}
            >
              <ul
                className="py-1 text-sm text-neutral-700 dark:text-neutral-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>Edit</li>
                <li>Remove</li>
                <li>Report</li>
              </ul>
            </div>
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
