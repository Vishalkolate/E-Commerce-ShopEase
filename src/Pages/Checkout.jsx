import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cartinfo, setCartInfo] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const navigate = useNavigate();

  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [payment_type, setPaymentType] = useState("");

  function place_order(e) {
    e.preventDefault();

    const obj = {
      area,
      city,
      district,
      state,
      country,
      pincode,
      payment_type,
      token: localStorage.getItem("token"),
    };

    axios .post("https://a2zithub.org/dairy/abi/place_order", obj) .then((res) => {
        if (res.data.status) {
          navigate("/order_success");
        } else {
          alert(res.data.message);
        }
      });
  }

  useEffect(() => {
    const obj = {
      token: localStorage.getItem("token"),
    };

    axios.post("https://a2zithub.org/dairy/abi/cart_list", obj).then((res) => {
      setCartInfo(res.data);

      let total = 0;

      res.data.forEach((val) => {
        total += Number(val.price) * Number(val.qty);
      });

      setSubtotal(total);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-5">
          <h1 className="text-4xl font-bold text-center mt-10 mb-10">Checkout</h1>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h2 className="text-2xl font-bold mb-6"> Shipping Address </h2>

              <form onSubmit={place_order} className="space-y-5">
                <input type="text" placeholder="Your Area" onChange={(e) => setArea(e.target.value)}
                  className="w-full border p-3 rounded-lg" required />

                <input type="text" placeholder=" Your City" onChange={(e) => setCity(e.target.value)}
                  className="w-full border p-3 rounded-lg" required />

                <input type="text" placeholder=" Your District" onChange={(e) => setDistrict(e.target.value)}
                  className="w-full border p-3 rounded-lg" required />

                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder=" Your State" onChange={(e) => setState(e.target.value)}
                    className="border p-3 rounded-lg" required />

                  <input type="text" placeholder="Your Country" onChange={(e) => setCountry(e.target.value)}
                    className="border p-3 rounded-lg" required />
                </div>

                <input type="number" placeholder="Pincode" onChange={(e) => setPincode(e.target.value)}
                  className="w-full border p-3 rounded-lg" required/>

                <select value={payment_type} onChange={(e) => setPaymentType(e.target.value)}
                  className="w-full border p-3 rounded-lg" required>

                  <option value=""> Select Payment Method </option>
                  <option value="Online Payment"> Online Payment </option>
                  <option value="Cash On Delivery"> Cash On Delivery </option>
                </select>

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg text-lg">Place Order </button>
              </form>
            </div>

            {/* Summary */}

            <div className="bg-white shadow-xl rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

              {cartinfo.map((val, index) => (
                <div className="border-b pb-5 mb-5">
                  <img src={val.product_img} className="w-full h-50 object-cover rounded-lg" />

                  <h3 className="text-2xl font-bold mt-5">{val.product_name} </h3>

                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Price</span>
                      <span>₹{val.price}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Quantity</span>
                      <span>{val.qty}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Total</span>
                      <span>₹{val.price * val.qty}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between">
                <span>Delivery Charge -</span>
                <span>₹50</span>
              </div>

              <div className="flex justify-between text-2xl  text-green-600 mt-3">
                <span>Grand Total</span>
                <span>₹{subtotal + 50}</span>
              </div>

              <div className="bg-blue-200 mt-5 rounded-lg p-3 text-center text-blue-700 font-semibold">
                🔒 100% Secure Payment
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;
