import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice.js";
import singleProductReducer from '../slices/singleProductSlice'
import cartReducer from '../slices/CartSlice'
import productReducer from "../slices/ProductSlice"
import orderSlice from "../slices/orderSlice.js";

const store = configureStore({
    reducer : {
        productstate :productReducer,
        userstate : userReducer,
        singleProduct : singleProductReducer,
        cartState : cartReducer,
        orderState : orderSlice,
    }
})

export default store;