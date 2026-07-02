// import { RiFacebookCircleFill, RiInstagramFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { useState } from "react";

function Footer() {

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email === "") {
      alert("Please enter your email");
      return;
    }

    confetti({
      particleCount: 500, spread: 100,
      origin: { y: 0.7 },
    });
    setEmail("");
  };
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 w-full overflow-x-hidden">
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Subscribe to our Newsletter </h2>

              <p className="text-gray-400 mt-2">Get updates about new products and special offers.</p>
            </div>

            <div className="w-full lg:w-auto mt-6 lg:mt-0">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                <input type="email" placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-80 lg:w-96 px-4 py-3 border rounded-lg sm:rounded-r-none outline-none text-black bg-white" />

                <button onClick={handleSubscribe}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg sm:rounded-l-none text-white font-semibold whitespace-nowrap"> Subscribe </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">ShopEase </h2>

            <p className="text-gray-400">Your one-stop destination for shopping. Discover quality products
              at the best prices. </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-white">Products</Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white">About Us</Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Customer Service</h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white">FAQs</Link>
              </li>

              <li>
                <Link to="#" className="hover:text-white">Shipping Policy </Link>
              </li>

              <li>
                <Link to="#" className="hover:text-white"> Return Policy </Link>
              </li>

              <li>
                <Link to="#" className="hover:text-white">  Privacy Policy </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info  </h3>

            <p className="mb-2"> 📍 AhilyaNagr, Maharashtra </p>

            <p className="mb-2"> 📞 +91 8625994180 </p>

            <p> ✉ support@shopease.com</p>

            <div className="flex gap-4 mt-6">
              <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition" >
                <i className="ri-facebook-fill text-xl"></i>
              </Link>

              <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition" >
                <i className="ri-instagram-line text-xl"></i>
              </Link>

              <Link to="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition" >
                <i className="ri-twitter-x-line text-xl"></i>
              </Link>

              <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition" >
                <i className="ri-youtube-fill text-xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center">
          <p className="text-gray-400">© 2026 ShopEase. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
