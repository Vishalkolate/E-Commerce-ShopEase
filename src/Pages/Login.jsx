import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [user_mobile, setUserMobile] = useState("");
    const [user_password, setUserPassword] = useState("");
    const [error, setError] = useState("")

    const navigate = useNavigate();

    function fromsubmit(e) {
        e.preventDefault();

        const obj = {
            "user_mobile": user_mobile,
            "user_password": user_password
        }
        console.log(obj)

        axios.post("https://a2zithub.org/dairy/abi/user_login", obj).then((res) => {

            if (res.data.status == "success") {

                localStorage.setItem("token", res.data.token)

                navigate("/")
            } else {

                setError("Invalid UserName and Password")
            }
        })
    }

    return (
        <>
            <Navbar />

            <form onSubmit={fromsubmit}>
                <div className="min-h-screen  bg-gradient-to-r from-orange-400 to-blue-500 flex justify-center items-center px-4">
                    <div className="border border-gray-200 shadow-lg w-full max-w-xl p-8 rounded-md bg-white">

                        <div className="flex justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
                                <p className="font-bold">ShopEase</p>
                            </div>

                            <div>
                                <p> Don't have an account?
                                    <Link to="/signin" className="font-semibold text-blue-600 hover:underline" >
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-center text-red-600">{error}</p>
                            <h1 className="text-2xl font-semibold">
                                Login to your account
                            </h1>
                        </div>

                        <p className="text-sm text-gray-600 mt-3">
                            Welcome back! Please enter your details.
                        </p>

                        <div className="mt-6">
                            <input type="number" placeholder="Mobile Number" onChange={(e) => setUserMobile(e.target.value)}
                                className="p-3 border rounded-md w-full outline-none focus:border-blue-500" />

                            <input type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)}
                                className="p-3 mt-4 border rounded-md w-full outline-none focus:border-blue-500" />
                        </div>

                        <div className="mt-4 flex items-center">
                            <input type="checkbox" id="terms" className="h-4 w-4" />

                            <label htmlFor="terms"
                                className="ml-2 text-sm text-gray-600">
                                I agree to the
                                <Link to="#"
                                    className="text-blue-600 hover:underline" > Terms and Conditions
                                </Link>
                            </label>
                        </div>

                        <button type="submit"
                            className="bg-blue-600 text-white w-full py-3 rounded-md font-semibold mt-5 hover:bg-blue-700 transition">
                            Login
                        </button>

                        <p className="text-center text-sm mt-4">
                            Don't have an account?
                            <Link to="/signin"
                                className="text-blue-600 font-semibold hover:underline" > Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
}

export default Login;