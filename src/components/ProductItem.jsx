import React from "react";

const ProductItem = ({ product, handleAddToCart }) => {
  return (
    <div className="bookCard flex-col sm:flex-row sm:w-[38rem] lg:w-[60rem] break-words border-2 border-slate-100 shadow-lg   py-6 px-4 sm:px-10 flex gap-4 rounded-2xl">
      <img
        src={product?.images ? product?.images[0] : ""}
        className="w-[18rem] border border-green-300 p-2 h-[23rem] object-cover  rounded-2xl"
        alt=""
      />
      <div className="data">
        <h2 className="font-bold pt-2">
          <span className="font-bold ">Title :</span> {product?.title}
        </h2>
        <h3 className="font-semibold  py-2 my-1">
          <span className="font-bold">Brand :</span> {product?.brand}
        </h3>
        <p className="text-justify  text-wrap">
          <span className="font-bold">Shipping Info :</span>{" "}
          {product?.shippingInformation}
        </p>
        <p className="text-justify  my-2 text-wrap">
          <span className="font-bold">Warranty :</span>{" "}
          {product?.warrantyInformation}
        </p>
        <p className="  py-2 text-wrap break-words w-full">
          <span className="font-bold">Description :</span>{" "}
          {product?.description}
        </p>
        <p className="   ">
          {" "}
          <span className="font-bold">Returns :</span> {product?.returnPolicy}
        </p>

        <h3 className="font-semibold py-2">
          <span className="font-bold">Category :</span> {product?.category}
        </h3>
        <h3 className="font-semibold  ">
          <span className="font-bold">Price : </span>${product?.price}
        </h3>

        <button
          onClick={() => handleAddToCart(product)}
          className="flex gap-2 items-center w-[9rem] my-2 justify-center border-2 border-[#39f769] text-[#000000] hover:text-white font-bold hover:bg-[#70ff4c]   shadow-md px-4 py-[3px] cursor-pointer rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
