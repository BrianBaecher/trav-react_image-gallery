import React, { useState } from "react";

const ImageSearch = (props) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.searchText(text);
    e.target[0].value = "Search Image Term...";
  };

  return (
    <>
      <div className="max-w-sm rounded overlow-hidden my-10 mx-auto">
        <form onSubmit={onSubmit} action="" className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Search Image Term..."
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
            <button
              className="flex-shirnk-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ImageSearch;
