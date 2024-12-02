import { useState } from "react";
// import { fixedInputClass, InputField } from '../../Components/index' 
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from '../../Components/ReactIconsIndex'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fetch } from '../../hooks/useFetch'


export default function Login() {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        let userdata = await Fetch({ email, password });
        console.log("thsis is console code",userdata.message)
        if(userdata?.statusCode === 200){
            toast.success(userdata?.message,{
                position: "top-center",
                autoClose: 3000,
            });
              if (userdata.data.user.role === "Admin") {
                localStorage.setItem('user', JSON.stringify(userdata.data));
                navigate('/admin')
            } else {
                localStorage.setItem('user', JSON.stringify(userdata.data));
                navigate('/user')
            }
        }else {
            toast.error(userdata?.response.message);
            }
    }
       

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className=" p-8 mx-auto sm:w-max-sm min-w-sm md:w-max-md lg:max-w-md">
               <span></span>
                <h2 className=" mt-8 mb-10 mb:text-lg lg:text-3xl text-2xl font-extrabold text-gray-700">
                    Login To Your Account
                </h2>
                <div className="w-full flex">
                    <ul className="flex flex-col space-y-5 w-full">
                        <li className="">
                           
                        <input type='email' name="email" className={`relative rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500  focus:outline-none focus:ring-blue-500 focus:border-blue-500  sm:text-sm text-gray-600  lg:text-xl `} placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                            {/* <input type="email" name="email" className={`${fixedInputClass} lg:text-xl focus:ring-blue-500`} placeholder="Email"  /> */}
                        </li>
                        <li className="flex justify-between w-auto md:h-lg lg:text-xl">
                            <input type={showPassword ? "text" : "password"} name="password" className={`relative rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500  focus:outline-none focus:ring-blue-500 focus:border-blue-500  sm:text-sm text-gray-600  lg:text-xl `} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <RiLockPasswordLine size={28} onClick={togglePasswordVisibility} className='text-gray-700 my-auto cursor-pointer   z-10 bg-white -ml-12 mx-2' />
                        </li>
                        <li>
                            <button onClick={()=>{ handleSubmit()}} className="md:text-xl relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-5"
                            >Login </button>
                        </li>
                    </ul>
                </div>
            </div>
            

        </>
    )
}
