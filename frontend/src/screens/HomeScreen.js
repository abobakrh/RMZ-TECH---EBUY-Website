import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';
import Featured from './Featured';
import OnSale from './OnSale';
import Features from './Features';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Aos from "aos";
import "aos/dist/aos.css";
import Testmonials from './Testmonials';
import Loading from '../components/Loading';

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({duration : 2000});
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category,dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const handleAddToCart = (id) => {
    props.history.push('/cart/' + id + '?qty=' + 1);
  };

  return (
    <>
        <div data-aos="slide-left" className="slider">
        <div>
            <Carousel className="carousel" infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="/images/s.jpg" alt="" />
                </div>
                <div>
                    <img src="/images/z.jpg"  alt=""/>
                </div>
                <div>
                    <img src="/images/a.jpg" alt="" />
                </div>
            </Carousel>
        </div>
        </div>


    <Featured />
    <OnSale />
    <Features />
    <Testmonials />
      {category && <h2>{category}</h2>}


      {loading ? (
        <Loading />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <section className="section-bg">
            <div className="container">  
            <div className="title-box">
                    <h2>New Arrivals</h2>
            </div>
            <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <div className="search-box">
              <input className="search-txt" name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)}  type="text" name="" placeholder="Type Search Word"></input>
              <a className="search-btn" href="/" type="submit"> <i className="fa fa-search"></i> </a>
            </div>
          </form>
        </li>
        <li>
          <div className="sort-box">
            <h3>Sort By{' '}</h3>
            <select  name="sortOrder" onChange={sortHandler}>
              <option value="">Newest</option>
              <option value="lowest">Highest</option>
              <option value="highest">Lowest</option>
            </select>
          </div>

        </li>
      </ul> 
            <div className="row">
            {products.map((product) => (
               <div data-aos="flip-up" key={product._id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products">
                       <div className="product-thumb product-top">
                       <Link to={'/product/' + product._id}>
                          <img className="product-image" src={product.image} alt="product" />
                       </Link>
                       <div className="overlay-right">
                                <button title="Quick Shop" className="btn btn-secondary"><i className="fa fa-eye"></i></button>
                                <button title="Add To Wishlist" className="btn btn-secondary"><i className="fa fa-heart-o"></i></button>
                                <button title="Add To Cart" className="btn btn-secondary" onClick={() => handleAddToCart(product._id)}><i className="fa fa-shopping-cart"></i></button>
                       </div>
                       </div>
                       <div className="product-title">
                           <h3><Link to={'/product/' + product._id}>{product.name} - {product.brand}</Link></h3>
                       </div>
                       <div className="product-btns">
                          <a href="/" className="btn-small mr-2">${product.price}</a>
                          <Rating value={product.rating} text={product.numReviews + ' reviews'} />
                       </div>
                  </div>
               </div>  ))} 
            </div>
        </div>
    </section>
    

      )}
    </>
  );
}
export default HomeScreen;
