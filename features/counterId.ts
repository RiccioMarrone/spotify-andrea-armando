import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface statoBtn{
    value: number,
 
}

const initialState : statoBtn = {
    value: 0,

}

const counterSlice = createSlice({
    name: "btnNav",
    initialState,
    reducers:{
        incrementa: (state) =>{
            state.value += 1;
        },
        
       
    }

});

export const {incrementa} = counterSlice.actions;
export default counterSlice.reducer;