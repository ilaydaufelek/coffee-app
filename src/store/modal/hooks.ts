import { useSelector } from "react-redux";
import { RootState } from "..";

 export const useModal=()=>useSelector((state:RootState)=>state.modal.modal)