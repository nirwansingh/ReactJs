import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { GiCloudDownload } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className=" relative flex-shrink-0 w-52 h-64 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden mt-5"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdCloseCircleOutline />
            ) : (
              <GiCloudDownload size="0.7em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
