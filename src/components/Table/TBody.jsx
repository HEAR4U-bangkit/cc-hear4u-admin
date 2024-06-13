"use client";
import React from "react";
import Spinner from "../Spinner";

export default function TBody({ data, action, fields }) {
  const renderField = (field) => {
    if (typeof field === "object" && field !== null) {
      return JSON.stringify(field);
    }
    return field;
  };

  return (
    <tbody>
      {data?.map((item, key) => (
        <tr key={key}>
          {fields.map((field, i) => (
            <td
              key={i}
              className="border-b border-[#eee] px-4 py-5 dark:border-strokedark"
            >
              <p className="text-black dark:text-white">
                {renderField(item[field])}
              </p>
            </td>
          ))}
          <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
            <div className="flex items-center space-x-3.5">{action(item)}</div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
