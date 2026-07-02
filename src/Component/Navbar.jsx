
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          <Link to="/" className="text-2xl font-bold text-orange-400">ShopEase</Link>

          <ul className="hidden md:flex items-center gap-5 font-medium">

            <li>
              <Link to="/" className="hover:text-orange-400">Home</Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-orange-400">About</Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-orange-400">Products</Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-orange-400">Contact Us</Link>
            </li>

            {localStorage.getItem("token") ? (
              <>
                <li>
                  <Link to="/cart" className="px-2 py-1 rounded-lg text-lg hover:text-orange-400">
                    <i className="ri-shopping-cart-2-line"></i>
                  </Link>
                </li>

                <li>
                  <Link to="/profile" className="px-2 py-1 text-lg rounded-lg hover:text-orange-400" >
                    <i className="ri-user-3-line"></i>
                  </Link>
                </li>


              </>
            ) : (
              <>
                <li>
                  <Link to="/signin" className="bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-700">
                    Sign In
                  </Link>
                </li>

                <li>
                  <Link to="/login" className="bg-orange-500 px-3 py-1 rounded-lg hover:bg-orange-700">Login</Link>
                </li>
              </>
            )}
          </ul>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className={`${isOpen ? "ri-close-line" : "ri-menu-line"} text-3xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col  gap-4 py-4 border-t border-gray-700 bg-slate-700">

            <li>
              <Link to="/" onClick={() => setIsOpen(false)}
                className="hover:text-orange-400">Home</Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}
                className="hover:text-orange-400">About</Link>
            </li>

            <li>
              <Link to="/products" onClick={() => setIsOpen(false)}
                className="hover:text-orange-400"> Products</Link>
            </li>


            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}
                className="hover:text-orange-400"> Contact Us</Link>
            </li>

            {localStorage.getItem("token") ? (
              <>
                <li>
                  <Link to="/cart" onClick={() => setIsOpen(false)}
                    className=" px-4 py-2 rounded-lg hover:bg-blue-700" >
                    <i className="ri-shopping-cart-2-line mr-2"></i>

                  </Link>
                </li>

                <li>
                  <Link to="/profile" onClick={() => setIsOpen(false)}
                    className=" px-4 py-2 rounded-lg hover:bg-green-700" >
                    <i className="ri-user-3-line mr-2"></i>

                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin" onClick={() => setIsOpen(false)}
                    className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700" >
                    <i className="ri-user-add-line mr-2"></i> Sign In</Link>
                </li>

                <li>
                  <Link to="/login" onClick={() => setIsOpen(false)}
                    className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-700">
                    <i className="ri-login-box-line mr-2"></i>Login</Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
