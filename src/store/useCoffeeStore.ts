import { createSlice } from "@reduxjs/toolkit";

interface Coffes{
    name:string,
    id:string,
    price:number,
    img?:string
    populer:boolean
    
}
interface CoffeesState{
    coffees:Coffes[]
}
const initialState:CoffeesState={
  coffees:[] 
}
const coffees =createSlice({
    name:'coffees',
    initialState,
    reducers:{
        setCoffees:(state ,action)=>{
            state.coffees=action.payload

        },
        appendCoffees:(state,action)=>{
            state.coffees=[ ...state.coffees,action.payload]

        }


    }
})
export const {setCoffees, appendCoffees} = coffees.actions
export default coffees.reducer