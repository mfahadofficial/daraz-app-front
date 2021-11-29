import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVendorProducts } from '../../redux';
import { Link } from 'react-router-dom';


export default function MyProducts() {

    const dispatch = useDispatch()
	const vendorProducts = useSelector(state => state.product.Products)


    useEffect(() => {
		console.log(vendorProducts, '1');
		dispatch(fetchVendorProducts()) 
		console.log(vendorProducts, '2');	
  
	}, [])


    console.log(vendorProducts, '2');

    return (
        <React.Fragment>
 <div className="row">
 
 {vendorProducts?.map((product) => (

       <div className="col-md-6 col-lg-4 col-xl-3">
         <div className="card text-center card-product">
           <div className="card-product__img">
             <img className="card-img" src={product.image} alt=""></img>
             <ul className="card-product__imgOverlay">
               <li><button><i className="ti-search"></i></button></li>
               <li><button><i className="ti-shopping-cart"></i></button></li>
               <li><button><i className="ti-heart"></i></button></li>
             </ul>
           </div>
           <div className="card-body">
             <p>Accessories</p>
             <Link to={'/single-product-detail/'+product.id}><h4 className="card-product__title">{product.name}</h4></Link>
             <p className="card-product__price">${product.price}.00</p>
           </div>
         </div>
       </div>

))}
</div>
       

        </React.Fragment>
)
}