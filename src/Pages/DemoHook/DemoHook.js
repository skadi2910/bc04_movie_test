import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HeaderHook from "./Header";

export default function DemoHook() {
  let [like, setLike] = useState(100);
  let [share, setShare] = useState(100);
  /**
   * state={like:1}
   */
  let handleLikePlus = () => {
    setLike(like + 1);
  };
  let handleSharePlus = () => {
    setShare(share + 1);
  };
  // life cycle
  useEffect(() => {
    // axios
    // componentDidMount
    console.log("useEffect render");
  }, [share]);

  console.log("render");
  return (
    <div className="text-center display-4">
      <HeaderHook like={like} handleLikePlus={handleLikePlus} />
      <span className="text-success mx-5">{like}</span>

      <button onClick={handleLikePlus} className="btn btn-success">
        Plus like
      </button>
      <br />
      <span className="text-primary mx-5">{share}</span>

      <button onClick={handleSharePlus} className="btn btn-primary">
        Plus share
      </button>
    </div>
  );
}
