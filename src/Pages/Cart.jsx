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

        axios .post("https://a2zithub.org/dairy/abi/cart_list", obj).then((res) => {

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

        axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj) .then(() => {
                getProduct();
            });
    }

    function incCart(product_econ_cart_id) {

        const obj = {
            product_econ_cart_id,
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty", obj) .then(() => {
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

            <div className="container mx-auto mt-24 px-5 w-[90%]">

                <h1 className="text-4xl font-bold text-center mb-10"> Cart List </h1>

                {cartinfo.length === 0 ? (

                    <div className="text-center">

                        <div className="w-36 h-36 mx-auto rounded-full bg-blue-100 flex justify-center items-center">
                            <ShoppingCart size={70} className="text-blue-600" />
                        </div>

                        <h2 className="text-3xl font-semibold mt-8"> Your Cart is Empty </h2>

                        <Link to="/products">
                            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-xl">Shop Now </button>
                        </Link>

                    </div>

                ) : (

                    <>
                        <div className="overflow-x-auto">

                            <table className="w-full  text-center">

                                <thead className="bg-gray-200">

                                    <tr>
                                        <th className="p-3">Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {Array.isArray(cartinfo) &&
                                        cartinfo.map((val, index) => (

                                            <tr key={index} className="border-b">

                                                <td className="p-3">
                                                    <img src={val.product_img} alt={val.product_name} className="w-24 h-24 mx-auto object-cover"/>
                                                </td>

                                                <td>{val.product_name}</td>

                                                <td>₹{val.price}</td>

                                                <td>

                                                    <button onClick={() => decCart(val.product_econ_cart_id)
                                                        } className="bg-blue-500 text-white px-3 py-1 rounded"> - </button>

                                                    <span className="mx-3 font-bold"> {val.qty}</span>

                                                    <button onClick={() =>incCart(val.product_econ_cart_id) } className="bg-blue-500 text-white px-3 py-1 rounded" >+ </button>

                                                </td>

                                                <td> ₹ {Number(val.price) * Number(val.qty)} </td>

                                                <td>

                                                    <button onClick={() => removeCart(val.product_econ_cart_id) } className="bg-red-600 text-white px-4 py-2 rounded" >&#10005;</button>

                                                </td>

                                            </tr>

                                        ))}

                                </tbody>

                            </table>

                        </div>

                        <div className="flex justify-end mt-8 items-center gap-5">

                            <h2 className="text-3xl font-bold"> Total : ₹{total} </h2>

                            <Link to="/checkout">
                                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-xl"> Checkout</button>
                            </Link>

                        </div>

                    </>

                )}

            </div>

            <Footer />
        </>
    );
}

export default Cart;