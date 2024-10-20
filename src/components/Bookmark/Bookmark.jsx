import React from "react";

const Bookmark = ({ bookmark }) => {
  return (
    <div className="border rounded-xl p-3 mb-2">
      <h2 className="font-bold text-xl">{bookmark}</h2>
    </div>
  );
};

export default Bookmark;
