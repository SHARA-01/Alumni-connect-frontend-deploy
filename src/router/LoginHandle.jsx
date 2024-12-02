import { Navigate, Outlet } from "react-router-dom";


function LoginHandle() {
    const auth = JSON.parse(localStorage.getItem('user'))
    return !auth ? <Outlet /> : auth?.user?.role === "Admin" ? <Navigate to='/admin'/> : <Navigate to='/user'/>
}

export default LoginHandle;