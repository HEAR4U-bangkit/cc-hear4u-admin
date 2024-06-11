import React from "react";

export default function Button({ text, ...rest }) {
  return (
    <button
      className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
      {...rest}
    >
      {text}
    </button>
  );
}
