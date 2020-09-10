import React, { useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import Footer from './screens/Footer';
import Aos from "aos";
import "aos/dist/aos.css";
import {Link as LINK} from 'react-scroll';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {animateScroll as scroll} from 'react-scroll';
toast.configure();
function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const userRegister = useSelector((state) => state.userRegister)
  const { userInfo } = userSignin || userRegister;

  const openMenu = () => {
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="inline-block";

};
const closeMenu = () =>  {
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="inline-block";
    document.getElementById("close-btn").style.display="none";

}

useEffect(() => {
  Aos.init({duration : 2000});
  return () => {
    //
  }
}, [])

  return (
    <BrowserRouter>
       <div >
        <div className="top-nav-bar">
              <i className="fa fa-bars" id="menu-btn" onClick={openMenu}></i>
              <i className="fa fa-times" id="close-btn" onClick={closeMenu}></i>
              <Link onClick={() => {scroll.scrollToTop()}} to="/"><img src="/images/E-BUY.png" alt="logo" className="logo"></img></Link>
              <div className="menu-bar">
                  <ul>
                      <li> <Link to="/cart"> <i className="fa fa-shopping-basket"></i> </Link> </li>
                      <li>            
             {(userInfo) ? (
              <Link className="dropdown" to="/profile">{userInfo.name} - </Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin ? (
              <div className="dropdown">
                  <a className="ml-1" href="#"> Admin </a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                  </li>
                  <li><Link to="/products">Products</Link></li>
                </ul>
              </div>
            ) : userInfo && <a className="ml-1" href="/"> Regular </a>} 
            </li>
                  </ul>
              </div>
          </div>


          <div>
            <section data-aos="flip-up" className="header">
                    <div className="side-menu" id="side-menu">
                        <ul>
                            <li><LINK to="OnSale" smooth={true} duration={1000}>On Sale</LINK> <i className="fa fa-angle-right"></i>
                                <ul>
                                    <li>sub-txt</li>
                                    <li>sub-txt</li>
                                    <li>sub-txt</li>
                                    <li>sub-txt</li>
                                    <li>sub-txt</li>
                                </ul>
                            </li>
                            <li><LINK to="Featured" smooth={true} duration={1000}>Featured</LINK> <i className="fa fa-angle-right"></i>
                                <ul>
                                    <li>sub-txt</li>
                                    <li>sub-txt</li>
                                    <li>sub-txt</li>
                                    <li>sub-txt</li>
                                    <li>sub-txt</li>
                                </ul>
                            </li>
                            <li>Mobiles <i className="fa fa-angle-right"></i>
                                <ul>
                                        <li>sub-txt</li>
                                        <li>sub-txt</li>
                                        <li>sub-txt</li>
                                        <li>sub-txt</li>
                                        <li>sub-txt</li>
                                </ul>
                            </li>
                            <li>Computers <i className="fa fa-angle-right"></i>
                                <ul>
                                        <li>sub-txt</li>
                                        <li>sub-txt</li>
                                        <li>sub-txt</li>
                                        <li>sub-txt</li>
                                        <li>sub-txt</li>
                                </ul>
                            </li>
                            <li>Watches <i className="fa fa-angle-right"></i>
                                <ul>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                </ul>
                            </li>
                            <li>Clothes <i className="fa fa-angle-right"></i>
                                <ul>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                </ul>
                            </li>
                            <li>Tvs <i className="fa fa-angle-right"></i>
                                <ul>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                </ul>
                            </li>
                            <li>Computers <i className="fa fa-angle-right"></i>
                                <ul>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                </ul>
                            </li>
                            <li>Furniture <i className="fa fa-angle-right"></i>
                                <ul>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                </ul>
                            </li>
                            <li>Books <i className="fa fa-angle-right"></i>
                                <ul>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                            <li>sub-txt</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
            </section>
        </div> 

        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
