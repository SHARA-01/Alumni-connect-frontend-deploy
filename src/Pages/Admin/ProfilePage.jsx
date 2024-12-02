import { useEffect, useState } from 'react'
import { InputField, toast } from '../../Components/index'
import { FiEdit, FaWindowClose, RiLockPasswordLine } from "../../Components/ReactIconsIndex";
import { useNavigate } from 'react-router-dom';
import { AvatarUpload, UpdateAccount, UpdateUser, WhoAmI, passwordChange } from '../../hooks/useFetch';
import { displayName } from 'react-quill';
// import FileWithPath from 'react-dropzone'

function Profile() {
    const [oldpasswordVisble, setPassVisble] = useState(false)
    const [newpasswordVisble, setNewPassVisble] = useState(false)
    const naivgate = useNavigate();
    const [userData, setUserData] = useState('')
    const [editActive, setEditActive] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const [uploadProfile, setUploadProfile] = useState(false)

    const [oldPassword, setPassword] = useState('')
    const [newPassword, setConformedPassword] = useState('')
    const [diaplayName, setDispalyName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);

    const [role, setRole] = useState('')
    const [username, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    const handleUserData = async () => {
        let userdata = await WhoAmI();
        setUserData(userdata.data)
        setUserName(userdata.data.username)
        setRole(userdata.data.role)
        setFullName(userdata.data.full_name)
        setEmail(userdata.data.email)
        setMobileNumber(userdata.data.mobile_number)
        setDispalyName(userdata.data.full_name)
    }

    useEffect(() => {
        handleUserData()
    }, [])

    const UpdateProfile = (id) => {
        let fetch = async () => {
            let response = await UpdateAccount({ id, username, fullName, email, mobileNumber, role });
            // response = response.json();
            console.log(response)
            if (response.statusCode === 200){
                setEditActive(false)
                handleUserData();
                toast.success(response.message)
            }
            else{
                toast.error(response?.response?.message)
            }
        }
        fetch()
    }

    const handleUpload = async () => {
        const response = await AvatarUpload(selectedFile);
        console.log(response)
        if(response.ok){
            toast.success(response?.message)
            uploadProfile(false);
        }
        else if(response.status === 500){
            toast.error("something went worng please try again some time.")
        }
    
        // if(response)
        else{
            toast.error(response?.response?.message)
        }
    };

    const handlePasswordChange = async()=>{
      let fetch =  await passwordChange({ oldPassword, newPassword });
      if(fetch.statusCode === 200){
        toast.success(fetch?.message)
        setChangePassword(false)
      }
      else{
        toast.error(fetch?.response?.message)
      }
    }

    return (
        <div className='flex flex-col mt-5'>
            <div className='bg-image w-full rounded-md h-[300px] shadow-lg'>
            </div>
            <div className='bg-white rounded-md mx-3 -mt-10 p-2'>
                <div className='p-2 flex '>
                    <div className='w-[100px] align-middle ' >
                        <img src={userData && userData.avatar} className='h-[75px] w-[75px] rounded-[50px] mx-2' />
                    </div>
                    <div className='my-auto align-middle '>
                        <span className='text-gray-700 font-bold outline-none text-[1.4rem]' >{diaplayName || "Name"} </span>
                        <br />
                        <span className='text-gray-500 text-[0.9rem]'>{role || "User Role"}</span>
                    </div>
                </div>
                <div>
                    <div className=' flex  px-4 py-5'>
                        <div className='p-2 flex-col w-2/3'>
                            <div className='flex justify-between  my-5'>
                                <span onClick={() => { setChangePassword(false), setEditActive(false), setUploadProfile(false) }} className='text-gray-500 text-[1rem] font-bold block cursor-pointer border border-white hover:border px-4 py-1 rounded-md hover:border-gray-300 active:bg-gray-200'>Profile Information</span>
                                <div className='mx-[5rem] space-x-5 align-middle'>
                                    <button onClick={() => { setUploadProfile(!uploadProfile), setChangePassword(false), setEditActive(false) }} className='my-auto font-semibold text-gray-600 border border-gray-400 px-4 py-1 rounded-md hover:border-2 active:bg-gray-200 active:text-gray-900 shadow-md shadow-black/20  align-middle cursor-pointer' >{uploadProfile ? "Close" : "Change Profile"}</button>
                                    <button onClick={() => { setChangePassword(!changePassword), setEditActive(false), setUploadProfile(false) }} className='my-auto font-semibold text-gray-600 border border-gray-400 px-4 py-1 rounded-md hover:border-2 active:bg-gray-200 active:text-gray-900 shadow-md shadow-black/20  align-middle cursor-pointer' >{changePassword ? "Close" : "Change Pasword"}</button>
                                    <button className='active:text-sky-500 align-middle '>{editActive ? <FaWindowClose size={25} onClick={() => { setEditActive(!editActive), setChangePassword(false), setUploadProfile(false) }} /> : <FiEdit size={25} onClick={() => { setEditActive(!editActive), setChangePassword(false) }} />}</button>
                                </div>
                            </div>
                            <div className='mt-5 mx-auto'>
                                {
                                    (editActive || changePassword || uploadProfile) ?
                                        changePassword ? <div>
                                            <span className='ml-10 text-gray-600 font-semibold border-b-2 px-4 py-1 border-gray-400 rounded-md'>Change Password</span>
                                            <ul>
                                                <li className='flex my-auto'> 
                                                    <InputField type={oldpasswordVisble ? "text" : "password"} label='Old Password'  value={oldPassword} onChange={setPassword} inputdivclass='ml-10 mt-4' />
                                                    <RiLockPasswordLine size={28} onClick={()=> {setPassVisble(!oldpasswordVisble), setNewPassVisble(false)}} className='text-gray-700 cursor-pointer mt-[3.2rem] -ml-8 my-autoter z-10 bg-white ' />
                                                </li>
                                                <li className='flex my-auto '>
                                                    <InputField type={newpasswordVisble ? "text" : "password"} label='New Password'  value={newPassword} onChange={setConformedPassword} inputdivclass='ml-10 mt-4' />
                                                    <RiLockPasswordLine size={28} onClick={()=> {setPassVisble(false), setNewPassVisble(!newpasswordVisble)}} className='text-gray-700 cursor-pointer mt-[3.2rem] -ml-8 my-auto z-10 bg-white ' />
                                                </li>
                                            </ul>
                                            <button onClick={handlePasswordChange} className='bg-blue-500  py-2 w-[20%] ml-10 rounded-md my-5 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-white font-semibold active:bg-blue-300 ' >Update</button>
                                        </div>
                                            : editActive ?
                                                <div className='flex flex-col h-auto' >
                                                    <div className='flex space-x-10 space-y-4 flex-wrap'>
                                                        <InputField label='Role' type='text' value={role} onChange={setRole} inputdivclass='ml-10 mt-4' disabled />
                                                        <InputField label='username' type='text' value={username} onChange={setUserName} />
                                                        <InputField label='Full Name' type='text' value={fullName} onChange={setFullName} />
                                                        <InputField label='Email' type='text' value={email} onChange={setEmail} />
                                                        <InputField label='Mobile Number' type='text' value={mobileNumber} onChange={setMobileNumber} />
                                                    </div>
                                                    <button onClick={() => { UpdateProfile(userData._id) }} className='bg-blue-500  py-2 w-[20%] ml-10 rounded-md my-5 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-white font-semibold active:bg-blue-300 ' >Update</button>
                                                </div> : <div className='flex flex-col p-5' >
                                                    <input type="file" id="filepicker" name="fileList" onChange={(e) => setSelectedFile(e.target.files[0])} />
                                                    <button onClick={handleUpload} className=' bg-blue-500  py-2 w-[20%]  rounded-md my-5 hover:bg-blue-600 hover:shadow-md hover:shadow-blue-400 text-white font-semibold active:bg-blue-300 ' >Upload</button>

                                                </div>
                                        :
                                        <table className='flex space-x-8 mx-auto '>
                                            <thead className=' flex  py-2 space-x-5'>
                                                <tr className='flex flex-col text-md font-bold text-gray-700'>
                                                    <td>Full Name</td>
                                                    <td>Email</td>
                                                    <td>Mobile</td>
                                                    <td>username</td>
                                                    <td>role</td>
                                                </tr>
                                            </thead>
                                            <tbody className='flex flex-col  '>
                                                <tr className='flex flex-col text-md font-semibold text-gray-600 '>
                                                    <td className='space-x-3'>:  {fullName}</td>
                                                    <td>:  {email}</td>
                                                    <td>:  {mobileNumber}</td>
                                                    <td>:  {username}</td>
                                                    <td>:  {role}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile