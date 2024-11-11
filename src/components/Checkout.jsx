import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Checkout = () => {
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    delivery: "",email: "",street: "",
    payment: "",
    zip: "",state: "",city: "",
  });

  // handling submission of form.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Checkout Success");
    dispatch(clearCart());
    Navigate("/");
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen py-8 bg-gray-50 ">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl  text-gray-800 mb-4 font-bold">
          CheckOut
        </h2>
        <h2 className="font-semibold mb-6 text-gray-700 text-lg  ">
          Total Amount: <span className="text-[#3246ff]">${cartPrice}</span>
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Payment Details
          </h3>

          <label htmlFor="delivery" className="block font-medium text-gray-600">
            Delivery Country
          </label>
          <select
            id="delivery"
            name="delivery"
            value={formData.delivery}
            onChange={handleFormChange}
            className="w-full border border-gray-500 rounded-lg p-2 focus:outline-none focus:border-[#4fb6a8] transition"
          >
            <option value="india">India</option>
            <option value="china">China</option>
            <option value="usa">USA</option>
            <option value="japan">Japan</option>
          </select>

          <label htmlFor="email" className="block font-medium text-gray-600">
            Email
          </label>
          <input
            value={formData.email}
            onChange={handleFormChange}
            type="email"
            name="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#4fb6a8] transition"
            required
          />

          <h3 className="font-bold text-lg text-gray-800 mb-2">
            Shipping Address
          </h3>

          <label htmlFor="street" className="block font-medium text-gray-600">
            Street Address
          </label>
          <input
            value={formData.street}
            onChange={handleFormChange}
            type="text"
            name="street"
            id="street"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#4fb6a8] transition"
            required
          />

          <label htmlFor="city" className="block font-medium text-gray-600">
            City
          </label>
          <input
            value={formData.city}
            onChange={handleFormChange}
            type="text"
            name="city"
            id="city"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#4fb6a8] transition"
            required
          />

          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="state"
                className="block font-medium text-gray-600"
              >
                State
              </label>
              <input
                value={formData.state}
                onChange={handleFormChange}
                type="text"
                name="state"
                id="state"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#4fb6a8] transition"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="zip" className="block font-medium text-gray-600">
                ZIP Code
              </label>
              <input
                value={formData.zip}
                onChange={handleFormChange}
                type="text"
                name="zip"
                id="zip"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#4fb6a8] transition"
                required
              />
            </div>
          </div>

          <label htmlFor="payment" className="block font-medium text-gray-600">
            Payment Method
          </label>
          <select
            id="payment"
            name="payment"
            value={formData.payment}
            onChange={handleFormChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-[#4fb6a8] transition"
          >
            <option value="card">Card</option>
            <option value="netbank">Net Banking</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
          </select>

          <button
            type="submit"
            className="w-full mt-4 bg-[#514fb6] text-white font-bold py-2 rounded-lg hover:bg-[#6d9e61] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
