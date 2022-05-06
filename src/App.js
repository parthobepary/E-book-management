import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Addproduct from "./components/Addproduct/Addproduct";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageProducts from "./components/ManageProducts/ManageProducts";
import Products from "./components/Products/Products";
import Ragister from "./components/Ragister/Ragister";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="d-flex">
        <div className="bg-header header-w p-5">
          <Header />
        </div>
        <div className="bg-dark text-white body-w p-5">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/addproducts" element={<Addproduct />}></Route>
            <Route path="/manageproducts" element={<ManageProducts />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/ragister" element={<Ragister />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;