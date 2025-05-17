import store from "..";
import { removeModal, setModal } from ".";


export const _setModal=(name :string, data?:any)=>store.dispatch(setModal({name,data}))
export const _removeModal=()=>store.dispatch(removeModal())