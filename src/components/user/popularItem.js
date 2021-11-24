import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchProducts } from './../redux'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function PopularItem() {

  const dispatch = useDispatch()
  const productData = useSelector(state => state.product.Products)

  useEffect(() => {

      console.log(productData, '1');

      dispatch(fetchProducts())
      // fetchProducts() 
      console.log(productData, '2');
      

  }, [])

  console.log(productData, '3');
  return productData?.loading ? (
        
    <h1>Loading......</h1>
    
) : productData?.error ? (
    <h2> {productData?.error}, 'error' </h2>
    

) : (
  

  productData?.map(product => 


       
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
              <div className="card-product__img">
                <img className="card-img" src="aromaStyle/img/product/product1.png" alt=""></img>
                <ul className="card-product__imgOverlay">
                  <li><button><i className="ti-search"></i></button></li>
                  <li><button><i className="ti-shopping-cart"></i></button></li>
                  <li><button><i className="ti-heart"></i></button></li>
                </ul>
              </div>
              <div className="card-body">
                <p>Accessories</p>
                <Link to={'/single-product-detail/'+product.id}><h4 className="card-product__title">{product.id}{product.name}</h4></Link>
                <p className="card-product__price">${product.price}.00</p>
              </div>
            </div>
          </div>
        
)

  
)

}