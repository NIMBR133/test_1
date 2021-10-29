import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import data from './reducers/data';

const store = createStore(combineReducers({
    data
}), applyMiddleware(thunk))

export default store