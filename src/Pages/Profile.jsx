import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import EditProfileModal from "../Component/EditProfileModal";
import {User, ShoppingBag, Heart,  ShoppingCart,  Lock, LogOut, Edit, Mail, Phone, MapPin, ChevronRight, Award, Clock, TrendingUp,} from "lucide-react";

function Profile() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "https://i.ibb.co/7t5D9zm4/pass.jpg",
  });
  const [loading, setLoading] = useState(true);
   

  useEffect(() => {
    const obj = {
      token: localStorage.getItem("token"),
    };

    axios .post("https://a2zithub.org/dairy/abi/user_profile", obj).then((res) => {
        let data = res.data.data;
        if (Array.isArray(data)) {
          data = data[0];
        }

        setUser({
          name: data.user_name || "",
          email: data.user_email || "",
          phone: data.user_mobile || "",
          address: data.user_address || "Not Available",
          image:
            data.user_image && data.user_image !== ""
              ? data.user_image
              : "https://i.ibb.co/7t5D9zm4/pass.jpg",
        });

        setLoading(false);
      })
  }, []);

  const logout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen bg-gray-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-600 font-medium">Loading Profile...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-sm text-gray-500 mb-4">
            <Link to={"/"}><span className="hover:text-blue-600 cursor-pointer">Home</span></Link>
            <ChevronRight className="inline w-4 h-4 mx-1" />
            <span className="text-gray-700 font-medium">My Profile</span>
          </div>

          <div className="grid lg:grid-cols-4 gap-7">
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-27">
                <div className="bg-gradient-to-r from-blue-200 to-blue-300 p-6 text-center">
                  <div className="relative inline-block">
                    <img  src={user.image}
                      alt={user.name} className="w-30 h-30 rounded-full border-4 border-white shadow-lg mx-auto object-cover" />
                    <button onClick={() => setShowModal(true)}
                      className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 transition-colors"
                    > <Edit className="w-5 h-5 text-blue-600" />
                    </button>
                  </div>
                  <h2 className="text-xl font-bold text-white mt-3">
                    {user.name}
                  </h2>
                  <p className="text-blue-100 text-sm">{user.email}</p>
                  <span className="inline-block mt-3 bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-xs font-medium border border-white/30">
                    <Award className="inline w-3.5 h-3.5 mr-1" />
                    Premium Member
                  </span>
                </div>

                <div className="p-3 space-y-1">
                  <Link to="/order_list" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-all group" >
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                      <span className="font-medium text-gray-700 group-hover:text-blue-600">My Orders</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>

                  <Link  to="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-pink-50 transition-all group">
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-gray-600 group-hover:text-pink-600" />
                      <span className="font-medium text-gray-700 group-hover:text-pink-600">Wishlist</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>

                  <Link to="/cart" className="flex items-center justify-between p-3 rounded-lg hover:bg-green-50 transition-all group" >
                    <div className="flex items-center gap-3">
                      <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                      <span className="font-medium text-gray-700 group-hover:text-green-600">My Cart</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>

                  <Link to="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-yellow-50 transition-all group" >
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-gray-600 group-hover:text-yellow-600" />
                      <span className="font-medium text-gray-700 group-hover:text-yellow-600">Change Password</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>

                  <div className="border-t my-3"></div>

                  <button onClick={logout}
                    className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-3 rounded-lg transition-all"> <LogOut className="w-5 h-5" /> Logout </button>
                </div>
              </div>
            </div>

    
            <div className="lg:col-span-3 space-y-6">
           
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" /> Personal Information </h3>
                  <button  onClick={() => setShowModal(true)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"><Edit className="w-4 h-4" /> Edit</button>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                 
                    <div>
                      <label className="text-sm font-medium text-gray-600">Full Name</label>
                      <div className="mt-1.5 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
                        <User className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{user.name}</span>
                      </div>
                    </div>

                   
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email Address</label>
                      <div className="mt-1.5 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-800">{user.email}</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-600">Mobile Number</label>
                      <div className="mt-1.5 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-800">{user.phone}</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-600">Address</label>
                      <div className="mt-1.5 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-800">{user.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 border-b bg-gray-50">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" /> Recent Activity </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                   <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <ShoppingBag className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-800">Order #12345</p>
                          <p className="text-sm text-gray-500">Delivered on July 01, 2026</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full"> Completed </span>
                    </div> 
                
                    <Link to="/products">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-800">Product Review</p>
                          <p className="text-sm text-gray-500">You reviewed "Wireless Headphones"</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal show={showModal} setShow={setShowModal} user={user} setUser={setUser} />

      <Footer />
    </>
  );
}

export default Profile;