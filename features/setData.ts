import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootInterface } from "@/media/data/interface";

interface data{
    value:RootInterface | undefined
}

let initialState: data = {
    value: undefined
}

const storeData = createSlice({
    name: "storeData",
    initialState,
    reducers:{
        setData: (state, actions : PayloadAction<RootInterface | undefined>) =>{
            state.value = actions.payload 
            
        }
    }

})

export const {setData} = storeData.actions;
export default storeData.reducer;