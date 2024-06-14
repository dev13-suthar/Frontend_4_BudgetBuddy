import { BACKEND_URL } from '@/constants/constants'
import { AccountBalanceAtom } from '@/store/atoms'
import { spendMoneyFormSchema } from '@/utils/types'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {useSetRecoilState } from 'recoil'

const spendMoneySchema = {
    amount:0,
    title:"",
    description:"",
    category:""

}
type props = {
    amount:null | number
}

const SpendMoneyForm = ({amount}:props) => {
    const setAccountBalance = useSetRecoilState(AccountBalanceAtom);
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    const handleSubmit = async(values:spendMoneyFormSchema)=>{
        try {
            const res = await fetch(`${BACKEND_URL}/v1/account/spend`,{
                method:"POST",
                body:JSON.stringify({amount:Number(amount),description:values.description,title:values.title,type:"Debit",category:values.category}),
                headers:{
                    "Content-Type":"application/json",
                     ...(token && {"Authorization":token})
                }
            });
            const data = await res.json();
            if(!res.ok){
                const msg = data.message;
                toast.error(msg);
            }else{
                toast.success("Money Debited!")
                setAccountBalance(data.spendTxns.amount);

            }
            navigate("/home/v1")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            const errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage);
        }
    }
    const handleFormSubmit = async(values:spendMoneyFormSchema)=>{
        await handleSubmit(values);
   }
  return (
    <>
         <div className="p-3 pt-5 flex flex-col items-center justify-center">
            <Formik initialValues={spendMoneySchema} onSubmit={handleFormSubmit}>
            {({
                 values,
                 errors,
                 touched,
                 handleChange,
                 handleBlur,
                 handleSubmit,
                 isSubmitting
            })=>(
                <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input type="text" className="p-3 outline-none focus:outline-none rounded-xl text-stone-800" placeholder="Enter Title"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                /> {errors.title && touched.title && errors.title}

                <textarea 
                rows={2} cols={3} 
                className="rounded-xl focus:outline-none p-2 text-stone-800" 
                placeholder="Description"
                />

                <input type="text" className="p-3 outline-none focus:outline-none rounded-xl text-stone-800"
                 placeholder="Category"
                 name="category"
                 value={values.category}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />{errors.category && touched.category && errors.category}

                <input type="text" 
                className="p-3 outline-none focus:outline-none rounded-xl text-stone-800" 
                placeholder="Sender"
                name="sender"
                />

                <button className="p-3 bg-purple-700 w-full rounded-2xl">
                    {isSubmitting?"Submitting...":"Submit"}
                </button>
        </form>
            )}
            </Formik>
    </div>
    </>
  )
}

export default SpendMoneyForm