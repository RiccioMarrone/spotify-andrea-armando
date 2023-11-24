import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterId";
import storeData from "../features/setData";
import sliderData from  "../features/dataSlider"
const store = configureStore({
    reducer:{
        counterSlice,
        storeData,
        sliderData,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;