
import {combineReducers} from 'redux';
import BillReducer from './BillReducer';
const  RootReducers = combineReducers({
    Bill : BillReducer,
});
export default RootReducers; 