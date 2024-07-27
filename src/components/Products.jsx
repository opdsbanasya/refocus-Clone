import React from "react";
import Product from "./Product";

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

  return (
    <div className="px-20">
        {productData.map((elem, index)=>(
            <Product key={index} elem={elem} />
        ))}
    </div>
  );
};

export default Products;
