import { BACKEND_URL } from "@/constants/constants";
import axios from "axios";
import { addMoneyFormSchema, loginSchemaTypes, registerSchemaTypes } from "./types";
import { toast } from "react-toastify";
import useUpdateAccountBalance from "@/hooks/useupdateAccountBalance";




type params4Register = {
    values:registerSchemaTypes,
    navigate:(path:string)=>void
}

type params4Login = {
    values:loginSchemaTypes,
    navigate:(path:string)=>void
}

type params4AddMoney = {
    values:addMoneyFormSchema,
    navigate:(path:string)=>void;
}

export  const registerAPICall = async({values,navigate}:params4Register)=>{
        try {
            const res = await axios.post(`${BACKEND_URL}/v1/user/register`,values);
            const data = await res.data;
            console.log(data);
            toast.success("Register Succesful");
            navigate("/")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            const errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage);
        }
}

export  const loginAPICall = async({values,navigate}:params4Login)=>{
    try {
        const res = await axios.post(`${BACKEND_URL}/v1/user/signin`,values);
        const data = await res.data;
        localStorage.setItem("token",data.token)
        toast.success("SignIn Succesful");
        navigate("/home/v1");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
    }
}

export const AddMoneyToAccount = async({values,navigate}:params4AddMoney)=>{
    const updateBalance = useUpdateAccountBalance();
    try {
        const res = await axios.post(`${BACKEND_URL}/v1/account/add`,values,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        });
        const data = await res.data;
        toast.success("Money Added!!")
        updateBalance(data.spendTxns.amount)
        navigate("/v1")

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
    }
}