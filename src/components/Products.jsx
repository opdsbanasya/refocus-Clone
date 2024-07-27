import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const productData = [
    {
      title: "Arqitel",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati temporibus facilis hic suscipit, sit quaerat magni. Quia!",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati temporibus facilis hic suscipit, sit quaerat magni. Quia!",
      live: true,
      case: false,
    },
    {
      title: "YIR 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati temporibus facilis hic suscipit, sit quaerat magni. Quia!",
      live: true,
      case: true,
    },
    {
      title: "yahoo!",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati temporibus facilis hic suscipit, sit quaerat magni. Quia!",
      live: true,
      case: true,
    },
  ];

  const [position, setPosition] = useState(0);
  const mover = (val) => {
    setPosition(val * 23);
  };
  return (
    <div className="relative">
      {productData.map((elem, index) => (
        <Product key={index} elem={elem} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem`, x: "-50%" }}
          className="window w-[32vw] h-[23rem] bg-white absolute left-[42%] -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
