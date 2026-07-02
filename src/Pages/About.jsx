import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { FaShippingFast, FaShieldAlt, FaHeadset, FaTags, FaUsers, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <Navbar />

            <section className="from-blue-700 to-indigo-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold mb-5 mt-10 text-black"> About ShopEase</h1>

                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                        Welcome to ShopEase, your trusted online shopping destination.
                        We provide quality products at affordable prices with fast delivery,
                        secure payments, and excellent customer service.
                    </p>

                </div>
            </section>

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">

                    <div>
                        <img  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
                            alt="Shoes" className="rounded-xl shadow-xl" />
                    </div>

                    <div>

                        <h2 className="text-4xl font-bold mb-6"> Who We Are </h2>

                        <p className="text-gray-600 leading-8 mb-6">ShopEase is an online shopping platform created to make your shopping
                            experience simple, fast, and reliable. We offer a wide range of products
                            including electronics, fashion, home essentials, beauty products,
                            and accessories from trusted brands.
                        </p>

                        <p className="text-gray-600 leading-8">Our goal is to provide genuine products, competitive prices,
                            fast delivery, and outstanding customer support for every customer.
                        </p>

                    </div>

                </div>

            </section>


            <section className="bg-gray-100 py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-center text-4xl font-bold mb-14">Why Choose Us</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
                            <FaShippingFast className="text-5xl text-blue-600 mb-5" />

                            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>

                            <p className="text-gray-600">Quick shipping across India with safe packaging. </p>

                        </div>

                        <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

                            <FaShieldAlt className="text-5xl text-green-600 mb-5" />

                            <h3 className="text-xl font-semibold mb-3">Secure Payment</h3>

                            <p className="text-gray-600">100% secure online payment system.</p>

                        </div>

                        <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

                            <FaHeadset className="text-5xl text-red-500 mb-5" />

                            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>

                            <p className="text-gray-600">Friendly customer support anytime.</p>

                        </div>

                        <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">

                            <FaTags className="text-5xl text-yellow-500 mb-5" />

                            <h3 className="text-xl font-semibold mb-3">Best Price</h3>

                            <p className="text-gray-600">Affordable prices with exciting offers.</p>

                        </div>

                    </div>

                </div>

            </section>


            <section className="bg-blue-400 from-blue-700 to-indigo-700 py-20 text-white">

                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center px-6">

                    <div>
                        <h2 className="text-5xl font-bold">5K+</h2>
                        <p>Happy Customers</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">1000+</h2>
                        <p>Products</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">50+</h2>
                        <p>Trusted Brands</p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">24/7</h2>
                        <p>Customer Support</p>
                    </div>

                </div>

            </section>

            <section className="py-20 bg-gray-100">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-center text-4xl font-bold mb-14">Our Strength</h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white rounded-xl p-10 shadow">

                            <FaUsers className="text-5xl text-blue-600 mb-5" />

                            <h3 className="text-2xl font-semibold mb-3"> Trusted Shopping </h3>

                            <p className="text-gray-600"> Thousands of customers trust ShopEase for safe and reliable online shopping.</p>
                        </div>

                        <div className="bg-white rounded-xl p-10 shadow">

                            <FaAward className="text-5xl text-green-600 mb-5" />

                            <h3 className="text-2xl font-semibold mb-3">Premium Quality</h3>

                            <p className="text-gray-600"> We provide only high-quality and genuine products from trusted brands.</p>

                        </div>

                        <div className="bg-white rounded-xl p-10 shadow">

                            <FaShieldAlt className="text-5xl text-red-600 mb-5" />

                            <h3 className="text-2xl font-semibold mb-3">Secure Payments</h3>

                            <p className="text-gray-600">Enjoy safe transactions with multiple secure payment options.</p>
                        </div>

                    </div>

                </div>

            </section>


            <section className="bg-blue-400 text-white py-20">

                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold mb-5">Start Shopping with ShopEase</h2>

                    <p className="mb-8 text-lg text-gray-200"> Discover thousands of quality products at the best prices.
                        Shop now and enjoy a smooth shopping experience.
                    </p>

                    <Link to="/products">
                        <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-200 duration-300">
                            Explore Products
                        </button>
                    </Link>
                </div>

            </section>

            <Footer />
        </>
    );
}

export default About;