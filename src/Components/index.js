// auth-pages
import Login from '../Pages/Login/Login.jsx'
// routess
import Routess from '../router/Routess.jsx'

// users/admin
import AdminMain from '../Layouts/AdminMain.jsx'
// side-bar
import Sidebar from '../Layouts/Sidebar.jsx'
//admin -  other-comp
import Dashbord from '../Pages/Admin/Dashboard.jsx'
import UsersPage from '../Pages/Admin/UsersPage.jsx'
import ProfilePage from '../Pages/Admin/ProfilePage.jsx'
import RegisterPage from '../Pages/Admin/RegisterPage.jsx'
import PostPage from '../Pages/Admin/PostPage.jsx'

//  constants
// need to delete this folder
import { fixedMenuItemClass, fixedInputClass } from '../Components/fixedClass.jsx'

import RegisterForm from '../Components/RegisterForm.jsx'
import ToggleButton from '../Components/ToggleButton.jsx'
import AdminNavbar from '../Layouts/AdminNavbar.jsx'

import CreatePost from './CreatePost.jsx'

import JobPost from '../Pages/User/JobPost.jsx'

// user
import UserMain from '../Layouts/UserMain.jsx'
import UserFooter from '../Layouts/UserFooter.jsx'
import Usernavbar from '../Layouts/UserNavbar.jsx'
import IndexPage from '../Pages/User/IndexPage.jsx'
import Searchbar from '../Layouts/Searchbar.jsx'
import ProfileCard from '../Components/ProfileCard.jsx'
import UserProfile from '../Pages/User/UserProfile.jsx'
import InputField from '../Components/InputField.jsx'
import AlumniProfileCard from '../Components/AlumniProfileCard.jsx'
import JobPostCard from './JobPostCard.jsx'
import UserProfileUpdateAdmin from './UserProfileUpdate.jsx'
import UserProfileAdmin from './UserProfileAdmin.jsx'
import CreateJobPost from '../Pages/User/CreateJobPost.jsx'
import JobsPostedPageForAlumni from '../Pages/User/PostedJobs.jsx'
import JobPostView  from '../Pages/User/jobPostView.jsx'
import DisplayUserProfile from '../Pages/User/DisplayUserProfile.jsx'


//  test  page
import TestPage from '../Pages/testPage.jsx'

// landing page 
import LandingPage from '../Pages/LandingPage.jsx'
import { toast } from 'react-toastify'

// route
import PrivateRouterAll from '../router/PrivateRouterALL.jsx'
import LoginHandle from '../router/LoginHandle.jsx'
import ChangePassword from '../Pages/User/ChangePassword.jsx'



export {
    // main route
    Routess,
    PrivateRouterAll,

    // admin
    Sidebar,
    RegisterForm,
    ToggleButton,
    AdminNavbar,
    RegisterPage,
    PostPage,
    Dashbord,
    ProfilePage,
    UsersPage,
    AdminMain,
    Login,
    fixedInputClass,
    fixedMenuItemClass,
    CreatePost,
    JobPostCard,
    UserProfileUpdateAdmin,
    UserProfileAdmin,
    JobsPostedPageForAlumni,
    JobPostView,

    // user
    UserMain,
    Usernavbar,
    IndexPage,
    UserFooter,
    Searchbar,
    ProfileCard,
    UserProfile,
    InputField,
    AlumniProfileCard,
    JobPost,
    CreateJobPost,
    DisplayUserProfile,
    ChangePassword,


    // test page
    TestPage,

    // landing page
    LandingPage,
    LoginHandle,
    toast

}

