import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";

function Contact() {

    const [success, setSuccess] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setTimeout(() => {
        setSuccess(false);
    }, 3000);
};


    return (
        <>
            <Navbar />

            <div className="bg-gray-100 min-h-screen py-14">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mt-10">Get In Touch</h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        Have questions about your orders, products, or delivery? Our ShopEase support team is here to help.</p>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6">


                    <div className="bg-white rounded-xl shadow-lg p-8">

                        <h2 className="text-3xl font-bold mb-6"> Send Us a Message </h2>
                        <form className="space-y-5" onSubmit={handleSubmit}>

                            <input type="text" placeholder="Enter Your Full Name"
                                className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-300" />

                            <input type="email" placeholder="Enter Your Email Address"
                                className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-300" />

                            <input type="text" placeholder="Order ID (Optional)"
                                className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-300" />

                            <textarea rows="3" placeholder="Tell us how we can help you..."
                                className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-300" />

                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">Send Message </button>

                        </form>

                    </div>

                    <div className="space-y-6">

                        <div className="bg-white shadow-lg rounded-xl p-6 flex gap-4 items-center">

                            <div className="bg-blue-500 text-white p-4 rounded-full">
                                <FaPhoneAlt />
                            </div>

                            <div>
                                <h3 className="font-bold text-xl">Phone </h3>

                                <p className="text-gray-500">+918625994180 </p>
                            </div>

                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 flex gap-4 items-center">

                            <div className="bg-green-500 text-white p-4 rounded-full">
                                <FaEnvelope />
                            </div>

                            <div>
                                <h3 className="font-bold text-xl">Email </h3>

                                <p className="text-gray-600">support@shopease.com </p>
                            </div>

                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 flex gap-4 items-center">

                            <div className="bg-red-500 text-white p-4 rounded-full">
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <h3 className="font-bold text-xl">Address </h3>

                                <p className="text-gray-600">AhilyaNagar, Maharashtra, India </p>
                            </div>

                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6 flex gap-4 items-center">

                            <div className="bg-yellow-500 text-white p-4 rounded-full">
                                <FaClock />
                            </div>

                            <div>
                                <h3 className="font-bold text-xl">Customer Support Hours</h3>

                                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM </p>
                            </div>

                        </div>

                    </div>

                </div>



                <div className="max-w-7xl mx-auto mt-12 px-6">
                    <div className="bg-blue-400 rounded-xl text-white p-10 text-center">

                        <h2 className="text-3xl font-bold">Need Immediate Help? </h2>

                        <p className="mt-3 text-lg"> Our customer support team is available to assist you with orders,
                            returns, payments, and delivery-related queries. </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-8">

                            <div>
                                <h3 className="text-2xl font-bold">24/7</h3>
                                <p>Customer Support</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">1000+</h3>
                                <p>Happy Customers</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">Fast</h3>
                                <p>Response Time</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-14 px-6">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10504.364077008007!2d74.72914237255522!3d19.105872525679832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1782462456828!5m2!1sen!2sin"
                            width="100%"
                            height="500" style={{ border: 1 }}
                            allowFullScreen loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin" title="Google Map" ></iframe>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 px-6">

                <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="font-bold text-xl">How can I track my order?</h3>

                        <p className="text-gray-600 mt-2">Login to your ShopEase account and visit the Orders section to track your shipment.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="font-bold text-xl">What is your return policy?</h3>

                        <p className="text-gray-600 mt-2">Products can be returned within 7 days if they meet our return policy.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="font-bold text-xl">Do you provide Cash on Delivery?</h3>

                        <p className="text-gray-600 mt-2">Yes, Cash on Delivery is available for selected locations.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="font-bold text-xl">How can I contact customer support?</h3>

                        <p className="text-gray-600 mt-2"> You can contact us by phone, email, or by submitting the contact form.</p>
                    </div>

                </div>

            </div>

            
                {
                    success &&
                    <div className="fixed top-20 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                        ✅ Thank you! Your message has been sent successfully.
                    </div>
                }

            <Footer />
        </>
    );
}

export default Contact;