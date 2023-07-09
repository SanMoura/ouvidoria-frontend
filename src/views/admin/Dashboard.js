import React from "react";

// components
import CardPageWorkList from "components/Cards/CardPageWorkList";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
          <CardPageWorkList />
        </div>
      </div>
    </>
  );
}
