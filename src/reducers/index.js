import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // as per diagram from video lecture, our application has a single piece of state called "books" with a value equal to whatever is returned from the imported BooksReducer function
  books: BooksReducer
});

export default rootReducer;
