import React, { useEffect, useState } from 'react';


export default function TrackingOrder() {

    return (
        <React.Fragment>

<section  className="blog-banner-area" id="category">
		<div  className="container h-100">
			<div  className="blog-banner">
				<div  className="text-center">
					<h1>Order Tracking</h1>
					<nav aria-label="breadcrumb"  className="banner-breadcrumb">
            <ol  className="breadcrumb">
              <li  className="breadcrumb-item"><a href="#">Home</a></li>
              <li  className="breadcrumb-item active" aria-current="page">Order Tracking</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>

    <section  className="tracking_box_area section-margin--small">
      <div  className="container">
          <div  className="tracking_box_inner">
              <p>To track your order please enter your Order ID in the box below and press the "Track" button. This
                  was given to you on your receipt and in the confirmation email you should have received.</p>
              <form  className="row tracking_form" action="#" method="post" noValidate="novalidate">
                  <div  className="col-md-12 form-group">
                      <input type="text"  className="form-control" id="order" name="order" placeholder="Order ID" />
                  </div>
                  <div  className="col-md-12 form-group">
                      <input type="email"  className="form-control" id="email" name="email" placeholder="Billing Email Address" />
                  </div>
                  <div  className="col-md-12 form-group">
                      <button type="submit" value="submit"  className="button button-tracking">Track Order</button>
                  </div>
              </form>
          </div>
      </div>
  </section>

       

        </React.Fragment>
)
}