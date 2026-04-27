import React from "react";

function Panel({ children }) {
  return (
    <div className="bg-gray-800 rounded-2xl max-w-300 min-h-100 shadow text-red-50 m-5 flex justify-center flex-col items-center">{children}</div>
  );
}

export default Panel;
