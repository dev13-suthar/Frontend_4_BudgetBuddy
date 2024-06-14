import Appbar from "@/components/Appbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
        <Appbar/>
        <Outlet/>
    </>
  )
}

export default Layout