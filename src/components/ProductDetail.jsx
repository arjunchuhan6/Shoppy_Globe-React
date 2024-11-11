import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import toast from "react-hot-toast";
import ProductItem from "./ProductItem";

const ProductDetail = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const params = useParams();
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleAddToCart = (product) => {
    toast.success("Item added to cart");
    dispatch(addItem(product));
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${params.id}`
        );
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };

    fetchProductDetail();
  }, []);

  if (loader) {
    return <p className="text-center py-10 font-bold">Loading...</p>;
  }

  if (error) {
    return (
      <p className="px-4 py-4 font-bold">
        Error Occured Fetching Product Data.{" "}
      </p>
    );
  }

  return (
    <div>
      <div className="px-3 xs:px-8  py-4">
        <button
          onClick={() => Navigate(-1)}
          className="border flex gap-2 items-center w-[7rem] my-2 rounded-full shadow-md px-4 py-[3px] cursor-pointer"
        >
          <IoArrowBackSharp />
          Back
        </button>

        <>
          <h2 className=" font-bold text-xl py-4">
            {" "}
            Product Details
          </h2>

          {product && product?.title?.length > 0 ? (
            <ProductItem product={product} handleAddToCart={handleAddToCart} />
          ) : (
            <h2 className="font-bold text-black underline ">
              No Product to display{" "}
            </h2>
          )}
        </>
      </div>
    </div>
  );
};

export default ProductDetail;
