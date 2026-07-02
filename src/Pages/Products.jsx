import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import ProductsCard from "../Component/ProductsCard";
import axios from "axios";
import { Link } from "react-router-dom";


function Products() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("https://a2zithub.org/dairy/abi/product_det").then((response) => {
            setProduct(response.data);
        })


    }, []);
    return (
        <>
            <Navbar />
            <Link to="/Product_det">
                <br /><br /><br /><br />
                <h1 className="text-center font-bold text-5xl">Products</h1>
                <br /><br />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6" >

                    {product.map((val, index) => (

                        <ProductsCard key={index} data={val} />
                    ))}

                </div>
            </Link>
            <Footer />
        </>
    )

}

export default Products;