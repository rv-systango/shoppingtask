import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { requestProducts, setProducts } from "../slices/productSlice";
import dataJSON from "../../public/data.json";


export function* requestProductsFromServer(){
    const data = yield dataJSON.data;
    yield put(setProducts(data));
}

export function* sagaProductsWatcher(){
    yield takeEvery(requestProducts.type, requestProductsFromServer);
}