import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {

    const navigate = useNavigate()

    const [user_name, setUserName] = useState("");
    const [user_email, setUserEmail] = useState("");
    const [user_mobile, setUserMobile] = useState("");
    const [user_password, setUserPassword] = useState("");

    function fromsubmit(e) {
        e.preventDefault();

        const obj = {
            "user_name": user_name,
            "user_email": user_email,
            "user_mobile": user_mobile,
            "user_password": user_password,
        }

        axios.post("https://a2zithub.org/dairy/abi/user_register",obj).then((res)=>{
            navigate("/login")
        })
    }

    return (
        <>
                <br /><br />

                <Navbar/>
               <div className="p-4 bg-gradient-to-r from-blue-400 to-orange-500 mt-3">
                
                <form  onSubmit={fromsubmit}>

                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0" >
                        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-xl xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                                <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"> Create an account</p>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Your Username</label>
                                    <input type="text" id="username" placeholder="Your Username" onChange={(e) => setUserName(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                                    <input type="email" id="email" placeholder="Your Email" onChange={(e) => setUserEmail(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900"> Your Mobile</label>
                                    <input type="number" id="mobile" placeholder="Your Mobile" onChange={(e) => setUserMobile(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
                                    <input type="password" id="password" placeholder="Your Password" onChange={(e) => setUserPassword(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" />
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input type="checkbox" id="terms" aria-describedby="terms"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50"/>
                                    </div>

                                    <div className="ml-3 text-sm">
                                        <label className="font-light text-gray-500">
                                            I accept the
                                            <a href="#" className="font-medium text-blue-600 hover:underline"> Terms and Conditions </a>
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"> Create an account
                                </button>

                               <p className="text-center text-sm mt-4">Already have an account?
                                 <Link to="/login" className="text-center mt-3 ml-1 text-1xl text-blue-600 hover:underline">
                                 Login In
                                </Link>
                               </p>

                            </div>
                        </div>
                    </div>
                </form>
                </div>
           <Footer/>
        </>
    );
}

export default Signin;