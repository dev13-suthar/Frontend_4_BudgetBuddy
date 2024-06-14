import SmallLoader from "@/components/SmallLoader"
import { registerAPICall } from "@/utils/actions"
import { registerSchemaTypes } from "@/utils/types"
import { Formik, FormikHelpers } from "formik"
import { Link, useNavigate } from "react-router-dom"

const registerSchema = {
  email:"",
  password:"",
  name:""
}

const Register = () => {
  const navigate = useNavigate();
  const handleFormSubmit = async(values:registerSchemaTypes,helpers:FormikHelpers<registerSchemaTypes>)=>{
      await registerAPICall({values,navigate});
      helpers.resetForm();
  }
  return (
   <>
    <header className="text-2xl font-medium mt-5 mb-6 text-center">Login to Your Account</header>
    <div className="p-2 pt-10 flex items-center justify-center">
    <Formik
    onSubmit={handleFormSubmit}
    initialValues={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      })=>(
        <form className="p-2 w-[60%] sm:w-[40%]  flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter Name"
        className="p-2 rounded-xl   bg-slate-900 shadow-md outline-none focus:outline-none"
        />
        {errors.name && touched.name && errors.name }
         <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className="p-2 rounded-xl   bg-slate-900 shadow-md outline-none focus:outline-none"
        />
        {errors.email && touched.email && errors.email}
         <input
        type="text"
        name="password"
        placeholder="Enter Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className="p-2 rounded-xl   bg-slate-900 shadow-md outline-none focus:outline-none"
        />
        {errors.password && touched.password && errors.password}
        <button type="submit" className="  p-2 rounded-2xl bg-[rgb(95,69,200)] flex items-center justify-center gap-2">
          {isSubmitting && (
            <SmallLoader/>
          )}
          Register
        </button>
        <Link className="text-purple-700 font-bold " to={"/"}>Already Member ? Login</Link>
  </form>
      )}
    </Formik>
    </div>
    </>
  )
}

export default Register

 