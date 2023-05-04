import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counter/counterSlice";
import mobilSlice from "./reducers/mobil/mobilSlice";

export default configureStore({
    reducer: {
        counter: counterSlice,
        mobil: mobilSlice,
    }
})