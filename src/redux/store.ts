import { configureStore } from "@reduxjs/toolkit";
import sliceItems from "./sliceItems";

const store = configureStore({
    reducer:{
        items:  sliceItems,
    }
})

export default store;