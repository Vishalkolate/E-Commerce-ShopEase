import { Link } from "react-router-dom";
import { FaCheckCircle, FaShoppingBag, FaHome } from "react-icons/fa";

function Order_success() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center px-4">

                <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center">

                    <FaCheckCircle className="text-green-500 text-8xl mx-auto mb-6 animate-bounce" />

                    <h1 className="text-4xl font-bold text-gray-800"> Order Placed Successfully! </h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        Thank you for shopping with us. <br />
                        Your order has been received and is being processed.
                    </p>

                    <div className="bg-gray-100 rounded-xl p-5 mt-8">

                        <div className="flex justify-between mb-3">
                            <span className="font-medium">Order Status</span>
                            <span className="text-green-600 font-bold"> Confirmed </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="font-medium">Estimated Delivery</span>
                            <span className="font-bold text-blue-600"> 2 - 4 Days </span>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">

                        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition" >
                            <FaHome /> Home
                        </Link>

                        <Link to="/order_det" className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex justify-center items-center gap-2 transition" >
                            <FaShoppingBag />  My Orders
                        </Link>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Order_success;