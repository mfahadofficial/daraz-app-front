import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, useNavigate , Routes } from 'react-router-dom';

import Header from './components/common/user/header';
import Footer from './components/common/user/footer';
import Index from './components/user';
import Shop from './components/user/shop';
import Cart from './components/user/cart';
import Checkout from './components/user/checkout';
import Login from './components/common/login';
import Register from './components/common/register';
import TrackingOrder from './components/user/tracking-order';
import Category from './components/user/category';
import SingleProductDetail from './components/user/single-product-detail';



function setToken(userToken) {
  // console.log(userToken);
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  
  const tokenString = sessionStorage.getItem('token');
  // console.log(tokenString);
  const userToken = JSON.parse(tokenString);
  return userToken
}






function App() {


  const token = getToken();
  // let navigate = useNavigate();
  console.log(token);

  if(!token) {
    // console.log('22', token);
    return <Login setToken={setToken} />
  }

  // else {
  //   navigate('/cart');
  // }




  return (
    <div className="App">
      <Header/>
     <Router >
        <Routes>
        
          <Route exact path="/" element={<Index/>} />
        
          <Route exact path="login" element={<Login/>} />
          <Route exact path="register" element={<Register/>} />
          <Route exact path="single-product-detail" element={<SingleProductDetail/>} />
          <Route exact path="shop" element={<Shop/>} />
          <Route exact path="cart" element={<Cart/>} />
          <Route exact path="checkout" element={<Checkout/>} />
          <Route exact path="tracking-order" element={<TrackingOrder/>} />
          <Route exact path="category" element={<Category/>} />

        </Routes>
      </Router>


      {/* <Index/> */}
      <Footer/>

    </div>
  );
}

export default App;
