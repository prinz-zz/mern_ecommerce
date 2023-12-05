import "./App.css";
import Navigation from "./customer/components/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Navigation />
      {/* <Home/> */}
      {/* <Product /> */}
    {/* <ProductDetails/> */}
    {/* <Cart />  */}
    <Checkout/>
    </>
  );
}

export default App;
