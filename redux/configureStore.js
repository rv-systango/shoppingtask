import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { sagaProductsWatcher } from "./sagas/productSaga";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

const reducer = { productSlice, cartSlice };
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = configureStore({ reducer, middleware });
sagaMiddleware.run(sagaProductsWatcher);
export default store;
