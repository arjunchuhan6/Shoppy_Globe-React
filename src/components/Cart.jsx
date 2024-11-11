import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartAmount = useSelector((state) => state.cart.totalPrice);
  const handleDeleteCartItem = (id) => {
    toast.success("Product removed from cart");
    dispatch(removeItem(id));
  };
  return (
    <div className="cart flex flex-col  px-3 xs:px-8 overflow-x-scroll mm:overflow-hidden">
      {cartItems && cartItems.length >= 1 ? (
        <div className="">
          <div className="min-w-[185%] mm:min-w-0  flex shadow-lg my-4    w-[95%]  xl:w-[80%] xxl:w-[70%] mx-auto  justify-between p-4">
            <h1 className=" flex-1 px-4 py-2 border  ">No.</h1>
            <h1 className=" flex-1 px-4 py-2 border  ">Image</h1>
            <h1 className="  flex-[3] md:flex-[5] lg:flex-[6]  px-4 py-2 border  ">
              Product Name
            </h1>
            <h1 className=" flex-1 px-4 py-2 border  ">Price</h1>
            <h1 className=" flex-1   px-4 py-2 border  ">Operation</h1>
          </div>

          <div className="my-4 p-4   ">
            {cartItems.map((item, index) => (
              <CartItem
                item={item}
                handleDeleteCartItem={handleDeleteCartItem}
                key={item.id}
                index={index}
              />
            ))}
          </div>

          <div className="flex gap-2  flex-col sm:flex-row font-bold shadow-lg   my-4  w-[95%]  xl:w-[80%] xxl:w-[70%] mx-auto  sm:justify-between p-4">
            <h2 className="flex items-center">
              Total Items: {cartItems.length}
            </h2>
            <h2 className="flex items-center">
              Total Amount : $ {parseFloat(totalCartAmount.toFixed(2))}
            </h2>

            <button
              onClick={() => Navigate("/checkout")}
              className=" w-[9rem]   border-2 border-[#70ff4c] text-[#70ff4c] hover:text-white font-bold hover:bg-[#70ff4c]   shadow-md px-4 py-[3px] cursor-pointer"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h2 className="font-bold text-black underline ">
          Please add some items to cart
        </h2>
      )}
    </div>
  );
};

export default Cart;
