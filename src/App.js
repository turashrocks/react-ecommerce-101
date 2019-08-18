import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from './components/Modal'


function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/product" component={Product} />
          {/* <Route exact path="/flats/:slug" component={SingleFlat} /> */}
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal/>
    </>  
  );
}

export default App;
