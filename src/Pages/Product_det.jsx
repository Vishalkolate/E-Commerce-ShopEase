
import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Product_det() {

    const { product_id } = useParams();
    const navigate = useNavigate();

    const [product_info, setProduct_info] = useState({});

    useEffect(() => {

        const obj = {
            product_id: product_id,
            token: localStorage.getItem("token")
        };

        axios.post("https://a2zithub.org/dairy/abi/product_by_id", obj).then((res) => {
            setProduct_info(res.data);
        });

    }, [product_id]);

    function addToCart() {

        const token = localStorage.getItem("token");

        if (!token) {

            const login = window.confirm(
                "⚠️ Please Login First!\n\nDo you want to Login?"
            );

            if (login) {
                navigate("/login");
            }

            return;
        }

        const obj = {
                product_id: product_id,
                token: token
            };

        axios.post("https://a2zithub.org/dairy/abi/addtocart", obj).then((res) => {
            setProduct_info({
                ...product_info, cart: "Yes"
            });

        })

    }

    return (
        <>
            <Navbar />

            <br /><br /><br /><br />

            <h1 className="text-center font-bold text-5xl"> Product Details </h1>

            <div className="container mx-auto px-6 py-10 flex justify-center">

                <div className="grid grid-cols-1 md:grid-cols-2  items-center bg-white rounded-2xl shadow-xl p-8">

                    <img src={product_info.product_img} className="w-75 max-w-md mx-auto rounded-xl" />

                    <div>

                        <h1 className="text-4xl font-bold mb-4"> {product_info.product_name} </h1>

                        <p className="text-gray-600 mb-5"> Product details (or product information) are the
                            specific data points that describe a product. </p>

                        <h2 className="text-3xl font-bold text-green-600 mb-6"> ₹ {product_info.price} </h2>

                        {product_info.cart === "No" ? (

                            <button onClick={addToCart} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg" > Add To Cart </button>

                        ) : (
                            <Link to="/cart">
                                <button className="bg-green-600 text-white px-8 py-3 rounded-lg cursor-not-allowed"> Already Added To Cart </button>
                            </Link>

                        )}

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Product_det;

