import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import ProductList from '../containers/productList';

export default class App extends Component {
  render() {
    return (
      <div>
      <SearchBar />
    <ProductList />
     
      </div>
    );
  }
}