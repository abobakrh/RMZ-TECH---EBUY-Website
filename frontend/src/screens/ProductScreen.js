import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct, saveProductReview } from '../actions/productActions';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const productReviewSave = useSelector((state) => state.productReviewSave);
  const { success: productSaveSuccess } = productReviewSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productSaveSuccess) {
      alert('Review submitted successfully.');
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
    }
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, [productSaveSuccess,dispatch,props.match.params.id]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch actions
    dispatch(
      saveProductReview(props.match.params.id, {
        name: userInfo.name,
        rating: rating,
        comment: comment,
      })
    );
  };
  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };

  return (
    <div>
    {loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>{error} </div>
    ) : (
    <>
    <section className="single-product">
      <div className="container">
        <div className="row">

          <div className="col-md-5">
            <div className="slider">
                <Carousel className="carousel" id="product-slider">
                <div>
                  <img src={product.image} alt=""></img>
                </div>
                <div>
                  <img src={product.image} alt=""></img>
                </div>
                <div>
                  <img src={product.image} alt=""></img>
                </div>
                </Carousel>
            </div>
          </div>
          <div className="col-md-7">
            <p className="new-arrival text-center">NEW</p>
            <h2>{product.name}</h2>
            <p>Product Code : IRSC2020</p>
            <a href="#reviews"> <Rating value={product.rating} text={product.numReviews + ' reviews'} /> </a>
            <p className="price">USD ${product.price}</p>
            <p><b>Availability : </b>{product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}</p>
            <p><b>Condition : </b>New</p>
            <p><b>Brand : </b>NIKE</p>
            <label>Quantity : </label>
            <select className="ml-3"
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
            </select>
            {product.countInStock > 0 && (
                    <button
                      onClick={handleAddToCart}
                      className="button primary ml-3"
                    >
                      Add to Cart
                    </button>)}
                    <div className="content-margined">
            <h2>Reviews</h2>
            {!product.reviews.length && <div>There is no review</div>}
            <ul className="review" id="reviews">
              {product.reviews.map((review) => (
                <li key={review._id}>
                  <div>{review.name}</div>
                  <div>
                    <Rating value={review.rating}></Rating>
                  </div>
                  <div>{review.createdAt.substring(0, 10)}</div>
                  <div>{review.comment}</div>
                </li>
              ))}
              <li>
                <h3>Write a customer review</h3>
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <ul className="form-container">
                      <li>
                        <label htmlFor="rating">Rating</label>
                        <select
                          name="rating"
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very Good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </li>
                      <li>
                        <button type="submit" className="button primary">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
                ) : (
                  <div>
                    Please <Link to="/signin">Sign-in</Link> to write a review.
                  </div>
                )}
              </li>
            </ul>
          </div>
          </div>
      </div>
      </div>
    </section>
    <section className="product-description">
      <div className="container">
        <h6>Product Description</h6>
        <p>{product.description}</p>
        <hr />
      </div>

      <div className="container">
                    <div className="title-box">
                        <h2>Related Items</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="product-top">
                                <img src="/images/w4.jfif" alt=""></img>
                                <div className="overlay-right">
                                    <button title="Quick Shop" className="btn btn-secondary"><i className="fa fa-eye"></i></button>
                                    <button title="Add To Wishlist" className="btn btn-secondary"><i className="fa fa-heart-o"></i></button>
                                    <button title="Add To Cart" className="btn btn-secondary"><i className="fa fa-shopping-cart"></i></button>
                                </div>
                            </div>
                            <div className="product-bottom text-center">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <h3>Fitness Watch</h3>
                                <h5>$988</h5>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="product-top">
                                <img src="/images/w9.jpg" alt=""></img>
                                <div className="overlay-right">
                                    <button title="Quick Shop" className="btn btn-secondary"><i className="fa fa-eye"></i></button>
                                    <button title="Add To Wishlist" className="btn btn-secondary"><i className="fa fa-heart-o"></i></button>
                                    <button title="Add To Cart" className="btn btn-secondary"><i className="fa fa-shopping-cart"></i></button>
                            </div>
                            </div>
                            <div className="product-bottom text-center">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <h3>Casual Watch</h3>
                                <h5>$754</h5>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="product-top">
                                <img src="/images/w10.jpg" alt=""></img>
                                <div className="overlay-right">
                                    <button title="Quick Shop" className="btn btn-secondary"><i className="fa fa-eye"></i></button>
                                    <button title="Add To Wishlist" className="btn btn-secondary"><i className="fa fa-heart-o"></i></button>
                                    <button title="Add To Cart" className="btn btn-secondary"><i className="fa fa-shopping-cart"></i></button>
                            </div>
                            </div>
                            <div className="product-bottom text-center">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <h3>Luxory Watch</h3>
                                <h5>$450</h5>
                            </div>
                        </div>


                    </div>
                </div>

    </section>
    </>
    )}
    </div>
  );
}
export default ProductScreen;
