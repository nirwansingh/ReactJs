import React from "react";

const Backgroud = () => {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div
          className="absolute  w-full py-10 flex justify-center text-zinc-500 text-xl font-semibold
       top-[5%]
      "
        >
          Documents.
        </div>

        <h1
          className="absolute text-[13vw] leading-none tracking-tighter 
        top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold
        text-zinc-900
      "
        >
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Backgroud;
