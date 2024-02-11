import React from "react";

function Panel() {
  return (
    <div className="w-[80%] mt-6 flex">
      <div className="w-[50%]">
        <span>Dashboard / Home</span>
        <h2>Home</h2>
      </div>
      <input className="h-[40px] w-[10%]" type="text" />
      <span>Sign In</span>
    </div>
  );
}

export default Panel;
