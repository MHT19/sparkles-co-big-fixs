import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useState,useEffect} from "react";
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from './Components/CategoryPage';
import ProductPage from './Components/ProductPage';
import CheckoutPage from './Components/CheckoutPage';
import Cart from './Components/Cart'
import img1 from './Components/CartDummyImg.jpg';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ScrollToTop from './Components/ScrollToTop';


// export default App;
function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    //MAKE IT ASYNC AND LOAD YOUR DATA HERE//

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Logo" className="logo" />
        <div className="spinner"></div>
      </div>
    );
  }

  const categoryData = {
    "Exterior Care": ['New Releases', 'Bundles', 'Shampoes', 'Accessories'],
    "Interior Care": ['New Releases', 'Interior Cleaner', 'Microfiber','Accessories'],
    "Accessories":  ['Bundles','Towels','Clothes','PAD','Mits & Sponges'],
    "Lubricants": ['Bike Engine','Car Engine','Gear Oil','Break Oil','Radiator Coolent','Battery Water'],
    "Filters":  ['Air Filter','Oil Filter','AC Filter']
  };


  const dummyProduct = {
    name: 'Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)',
    quantity: 1,
    priceBefore: 13.99,
    priceAfter: 9.99,
    image: img1,
  }
  const dummyProduct2 = {
    name: 'Leather Cleaner Car Cleaning Wipes for Leather, Vinyl, and Faux Leather (50 Wipes)',
    quantity: 1,
    priceBefore: 13.99,
    priceAfter: 9.99,
    image: img1,
  }
  
  return (
    <Router>
    <div className="App">
      <div id="promotion" className="promotional-bar">
        <div className="promotional-content">
          <p>Get 10% off on all products. Use code: PROMO10</p>
        </div>
      </div>
       <ScrollToTop/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryPage categoryData={categoryData} />} />
        <Route path="/products/:productName" element={<ProductPage/>} />
        <Route path="/CartPage" element={<Cart products={[dummyProduct, dummyProduct2]}/>} />
        <Route path="/CheckoutPage" element={<CheckoutPage/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>  
    </div>
    </Router>
  );
}
export default App;
