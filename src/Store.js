const { createStore } = require("redux");
const { default: RootReducers } = require("./Reducers/RootReducers");

const Store = createStore(RootReducers);
export default Store;