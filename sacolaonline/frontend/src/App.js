// src/App.js
import React from 'react';
import Order from './components/OrdersList';
import Product from './components/ProductList';
import User from './components/UserList';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <User />
      <Product />
      <Order />
    </div>
  );
};

export default App;