import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootInterface } from "../media/data/interface";


interface RequestSlider {
    value: RootInterface | undefined 

}

let initialState:RequestSlider={
    value: undefined,
}

const sliderData = createSlice({
    name:"sliderData",
    initialState,
    reducers:{
        setDataSlider: (state, actions:PayloadAction<RequestSlider | undefined>)=>{
            state.value = actions.payload?.value

        }
    }
})

export const {setDataSlider} = sliderData.actions;
export default sliderData.reducer;