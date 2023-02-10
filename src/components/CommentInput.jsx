import React, { useState } from "react";

function CommentInput({ commentSubmit }) {
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("You");
  const submitHandler = (event) => {
    event.preventDefault();
    const commentRequest = {
      username: username,
      body: comment,
    };
    commentSubmit(commentRequest);
    setComment("");
  };

  return (
    <div className="pb-1 dark:bg-neutral-900 mx-auto rounded-b-lg">
      <form className="mx-2 mb-6 px-6" onSubmit={submitHandler}>
        <div className="py-2 mx-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-600">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="6"
            onChange={(c) => setComment(c.target.value)}
            className="px-0 w-full text-sm text-neutral-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-neutral-400 dark:bg-neutral-900"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <div className="text-right mx-2">
          <button
            type="submit"
            className=" py-2.5 px-4 text-xs font-medium text-white bg-purple-400 bg-opacity-25 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-primary-900 hover:bg-purple-600"
          >
            Post comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentInput;
