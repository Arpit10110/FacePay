import axios from "axios";
import { LoginDatatype, Singupdatatype } from "../types/auth_types";

export const singup = async (FormData:Singupdatatype)=>{
    try {
        console.log(process.env.BACKEND_BASE_URL)
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/users/auth/singup`,FormData,{
            withCredentials:true
        })
       
        return {success:true,data:response.data}
    } catch (error) {
        return {success:false,error:error}
    }
}

export const login = async (data:LoginDatatype)=>{
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/users/auth/login`,data,{
            withCredentials:true
        })
        return {success:true,data:response.data}
    } catch (error) {
        return {success:false,error:error}
    }
}