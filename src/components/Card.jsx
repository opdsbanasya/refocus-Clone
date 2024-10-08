import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ width, start, para, hover = false, heading}) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover === true && "#8B5CF6", padding:"25px" }}
      className={`bg-zinc-700 p-5 min-h-[80vh] rounded-xl flex flex-col justify-between ${width}`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-lg">{heading[0]}</h3>
          <IoIosArrowRoundForward />
        </div>
        <div className="mt-5">
          <h1 className="text-3xl font-medium">{heading[1]}</h1>
        </div>
      </div>
      <div className="down w-full mt-56 space-y-5">
        <h1
          className={`text-6xl font-semibold tracking-tight leading-none ${
            start === false && "hidden"
          }`}
        >
          Start a project
        </h1>
        <button
          className={`rounded-full py-2 px-4 border-[1px] border-zinc-200 ${
            start === false && "hidden"
          }`}
        >
          Contact us
        </button>
        <p
          className={`text-sm text-zinc-500 font-medium ${
            para === false && "hidden"
          }`}
        >
          Explore what drives our team.
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
