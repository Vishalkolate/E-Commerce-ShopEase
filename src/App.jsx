import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product_det from "./Pages/Product_det";
import Signin from "./Pages/Signin";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Checkout from "./Pages/Checkout";
import Order_success from "./Pages/Order_success";
import Order_list from "./Pages/Order_list";
import Order_det from "./Pages/Order_det";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} ></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/Product_det/:product_id" element={<Product_det />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/about" element={<About />}></Route> 
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/order_success" element={<Order_success/>}></Route>
        <Route path="/order_list" element={<Order_list/>}></Route>
        <Route path="/order_det/:order_id" element={<Order_det/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;