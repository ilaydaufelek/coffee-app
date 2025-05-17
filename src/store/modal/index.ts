import { createSlice } from "@reduxjs/toolkit";




const initialState={
   data:null,
    name:'',
    
   
}
const modal=createSlice({
    name:'modal',
    initialState,
    reducers:{
        setModal:(state,action)=>{
        state.data=action.payload.data || null
        state.name=action.payload.name
         
        },
        removeModal:state =>{
            state.data=null
            state.name=''
           

        }
    }
    
})

export const {setModal,removeModal} =modal.actions
export default modal.reducer
