import React from "react";
import Thead from "./Thead";
import TBody from "./TBody";

export default function Table({ headers, data, action }) {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <Thead data={headers} />
          <TBody data={data} action={action} />
        </table>
      </div>
    </div>
  );
}
