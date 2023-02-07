import React, { useRef } from "react";

function UpVote() {
  const actionRef = useRef(null);
  const handleClick = () => {
    actionRef.current.classList.remove("animated", "voted");
    actionRef.current.classList.add("animated", "voted");
  };

  return (
    <>
      <div className="actions">
        <div ref={actionRef} className="action plus" onClick={handleClick}>
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.6488 9.57243C17.2507 9.95529 16.6177 9.94298 16.2348 9.54493L8.97779 2L1.72074 9.54493C1.33789 9.94298 0.704841 9.95529 0.306796 9.57243C-0.0912487 9.18958 -0.103561 8.55653 0.279296 8.15849L7.53635 0.613555C8.3232 -0.204516 9.63238 -0.204519 10.4192 0.613554L17.6763 8.15849C18.0591 8.55653 18.0468 9.18958 17.6488 9.57243Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

function DownVote() {
  const actionRef = useRef(null);
  const handleClick = () => {
    actionRef.current.classList.remove("animated", "voted");
    actionRef.current.classList.add("animated", "voted");
  };

  return (
    <div ref={actionRef} className="action minus" onClick={handleClick}>
      <svg
        width="18"
        height="10"
        viewBox="0 0 18 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.306778 0.27913C0.704822 -0.103727 1.33787 -0.0914141 1.72072 0.30663L8.97777 7.85156L16.2348 0.30663C16.6177 -0.0914141 17.2507 -0.103727 17.6488 0.27913C18.0468 0.661987 18.0591 1.29503 17.6763 1.69308L10.4192 9.23801C9.63236 10.0561 8.32319 10.0561 7.53633 9.23801L0.279278 1.69308C-0.103578 1.29503 -0.0912663 0.661987 0.306778 0.27913Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export { UpVote, DownVote };
