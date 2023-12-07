import "./App.css";
import Navigation from "./customer/components/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import Home from "./pages/Home";
import Footer from "./customer/components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' index element={<Home />}/>
        <Route path='/cart' element={ <Cart />}/>
        <Route path='/:l1/:l2/:l3' element={<Product />}/>
        <Route path='/productDetails' element={ <ProductDetails />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/orderDetails' element={<OrderDetails />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
