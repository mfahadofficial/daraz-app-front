import React, { useEffect, useState } from 'react';


import PopularItem  from './popularItem'

export default function Index() {



  
  return (
        
        <React.Fragment>


<main className="site-main">
    
  
    <section className="hero-banner">
      <div className="container">
        <div className="row no-gutters align-items-center pt-60px">
          <div className="col-5 d-none d-sm-block">
            <div className="hero-banner__img">
              <img className="img-fluid" src="aromaStyle/img/home/hero-banner.png" alt=""></img>
            </div>
          </div>
          <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
            <div className="hero-banner__content">
              <h4>Shop is fun</h4>
              <h1>Browse Our Premium Product</h1>
              <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
              <a className="button button-hero" href="#">Browse Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-margin mt-0">
      <div className="owl-carousel owl-theme hero-carousel">
        <div className="hero-carousel__slide">
          <img src="aromaStyle/img/home/hero-slide1.png" alt="" className="img-fluid"></img>
          <a href="#" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
        <div className="hero-carousel__slide">
          <img src="aromaStyle/img/home/hero-slide2.png" alt="" className="img-fluid"></img>
          <a href="#" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
        <div className="hero-carousel__slide">
          <img src="aromaStyle/img/home/hero-slide3.png" alt="" className="img-fluid"></img>
          <a href="#" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
      </div>
    </section>
  

   
    <section className="section-margin calc-60px">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Trending <span className="section-intro__style">Product</span></h2>
        </div>
        <div className="row">
        
  
<PopularItem/>
  

</div>
      </div>
    </section>
  


    
  

    <section className="section-margin calc-60px">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Best <span className="section-intro__style">Sellers</span></h2>
        </div>
        <div className="owl-carousel owl-theme" id="bestSellerCarousel">
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="aromaStyle/img/product/product1.png" alt=""></img>
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Accessories</p>
              <h4 className="card-product__title"><a href="single-product.html">Quartz Belt Watch</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="aromaStyle/img/product/product2.png" alt=""></img>
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Beauty</p>
              <h4 className="card-product__title"><a href="single-product.html">Women Freshwash</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="aromaStyle/img/product/product3.png" alt=""></img>
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="aromaStyle/img/product/product4.png" alt=""></img>
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="aromaStyle/img/product/product1.png" alt=""></img>
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Accessories</p>
              <h4 className="card-product__title"><a href="single-product.html">Quartz Belt Watch</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="aromaStyle/img/product/product2.png" alt=""></img>
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Beauty</p>
              <h4 className="card-product__title"><a href="single-product.html">Women Freshwash</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="aromaStyle/img/product/product3.png" alt=""></img>
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>

          <div className="card text-center card-product">
            <div className="card-product__img">
              <img className="img-fluid" src="aromaStyle/img/product/product4.png" alt=""></img>
              <ul className="card-product__imgOverlay">
                <li><button><i className="ti-search"></i></button></li>
                <li><button><i className="ti-shopping-cart"></i></button></li>
                <li><button><i className="ti-heart"></i></button></li>
              </ul>
            </div>
            <div className="card-body">
              <p>Decor</p>
              <h4 className="card-product__title"><a href="single-product.html">Room Flash Light</a></h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>




    

    

  </main>



            </React.Fragment>
    )
}