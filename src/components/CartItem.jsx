// import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem, reduceQty } from "../utils/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, index, handleDeleteCartItem }) => {
  const dispatch = useDispatch();

  //handling add to cart
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    toast.success("product added to cart");
  };

  // handling reduce quantity
  const handleReduceQty = (item) => {
    dispatch(reduceQty(item));
    toast.success("product qty reduced");
  };

  return (
    <div className="flex min-w-[185%] mm:min-w-0 my-2 shadow-lg   w-[95%]  xl:w-[80%] xxl:w-[70%] mx-auto    justify-between">
      <h1 className="flex-1 px-4 py-2 border flex items-center">
        {index + 1}. ({item.qty} Qty)
      </h1>

      <div className="flex-1 flex items-center justify-center px-4 py-1 border">
        <img src={item.images[0]} className="w-full h-full object-contain  " />
      </div>

      <Link
        to={`/productDetail/${item.id}`}
        className=" flex-[3] md:flex-[5] lg:flex-[6] px-4 py-2 border transition-all flex items-center hover:underline "
      >
        {item.title}
      </Link>
      <h1 className="flex-1 px-4 py-2 border flex items-center ">
        $ {item.price}
      </h1>

      <h1 className="flex-1 text-center    py-2 px-6   border flex items-center">
        <MdDelete
          onClick={() => handleDeleteCartItem(item.id)}
          className="p-1 h-9 w-9   text-xl text-red-400 border border-red-400 hover:bg-red-400 hover:text-white transition-all cursor-pointer     "
        />
        <div className="operation flex  gap-1 px-1">
          <button
            className="h-9 w-9 p-1 text-[#70ff4c] border border-[#70ff4c] hover:bg-[#70ff4c] hover:text-white transition-all cursor-pointer "
            onClick={() => handleAddToCart(item)}
          >
            +
          </button>
          <button
            onClick={() => handleReduceQty(item)}
            className=" h-9 w-9 text-orange-400 border border-orange-500 hover:bg-orange-500 hover:text-white transition-all cursor-pointer   "
          >
            -
          </button>
        </div>
      </h1>
    </div>
  );
};

export default CartItem;
