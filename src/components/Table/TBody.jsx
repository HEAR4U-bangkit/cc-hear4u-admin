"use client"
import React from "react";

export default function TBody({ data, action }) {
  return (
    <tbody>
      {data.map((item, key) => (
        <tr key={key}>
          {Object.keys(item).map((field, i) => (
            <td
              key={i}
              className="border-b border-[#eee] px-4 py-5 dark:border-strokedark"
            >
              <p className="text-black dark:text-white">{item[field]}</p>
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
