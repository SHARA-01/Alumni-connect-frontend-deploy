import { Navigate, Outlet } from "react-router-dom";


function PrivateRouter() {
    const auth = JSON.parse(localStorage.getItem('user'))
   return auth &&  auth?.user?.role === "Admin" ? <Outlet /> : <Navigate to='/' />

}

export default PrivateRouter