import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login, AdminMain, Routess, Dashbord, UserProfile, UsersPage, RegisterPage, PostPage, UserMain, IndexPage, ProfilePage, JobPost, TestPage, CreateJobPost, JobsPostedPageForAlumni, JobPostView, DisplayUserProfile, LandingPage, PrivateRouterAll , LoginHandle, ChangePassword} from './Components/index.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import './App.css'
import { ToastContainer } from 'react-toastify'
import PrivateRouter from './router/PrivateRouterAdmin.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Routess />} >
      <Route element={<LoginHandle />}>
      <Route path='/'  element={<LandingPage   />}/>
      <Route path='/login' element={<Login />} />
      </Route>

      <Route element={<PrivateRouter />} >
      <Route   path='/admin' element={<AdminMain />} >
        <Route path='' element={<Dashbord />} index />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path='users/:id' element={<DisplayUserProfile />} />
        <Route path="user/register" element={<RegisterPage />} />
        <Route path="posts" element={<PostPage />} />
        <Route path='posts/:id' element={<JobPostView />} />
      </Route>
      </Route>

      <Route element={<PrivateRouterAll />}>
      <Route path='/user' element={<UserMain />} >
            <Route path='' element={<IndexPage />} index/>
            <Route path=':id' element={<DisplayUserProfile />} />
            <Route path='profile' element={<UserProfile />} />
            <Route path='profile/change-password' element={<ChangePassword />} />
            <Route path='new-post' element={<CreateJobPost />} />
            <Route path='jobs' element={<JobPost />} />
            <Route path='job/:id' element={<JobPostView/>} />
            <Route path='job-posted' element={<JobsPostedPageForAlumni />} />
      </Route>
      </Route>

      <Route path='/te' element={<TestPage />} />

    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
