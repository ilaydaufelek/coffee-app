import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import  coffees from './useCoffeeStore'
import modal from './modal'
 const store =configureStore({
    reducer:{
       auth:authReducer ,
       coffees,
       modal

    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;