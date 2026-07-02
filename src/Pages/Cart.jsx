import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Cart() {

    const [cartinfo, setCartinfo] = useState([]);
    const [total, setSubTotal] = useState(0);

    function getProduct() {

        const obj = {
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/cart_list", obj).then((res) => {

            if (Array.isArray(res.data)) {
                setCartinfo(res.data);
            }

            else if (Array.isArray(res.data.data)) {
                setCartinfo(res.data.data);
            }

            else {
                setCartinfo([]);
            }
        })
    }

    useEffect(() => {
        getProduct();
    }, []);

    useEffect(() => {

        let total = 0;

        cartinfo.forEach((item) => {
            total += Number(item.price) * Number(item.qty);
        });
        setSubTotal(total);

    }, [cartinfo]);

    function removeCart(product_econ_cart_id) {

        const obj = {
            product_econ_cart_id,
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj).then(() => {
            getProduct();
        });
    }

    function incCart(product_econ_cart_id) {

        const obj = {
            product_econ_cart_id,
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty", obj).then(() => {
            getProduct();
        });
    }

    function decCart(product_econ_cart_id) {

        const obj = {
            product_econ_cart_id,
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/dec_cart_qty", obj).then(() => {
            getProduct();
        });
    }

    return (
        <>
            <Navbar />

            <div className="container mx-auto mt-24 px-4 sm:px-5 w-full max-w-7xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10">Cart List</h1>

                {cartinfo.length === 0 ? (
                    <div className="text-center py-8">
                        <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full bg-blue-100 flex justify-center items-center">
                            <ShoppingCart size={60} className="text-blue-600 sm:w-[70px] sm:h-[70px]" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-semibold mt-6 sm:mt-8">Your Cart is Empty</h2>
                        <Link to="/products">
                            <button className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-lg sm:text-xl">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Mobile Card View */}
                        <div className="block md:hidden space-y-4">
                            {Array.isArray(cartinfo) && cartinfo.map((val, index) => (
                                <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={val.product_img}
                                            alt={val.product_name}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-sm sm:text-base truncate">{val.product_name}</h3>
                                            <p className="text-gray-600 text-sm sm:text-base">₹{val.price}</p>
                                            <p className="font-bold text-sm sm:text-base">Total: ₹{Number(val.price) * Number(val.qty)}</p>
                                        </div>
                                        <button
                                            onClick={() => removeCart(val.product_econ_cart_id)}
                                            className="text-red-600 hover:text-red-800 text-xl font-bold flex-shrink-0"
                                        >
                                            &#10005;
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => decCart(val.product_econ_cart_id)}
                                                className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 sm:w-9 sm:h-9 rounded flex items-center justify-center text-lg"
                                            >
                                                -
                                            </button>
                                            <span className="mx-2 sm:mx-3 font-bold text-sm sm:text-base min-w-[24px] text-center">
                                                {val.qty}
                                            </span>
                                            <button
                                                onClick={() => incCart(val.product_econ_cart_id)}
                                                className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 sm:w-9 sm:h-9 rounded flex items-center justify-center text-lg"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Table View */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-center min-w-[600px]">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="p-3 text-sm">Product</th>
                                        <th className="text-sm">Name</th>
                                        <th className="text-sm">Price</th>
                                        <th className="text-sm">Quantity</th>
                                        <th className="text-sm">Total</th>
                                        <th className="text-sm">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(cartinfo) && cartinfo.map((val, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-50">
                                            <td className="p-3">
                                                <img
                                                    src={val.product_img}
                                                    alt={val.product_name}
                                                    className="w-20 h-20 md:w-24 md:h-24 mx-auto object-cover rounded"
                                                />
                                            </td>
                                            <td className="text-sm md:text-base">{val.product_name}</td>
                                            <td className="text-sm md:text-base">₹{val.price}</td>
                                            <td>
                                                <div className="flex items-center justify-center">
                                                    <button
                                                        onClick={() => decCart(val.product_econ_cart_id)}
                                                        className="bg-blue-500 hover:bg-blue-600 text-white px-2.5 py-1 md:px-3 md:py-1 rounded text-sm md:text-base"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-2 md:mx-3 font-bold text-sm md:text-base min-w-[24px]">
                                                        {val.qty}
                                                    </span>
                                                    <button
                                                        onClick={() => incCart(val.product_econ_cart_id)}
                                                        className="bg-blue-500 hover:bg-blue-600 text-white px-2.5 py-1 md:px-3 md:py-1 rounded text-sm md:text-base"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="text-sm md:text-base">₹{Number(val.price) * Number(val.qty)}</td>
                                            <td>
                                                <button
                                                    onClick={() => removeCart(val.product_econ_cart_id)}
                                                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded text-sm md:text-base"
                                                >
                                                    &#10005;
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Total and Checkout - Responsive */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 gap-4">
                            <div className="w-full sm:w-auto"></div> {/* Spacer for alignment */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto">
                                <h2 className="text-2xl sm:text-3xl font-bold">Total: ₹{total}</h2>
                                <Link to="/checkout" className="w-full sm:w-auto">
                                    <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-base sm:text-xl w-full sm:w-auto">
                                        Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <Footer />
        </>
    );
}

export default Cart;