import logo from "@/assets/logo.jpg"
import { UserCircleIcon } from "@heroicons/react/16/solid"
import { useNavigate } from "react-router-dom"

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="py-5 px-5 flex items-center justify-between bg-stone-900 sm:px-10">
        <div className="flex items-center gap-3 cursor-pointer" onClick={()=>navigate("/home/v1")}>
            <img src={logo} alt="" srcSet="" height={"40px"} width={"40px"} className="rounded-full"/>
            <p className="sm:tracking-widest sm:font-medium sm:text-xl">BudgetBuddy</p>
        </div>
        <UserCircleIcon  className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]"/>
    </nav>
  )
}

export default Appbar