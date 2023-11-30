import "./App.css";
import Navigation from "./customer/components/Navigation";
import Product from "./customer/components/Product/Product";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Navigation />
      {/* <Home/> */}
      <Product />
    </>
  );
}

export default App;
