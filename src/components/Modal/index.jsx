import React, { useState, useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, title, content, actions, icon }) => {
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (!isOpen || modal.current.contains(target)) return;
      onClose();
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [isOpen, onClose]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!isOpen || keyCode !== 27) return;
      onClose();
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        ref={modal}
        className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15"
      >
        <span className="mx-auto inline-block">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.1" width="60" height="60" rx="30" fill="#DC2626" />
            <path
              d="M30 27.2498V29.9998V27.2498ZM30 35.4999H30.0134H30ZM20.6914 41H39.3086C41.3778 41 42.6704 38.7078 41.6358 36.8749L32.3272 20.3747C31.2926 18.5418 28.7074 18.5418 27.6728 20.3747L18.3642 36.8749C17.3296 38.7078 18.6222 41 20.6914 41Z"
              stroke="#DC2626"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
          {title}
        </h3>
        <p className="mb-10">{content}</p>
        <div className="-mx-3 flex flex-wrap gap-y-4">
          {actions.map((action, index) => (
            <div key={index} className="w-full px-3 2xsm:w-1/2">
              <button
                onClick={action.onClick}
                className={`block w-full rounded border ${
                  action.primary
                    ? "border-meta-1 bg-meta-1 text-white hover:bg-opacity-90"
                    : "border-stroke bg-gray text-black dark:border-strokedark dark:bg-meta-4 dark:text-white"
                } p-3 text-center font-medium transition`}
              >
                {action.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
