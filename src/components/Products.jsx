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
          className="window w-[35vw] h-[23rem] absolute left-[42%] -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              className="h-full w-full object-cover object-center"
              src="src/assets/videos/arqitel.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              className="h-full w-full object-cover object-center"
              src="src/assets/videos/ttr.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              className="h-full w-full object-cover object-center"
              src="src/assets/videos/yir.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              autoPlay
              loop
              muted
              className="h-full w-full object-cover object-center"
              src="src/assets/videos/yahoo.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
