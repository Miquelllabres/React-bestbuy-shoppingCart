import { combineReducers } from 'redux';
import productsReducer from './reduce_products';

const rootReducer = combineReducers({
  products: productsReducer
});

export default rootReducer;
