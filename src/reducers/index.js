import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

//reducer adds a key to global application state called books. 

export default rootReducer;
