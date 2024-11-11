import { createSlice } from "@reduxjs/toolkit";


//checking values present in localstorage for initial load or not 
const localCart = JSON.parse(localStorage.getItem("shoppyGlobeECart"));
const cartPrice = JSON.parse(localStorage.getItem("shoppyGlobeCartPrice")) || 0;


//total cart amount
const calculateTotalCartAmount = (items) => {
    return items.reduce(
        (total, item) => total + item.price * item.qty,
        0
    )
};


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: localCart ? localCart : [],
        totalPrice: cartPrice,
    },

    reducers: {


        addItem: (state, action) => {
            //Adding items and increasing quentity
            let prevItem = state.items.findIndex((item) => item.id == action.payload.id);

            if (prevItem != -1) {
                state.items[prevItem].qty += 1;
            } else {
                state.items.push({ ...action.payload, qty: 1 });
            }
            state.totalPrice = calculateTotalCartAmount(state.items)
            localStorage.setItem("shoppyGlobeECart", JSON.stringify(state.items));
        },

        reduceQty: (state, action) => {
            //reduce cart quentity
            let prevItem = state.items.findIndex((item) => item.id == action.payload.id);

            if (prevItem != -1 && state.items[prevItem].qty > 1) {
                state.items[prevItem].qty -= 1;
            } else {
                const removedArray = state.items.filter((item) => item.id !== action.payload.id);
                state.items = removedArray;
            }
            state.totalPrice = calculateTotalCartAmount(state.items)
            localStorage.setItem("shoppyGlobeECart", JSON.stringify(state.items));
        },


        removeItem: (state, action) => {
            //remove item based on id from cart
            const removedArray = state.items.filter((item) => item.id !== action.payload);
            state.items = removedArray;
            localStorage.setItem("shoppyGlobeECart", JSON.stringify(state.items));
            state.totalPrice = calculateTotalCartAmount(state.items);
        },

        clearCart: (state, action) => {
            state.items.length = 0;
            state.totalPrice = 0;
            localStorage.setItem("shoppyGlobeECart", JSON.stringify(state.items));
        },


    }
})


export const { addItem, removeItem, clearCart, reduceQty } = cartSlice.actions;

export default cartSlice.reducer;