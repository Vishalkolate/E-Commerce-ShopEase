import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { RiEyeLine } from "@remixicon/react";
import { Link, } from "react-router-dom";

function Order_list() {
    const [orderinfo, setOrderinfo] = useState([]);


    const getOrders = () => {
        const obj = {
            token: localStorage.getItem("token"),
        };

        axios.post("https://a2zithub.org/dairy/abi/order_list", obj).then((res) => {
            setOrderinfo(res.data.order_det || []);
        });
    }; 

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 pt-28 pb-12 px-4">
                <div className="max-w-7xl mx-auto">


                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-800">My Orders</h1>

                        <p className="text-gray-500 mt-2">View all your previous orders </p>
                    </div>


                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">

                                <thead className="bg-blue-400 text-white">
                                    <tr>
                                        <th className="py-4 px-5">Sr.No</th>
                                        <th className="py-4 px-5">Date</th>
                                        <th className="py-4 px-5">Payment</th>
                                        <th className="py-4 px-5">Amount</th>
                                        <th className="py-4 px-5">Address</th>
                                        <th className="py-4 px-5">Status</th>
                                        <th className="py-4 px-5">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {orderinfo.map((val, index) => (
                                        <tr key={index} className="border-b hover:bg-green-50 duration-300" >

                                            <td className="py-4 px-5 font-semibold">{index + 1}</td>

                                            <td className="py-4 px-5">{val.entry_date}</td>

                                            <td className="py-4 px-5">{val.payment_type}</td>

                                            <td className="py-4 px-5 font-bold text-green-700">₹ {val.ttl_amount}</td>

                                            <td className="py-4 px-5 text-sm text-gray-600">{val.area}, {val.city}, {val.district},
                                                <br />{val.state}, {val.country} - {val.pincode}</td>

                                            <td className="py-4 px-5">
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    Delivered
                                                </span> </td>

                                            <td className="py-4 px-5">
                                                <Link to={`/order_det/${val.product_order_id}`}>
                                                    <button className="bg-green-600  text-white p-2 rounded-lg transition" >
                                                        <RiEyeLine size={20} />
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Order_list;