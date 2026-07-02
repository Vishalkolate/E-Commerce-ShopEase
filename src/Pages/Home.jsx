import { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import ProductsCard from "../Component/ProductsCard";
import axios from "axios"

function Home() {

    const [current, setCurrent] = useState(0);
    const [sliders, setSliders] = useState([]);
    const [featured_products, setFeatured_Products] = useState([])
    const [new_product, setNewProduct] = useState([])
    const [best_selling_product, setBestSellingProduct] = useState([])

    useEffect(() => {
        axios.get("https://a2zithub.org/dairy/abi/slider_det").then((res) => {
            setSliders(res.data);
        })

    })

    useEffect(() => {

        if (sliders.length === 0) return;

        const slider = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sliders.length);
        }, 3000);

        return () => clearInterval(slider);

    }, []);

    useEffect(() => {

        axios.get("https://a2zithub.org/dairy/abi/feature_product").then((res) => {
            setFeatured_Products(res.data);
        })

    }, []);

    useEffect(() => {

        axios.get("https://a2zithub.org/dairy/abi/new_product").then((res) => {
            setNewProduct(res.data);
        })

    }, []);

    useEffect(() => {

        axios.get("https://a2zithub.org/dairy/abi/best_selling_product").then((res) => {
            setBestSellingProduct(res.data);
        })

    }, []);

    if (sliders.length === 0) {
        return <h1>Loading...</h1>;
    }


    return (
        <>
            <Navbar />
            <br /><br />

            {/* Hero Banner Section */}
            <section className="relative w-full h-[300px] md:h-[700px] overflow-hidden">

                <img
                    src={sliders[current].slider_img}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                    {sliders.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full ${current === index
                                ? "bg-orange-500"
                                : "bg-white"
                                }`}
                        />
                    ))}
                </div>

            </section>

            {/* Featured Products */}

            <section className="py-10">
                <h2 className="text-3xl font-bold ml-6 mb-6"> Featured Products </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">

                    {featured_products.map((val, index) => (
                        <>
                            <ProductsCard data={val} />

                        </>

                    ))}



                </div>
            </section>

            <section className="py-10 bg-gray-100">
                <h2 className="text-3xl font-bold ml-6 mb-6"> New Arrivals </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">

                    {new_product.map((val, index) => (
                        <>
                            <ProductsCard data={val} />

                        </>

                    ))}

                </div>
            </section>

            <section className="py-10">
                <h2 className="text-3xl font-bold ml-6 mb-6"> Best Selling Products </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">

                    {best_selling_product.map((val, index) => (
                        <>
                            <ProductsCard data={val} />

                        </>

                    ))}

                </div>
            </section>


            <Footer />
        </>
    );
}

export default Home;