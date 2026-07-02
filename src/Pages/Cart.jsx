import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";


function Cart() {

    const [cartinfo, setCartinfo] = useState([]);
    const [subtotal, setSubTotal] = useState(0);


    function getProduct() {

        const obj = {
            "token": localStorage.getItem("token")
        }

        axios.post("https://a2zithub.org/dairy/abi/cart_list", obj).then((res) => {
            setCartinfo(res.data)
            getProduct()
        })
    }

    useEffect(() => {
        getProduct()
    }, [])

    useEffect(() => {

        let total = 0;
        cartinfo.forEach((i) => {

            total += Number(i.price) * Number(i.qty)
        })
        setSubTotal(total)

    }, [cartinfo])


    function removeCart(product_econ_cart_id) {

        const obj = {
            "product_econ_cart_id": product_econ_cart_id,
            "token": localStorage.getItem("token")
        }

        axios.post("https://a2zithub.org/dairy/abi/remove_cart_qty", obj).then((res) => {
            getProduct()
        })
    }

    function incCart(product_econ_cart_id) {
        const obj = {
            "product_econ_cart_id": product_econ_cart_id,
            "token": localStorage.getItem("token")
        }
        axios.post("https://a2zithub.org/dairy/abi/inc_cart_qty", obj).then((res) => {
            getProduct()
        })
    }

    function decCart(product_econ_cart_id) {
        const obj = {
            "product_econ_cart_id": product_econ_cart_id,
            "token": localStorage.getItem("token")
        }
        axios.post("https://a2zithub.org/dairy/abi/dec_cart_qty", obj).then((res) => {
            getProduct()
        })
    }

    return (
        <>
            <Navbar />
         
            <h1 className="text-center text-4xl font-bold mt-25">Cart List</h1>
            <br /><br />

            <table border="2" className="w-[80%] text-center">
                <thead>
                    <tr >
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>QTY</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {cartinfo.map((val, index) => (
                        <tr key={index}>
                            <td>
                                <img src={val.product_img}
                                    className="w-26 h-26 mx-auto m-2" />
                            </td>

                            <td>{val.product_name}</td>

                            <td>₹{val.price}</td>

                            <td>
                                <button onClick={() => decCart(val.product_econ_cart_id)} className="border bg-blue-500 text-white px-3 py-1 m-2 rounded">&#45;</button>
                                {val.qty}
                                <button onClick={() => incCart(val.product_econ_cart_id)} className="border bg-blue-500 text-white px-3 py-1 m-2 rounded">&#43;</button>
                            </td>

                            <td>₹{val.price * val.qty}</td>

                            <td>
                                <button onClick={() => removeCart(val.product_econ_cart_id)} className="bg-red-500 text-white px-3 py-1 rounded">
                                    &#10005;
                                </button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>

            {cartinfo.length === 0 ? (
                <>
                    <div className="w-35 h-35 mx-auto rounded-full bg-blue-100 flex items-center justify-center mt-10">
                        <ShoppingCart size={80} className="text-blue-600" />
                    </div>

                    <h2 className="text-4xl  mt-8 text-center">Your Cart is Empty </h2>

                    <div className="flex justify-center mt-10">
                        <Link to="/products">
                            <button className="border p-1 px-3 bg-blue-600 text-white text-2xl rounded">Shop Now </button>
                        </Link>
                    </div>
                </>
            ) : (
                <div className="flex ml-230">
                    <h1 className="font-bold text-2xl">Total = {subtotal}/-</h1>

                    <Link to="/checkout">
                        <button className="bg-green-600 text-white text-xl px-2 py-1 rounded ml-5">Checkout</button>
                    </Link>
                </div>
            )}

            <Footer />
        </>
    )
}

export default Cart;