import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is the backgroud colour of the card.",
      fileSize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "This is the backgroud colour of the card.",
      fileSize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "green",
      },
    },
    {
      desc: "This is the backgroud colour of the card.",
      fileSize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="w-full h-full fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}

      {/* <Card /> */}
    </div>
  );
};

export default Foreground;
