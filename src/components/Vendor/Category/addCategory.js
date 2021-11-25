import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { createCategory } from '../../redux';


export default function AddCategory() {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const addCategory = () => {
        console.log(name);

        dispatch(createCategory(name))

    }


    return (
        <React.Fragment>

<section  className="login_box_area section-margin">
		<div  className="container">
			<div  className="row">
				<div  className="col-lg-6">
					<div  className="login_box_img">
						<div  className="hover">
							<h4>Add Category</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<a  className="button button-account" href="login.html">Check Products</a>
						</div>
					</div>
				</div>
				<div  className="col-lg-6">
					<div  className="login_form_inner register_form_inner">
						<h3>Add Category</h3>
						<div  className="row login_form"  >
							<div  className="col-md-12 form-group">
								<input type="text"  className="form-control" id="name" name="name" placeholder="Category Name" onChange={(e) => setName(e.target.value)}/>
							</div>

							<div  className="col-md-12 form-group">
								<button  onClick={addCategory}   className="button button-register w-100">Add Category</button>
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