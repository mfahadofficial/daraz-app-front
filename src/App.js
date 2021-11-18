import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/common/user/header';
import Footer from './components/common/user/footer';
import Index from './components/user';
import Shop from './components/user/shop';
import Cart from './components/user/cart';
import Checkout from './components/user/checkout';

function App() {
  return (
    <div className="App">
      <Header/>
     <Router>
        <Routes>
          <Route exact path="/" element={<Index/>} />
          <Route exact path="shop" element={<Shop/>} />
          <Route exact path="cart" element={<Cart/>} />
          <Route exact path="checkout" element={<Checkout/>} />

        </Routes>
      </Router>


      {/* <Index/> */}
      <Footer/>

    </div>
  );
}

export default App;
