import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill snow theme styles
import { JobPostCreate } from '../hooks/useFetchJobs'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CreatePost = ({ CreatePostDivhide, hideNewpostdiv, Title, Company, Location, JobDescription, setState, role }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState(Title || '')
    const [company, setCompany] = useState(Company || '')
    const [location, setLocation] = useState(Location || '')
    // const [editorHtml, setEditorHtml] = useState('')
    const [jobDescription, setJobDescription] = useState(JobDescription || '');

    const handleChange = (data) => {
        // setEditorHtml(data);
        // convertToPlainText(data);
        setJobDescription(data);
        
    };

    const AddNewPost = async() => {
       let postData =  await JobPostCreate({ title, company, location, jobDescription });
       if(postData?.statusCode === 201){
        toast.success(postData?.message)
        role? navigate('/user'): ''
        CreatePostDivhide(false)
        hideNewpostdiv(false)
        setState('')
       }
       else{
        toast.error(postData?.response?.message)
       }
    }

    // const convertToPlainText = (data) => {
    //     const parser = new DOMParser();
    //     const parsedHtml = parser.parseFromString(data, 'text/html');
    //     const plainText = parsedHtml.documentElement.textContent;
    //     setJobDescription(plainText);
    // };

    return (
        <div className='w-full h-auto ' >
            <div className="w-[80%] mx-auto my-10">
                <ul className='space-y-3 my-4'>
                    <li>
                        <label className='text-gray-600 font-semibold' htmlFor="title">Title</label>
                        <input id='title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Titile' className='w-full py-2 px-2 shadow-md rounded-md outline-none text-gray-700 ' /></li>
                    <li>
                        <label className='text-gray-600 font-semibold' htmlFor="title">Company</label>
                        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Company Name' className='w-full py-2 px-2 shadow-md rounded-md outline-none  text-gray-700' />
                    </li>
                    <li>
                        <label className='text-gray-600 font-semibold' htmlFor="title">Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder='City' className='w-full py-2 px-2 shadow-md rounded-md outline-none  text-gray-700' />
                    </li>
                </ul>
                <div className="border rounded-lg p-2 space-y-3 ">
                    <label className='text-gray-600 font-semibold ' htmlFor="job-description">job description</label>
                    <ReactQuill
                        id='job-description'
                        className='w-full bg-white  rounded-md   '
                        theme="snow" 
                        value={jobDescription} 
                        onChange={handleChange} 
                        style={{ border: 'none', boxShadow: 'none', outline: 'none' }}
                    />
                    <div className='flex justify-end'>
                        <button onClick={() => { AddNewPost()}} className='px-[3.5rem] py-2 text-gray-600 font-semibold bg-yellow-400 rounded-md my-8 hover:bg-yellow-300 active:bg-yellow-500'>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
