import React, { useEffect } from "react";
import { memo } from "react";

function HeaderHook({ like, handleLikePlus }) {
  useEffect(() => {
    console.log(" useEffect header render");
  }, []);
  console.log("header render");
  return (
    <div style={{ height: "max-content" }} className="bg-warning ">
      Header
      <p>Like : {like}</p>
      <button onClick={handleLikePlus} className="">
        Plus like
      </button>
    </div>
  );
}

export default memo(HeaderHook);
