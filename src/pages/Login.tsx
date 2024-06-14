import SmallLoader from "@/components/SmallLoader"
import { loginAPICall } from "@/utils/actions"
import { loginSchemaTypes } from "@/utils/types"
import { Formik, FormikHelpers } from "formik"
import { Link, useNavigate } from "react-router-dom"


const loginSchema = {
  email:"",
  password:""
}

const Login = () => {
  const navigate = useNavigate();
  const handleLoginForm = async(values:loginSchemaTypes,helpers:FormikHelpers<loginSchemaTypes>)=>{
    await loginAPICall({values,navigate});
    helpers.resetForm();
  }
  return (
    <div className="flex items-center h-full py-20 flex-col gap-3">
      <header className="text-2xl font-medium mt-5 mb-6">Login to Your Account</header>
      <Formik
      onSubmit={handleLoginForm}
      initialValues={loginSchema}
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
          <form className="p-2 w-[60%]  flex flex-col gap-6" onSubmit={handleSubmit}>
             <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-2 rounded-xl w-80 m-auto bg-slate-900 shadow-md outline-none focus:outline-none"
            />
            {errors.email && touched.email && errors.email}
             <input
            type="text"
            name="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="p-2 rounded-xl w-80 m-auto bg-slate-900 shadow-md outline-none focus:outline-none"
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" className="w-80 m-auto p-2 rounded-2xl bg-[rgb(95,69,200)] flex items-center justify-center gap-4">
              {isSubmitting && (
                <SmallLoader/>
              )}
              Login
            </button>
            <Link className="text-purple-700 font-bold w-80 m-auto" to={"/signUp"}>Don't have an account ? Sign Up</Link>
      </form>
        )}
      </Formik>
    </div>
  )
}

export default Login

