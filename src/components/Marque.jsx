import React from "react";
import { motion } from "framer-motion";

const Marque = ({ imgUrl, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-28 py-10 "
      >
        {imgUrl.map((url, index) => (
          <img key={index} src={url} className="w-full" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-28 py-10 "
      >
        {imgUrl.map((url, index) => (
          <img key={index} src={url} className="w-full" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marque;
