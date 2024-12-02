import { RiLockPasswordFill } from "react-icons/ri";
import { FaFemale, FaHandHoldingHeart, FaSearch } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import Navbar from "../Layouts/UserNavbar";


const LandingPage = () => {
    return (
        <>
         <nav className="w-full sticky top-0 z-10">
                    <Navbar />
                </nav>
            <div className="landingPage">
                <div className="landingPage-main">
                    <div className="left text-gray-500">
                        <div className="landing-desc flex">
                            <p>ARE YOU MISSING OPPORTUNITIES ?</p>
                            <p className="text-gray-700">
                                Climb the Career Ladder with <span className="font-semibold">ACS</span>
                            </p>
                            <p>
                                Alumni connect  is the premier Alumni connection portal for Students of JEC, offering a wide
                                range of job opportunity in TECH industries.
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="col1">
                            <div className="col1"></div>
                            <div className="col2">
                                {" "}
                                <img
                                    src="https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg"
                                    draggable="false"
                                    alt="girl1"
                                    className="dddd"
                                />
                                <div className="col12-icon col-icon-common">
                                    <FaFemale />
                                </div>
                            </div>
                            <div className="col3"></div>
                        </div>
                        <div className="col2">
                            <div className="col1">
                                <img
                                    src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    draggable="false"
                                    alt="girl5"
                                />
                            </div>
                            <div className="col2">
                                <img
                                    src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl15.jpg?updatedAt=1689504269740"
                                    draggable="false"
                                    alt="girl3"
                                />
                            </div>
                            <div className="col3">
                                <img
                                    src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl14.jpg?updatedAt=1689504273280"
                                    draggable="false"
                                    alt="girl4"
                                />
                            </div>
                        </div>
                        <div className="col3">
                            <div className="col1">
                                <img
                                    src="https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    draggable="true"
                                    alt="girl2"
                                />
                                <div className="col31-icon col-icon-common">
                                    <MdVerifiedUser />
                                </div>
                            </div>
                            <div className="col2">
                                <img
                                    src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/girl16.jpg?updatedAt=1689504272980"
                                    draggable="false"
                                    alt="girl6"
                                />
                                <div className="col32-icon col-icon-common">
                                    <FaSearch />
                                </div>
                            </div>
                            <div className="col3"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================================  Our Service  ================================ */}
            <div className="ourservice">
                <div className="our-service-main">
                    <span className="text-[3rem] text-gray-600 font-semibold mb-12">Our Service </span>
                    <div className="service-desc">
                        <div className="service-desc-2 service-common">
                            <div className="image">
                                <img
                                    src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service2.svg?updatedAt=1689493101201"
                                    draggable="false"
                                    alt="One-2-One Mentorship"
                                />
                            </div>
                            <div className="heading text-gray-700">
                                <p>One-2-One Alumnis</p>
                            </div>
                            <div className="desc">
                                Alumnis from all big tech companies are here
                                to assist you. You will be provided personalized
                                chatting with them. You can get recommendation from them in there companies.
                            </div>
                        </div>
                        <div className="service-desc-3 service-common">
                            <div className="image">
                                <img
                                    src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service3.webp?updatedAt=1689493101686"
                                    draggable="false"
                                    alt="5 Category Job Listing"
                                />
                            </div>
                            <div className="heading text-gray-700">
                                <p>Multiple Job Opportunity </p>
                            </div>
                            <div className="desc">
                                To eliminate crowding, we have separated our job listing into varions
                                different categories i.e, hackathons, internships, workshops,
                                hirings and conferences.
                            </div>
                        </div>
                        <div className="service-desc-4 service-common">
                            <div className="image">
                                <img
                                    src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service4.webp?updatedAt=1689493101109"
                                    draggable="false"
                                    alt="Bookmarking and Filtering Jobs"
                                />
                            </div>
                            <div className="heading text-gray-700">
                                <p>Interships from Alumni</p>
                            </div>
                            <div className="desc">
                                Here you can get directly recommendation from the alumnis and you senior's who is currently working in big tech companies.
                            </div>
                        </div>
                        <div className="service-desc-5 service-common">
                            <div className="image">
                                <img
                                    src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service5.webp?updatedAt=1689493101582"
                                    draggable="false"
                                    alt="Scholarship"
                                />
                            </div>
                            <div className="heading text-gray-700">
                                <p>Get Feedback from Alumnis</p>
                            </div>
                            <div className="desc">
                               You can connect with alumnis and get career guide and Feedback about your skill imprument.
                            </div>
                        </div>
                        <div className="service-desc-6 service-common">
                            <div className="image">
                                <img
                                    src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service6.webp?updatedAt=1689493101339"
                                    draggable="false"
                                    alt="Passwordless Login"
                                />
                            </div>
                            <div className="heading text-gray-700">
                                <p>Password Secured Authentication</p>
                            </div>
                            <div className="desc">
                               To maintane privacy of individual users we use Password Secured authentication.
                            </div>
                        </div>
                        <div className="service-desc-7 service-common">
                            <div className="image">
                                <img
                                    src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service7.webp?updatedAt=1689493101242"
                                    draggable="false"
                                    alt="Get Notified"
                                />
                            </div>
                            <div className="heading text-gray-700">
                                <p>Get Personal Skill Feedback</p>
                            </div>
                            <div className="desc">
                               Alumni will give there Feedback and also provides there work expirence with you individual. they will give you best career guide.
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ================================  Why SheRise  ================================= */}

            <div className="whysherise-main flex text-gray-500">
                <div className=" w-1/2 p-[8rem]">
                    <img
                        src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/whysherise.svg?updatedAt=1689503441644"
                        alt=""
                    />
                    <img src="" alt="" />
                </div>
                <div className="w-1/2 py-[10rem] space-y-2">
                    <span className="text-xl font-semibold text-gray-600">Reasons for choosing us</span>
                    <div className="all-reasons space-y-2">
                        <ul className="flex space-y-1 flex-col  mr-10 ">
                            <li className="flex font-semibold text-gray-600 space-x-2">
                                <span className="my-auto align-middle"><RiLockPasswordFill /> </span>
                                <span className="my-auto align-middle">Password Secured Authentication</span>
                            </li>
                            <li className="">
                                <span className=" ">
                                    Password authentication is an authentication method in
                                    which a user can log in to any particular product or system
                                    without entering (and having to remember) a password or any
                                    other knowledge-based secret. Alumni Connect provides you with this
                                    feature which will help the users to login to their profile.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="all-reasons space-y-2">
                        <ul className="flex space-y-1 flex-col  mr-10 ">
                            <li className="flex font-semibold text-gray-600 space-x-2">
                                <span className="my-auto align-middle"><FaFemale /></span>
                                <span className="my-auto align-middle">Alumni Oriented Jobs</span>
                            </li>
                            <li className="">
                                <span className=" ">
                                "Alumni-oriented jobs" refers to job opportunities specifically targeted towards
                                 individuals who have graduated from a particular educational institution or program.
                                  These jobs may offer unique benefits or requirements tailored to alumni,
                                   such as alumni networks, mentoring programs, or alumni-exclusive job postings
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="all-reasons space-y-2">
                        <ul className="flex space-y-1 flex-col  mr-10 ">
                            <li className="flex font-semibold text-gray-600 space-x-2">
                                <span className="my-auto align-middle"><FaHandHoldingHeart /></span>
                                <span className="my-auto align-middle">Supporting Underprivileged</span>
                            </li>
                            <li className="">
                                <span className=" ">
                                    Since we are non-profit organization, we are raising funds
                                    to directly help those female childrens who are not able to
                                    pursue their career in tech due to financial or any other
                                    reasons.
                                </span>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <footer className="text-center text-gray-600 border-t border-gray-300 py-1">
                <span className="text-center">2024 © Copyright Resevered </span> 
            </footer>
        </>
    );
};

export default LandingPage;
