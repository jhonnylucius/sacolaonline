// src/App.js
import React from 'react';
import User from './components/User'; // importando component
import Product from './components/Product'; // importando component
import Order from './components/Order'; // importando component

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
