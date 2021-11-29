import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, useNavigate , Routes,   } from 'react-router-dom';
import { getToken } from '../../common/authCheck';


import { createProduct } from '../../redux';
import { fetchCategories } from '../../redux';


export default function AddProduct() {


	const tokenObj = getToken();
	const curUrl = window.location.pathname
	const userType = tokenObj.userType;
	const token = tokenObj.userToken;
	console.log(userType);


    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [detail, setDetail] = useState('');
    const [category_id, setCategory_id] = useState('1');
    const [User_id, setUser_id] = useState('12');
    const [image, setImage] = useState('');

	let navigate = useNavigate();

    const categorytData = useSelector(state => state.category.Categories)

	useEffect(() => {

		if(userType !== 2 &&  curUrl == '/addProduct' ) {
			console.log(curUrl);
			navigate('/');
		  }
    
		dispatch(fetchCategories())
	  
	}, [])
	console.log(categorytData, '3');
    const addProduct = () => {
        dispatch(createProduct(name, price,detail,category_id,User_id,image))
    }

    return (
        <React.Fragment>

<section  className="login_box_area section-margin">
		<div  className="container">
			<div  className="row">
				<div  className="col-lg-6">
					<div  className="login_box_img">
						<div  className="hover">
							<h4>Add Product</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<a  className="button button-account" href="login.html">Check Products</a>
						</div>
					</div>
				</div>
				<div  className="col-lg-6">
					<div  className="login_form_inner register_form_inner">
						<h3>Add Product</h3>
						<div  className="row login_form"  >
							<div  className="col-md-12 form-group">
								<input type="text"  className="form-control" id="name" name="name" placeholder="ProductName" onChange={(e) => setName(e.target.value)}/>
							</div>
							<div  className="col-md-12 form-group">
								<input type="number"  className="form-control" id="price" name="price" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
                            </div>
                            <div  className="col-md-12 form-group">
                                <input type="text"  className="form-control" id="detail" name="detail" placeholder="Detail" onChange={(e) => setDetail(e.target.value)}/>
                            </div>

							<div  className="col-md-12 form-group selectDiv">
                            <select   className="col-md-6 form-group selectShow" >
                            <option value="N/A">Category</option>
                            {categorytData?.map((category) => (
                                <option value="{category.id}">{category.categoryType}</option>
                            ))}

                            </select >
							</div>

                            <div  className="col-md-12 form-group">
								<input type="file"  className="form-control" id="image" name="image" placeholder="Image" onChange={(e) => setImage(e.target.value)}/>
							</div>

							<div  className="col-md-12 form-group">
								<button  onClick={addProduct}   className="button button-register w-100">Add Product</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

        </React.Fragment>
)
}