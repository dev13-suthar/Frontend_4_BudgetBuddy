import { BACKEND_URL } from "@/constants/constants";
import { addMoneyFormSchema } from "@/utils/types";
import { Formik} from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type props = {
    amount:null | number
}

const AddMoneySchema = {
    description:"",
    title:"",
    amount:0,
    category:""
}

const AddMoneyForm = ({amount}:props) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    const handleSubmit = async(values:addMoneyFormSchema)=>{
        try {
            const res = await fetch(`${BACKEND_URL}/v1/account/add`,{
                method:"POST",
                body:JSON.stringify({amount:Number(amount),description:values.description,title:values.title,type:"Credit",category:values.category}),
                headers:{
                    "Content-Type":"application/json",
                     ...(token && {"Authorization":token})
                }
            });
            const data = await res.json();
            if(!res.ok){
                const msg = data.message;
                toast.error(msg)
            }else{
                toast.success("Money Added!")
            }
            navigate("/home/v1")
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            const errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage);
        }
    };

    const handleFormSubmit = async(values:addMoneyFormSchema)=>{
         await handleSubmit(values);
    }
  return (
    <div className="p-3 pt-5 flex flex-col items-center justify-center">
            <Formik initialValues={AddMoneySchema} onSubmit={handleFormSubmit}>
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
  )
}

export default AddMoneyForm

 