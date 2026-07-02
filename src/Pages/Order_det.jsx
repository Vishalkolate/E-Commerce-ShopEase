import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { RiShoppingBag3Line, RiPriceTag3Line, RiShoppingCartLine, } from "@remixicon/react";

function Order_det() {

    const [order_det, setOrder_det] = useState([]);
    const { order_id } = useParams();

    useEffect(() => {
        const obj = {
            token: localStorage.getItem("token"),
            order_id: order_id,
        };

        axios.post("https://a2zithub.org/dairy/abi/order_det", obj).then((res) => {
            setOrder_det(res.data.order_products);
        });
    }, []);

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 pt-28 pb-10">
                <div className="max-w-5xl mx-auto px-4">

                    <h1 className="text-4xl font-bold text-center mb-8">Order Details </h1>

                        {order_det.map((val, index) => (
                            <div key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 mb-6">
                                <div className="flex flex-col md:flex-row gap-6">

                                    <div className="flex justify-center">
                                        <img src={val.product_img} className="w-40 h-40 object-cover rounded-xl border" />
                                    </div>

                                    <div className="flex-1">

                                        <h2 className="text-2xl font-bold mb-4">{val.product_name} </h2>

                                        <div className="space-y-3">

                                            <p className="flex items-center gap-2">
                                                <RiShoppingBag3Line className="text-green-600" />
                                                <span className="font-semibold">Quantity : </span>  {val.qty}
                                            </p>

                                            <p className="flex items-center gap-2">
                                                <RiPriceTag3Line className="text-blue-600" />
                                                <span className="font-semibold"> Price : </span> ₹ {val.price}
                                            </p>

                                            <p className="flex items-center gap-2">
                                                <RiShoppingCartLine className="text-orange-600" />
                                                <span className="font-semibold">  Total :</span>
                                                <span className="text-green-600 font-bold text-lg">
                                                    ₹ {val.qty * val.price}
                                                </span>
                                            </p>

                                        </div>

                                        <Link to="/order_list">
                                            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                                                Buy Again
                                            </button>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        ))
                   }


                </div>
            </div>

            <Footer />
        </>
    );
}

export default Order_det;