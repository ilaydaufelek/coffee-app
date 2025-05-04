import { createSlice } from "@reduxjs/toolkit";


const initialState={
    modal:false
}
const modal=createSlice({
    name:'modal',
    initialState,
    reducers:{
        setModal:(state,action)=>{
        state.modal=action.payload
        },
        removeModal:state =>{
            state.modal=false

        }
    }
    
})

export const {setModal,removeModal} =modal.actions
export default modal.reducer
