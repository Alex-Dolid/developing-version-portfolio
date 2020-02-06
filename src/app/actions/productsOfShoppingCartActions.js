import dispatcher from "../dispatcher";
import {ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, CHANGE_PRODUCT_QUANTITY, FETCH_PRODUCTS_START, DELETE_ALL_PRODUCTS} from "../constants/productsOfShoppingCartConstants";

export function addProduct({id, title, price, img, quantity, shipping, color, size}) {
    const product = {id, title, price, img, quantity, shipping, color, size};

    dispatcher.dispatch({
        type: ADD_PRODUCT,
        payload: product
    });
}

export function deleteProduct(product_ID) {
    dispatcher.dispatch({
        type: DELETE_PRODUCT,
        payload: product_ID
    });
}


export function getProducts() {
    dispatcher.dispatch({
        type: GET_PRODUCTS
    });
}

export function changeProductQuantity(product_ID, quantity) {
    let priceObj = {product_ID, quantity};

    dispatcher.dispatch({
        type: CHANGE_PRODUCT_QUANTITY,
        payload: priceObj
    });
}

export function fetchProducts() {
    dispatcher.dispatch({
        type: FETCH_PRODUCTS_START
    });
}

export function deleteAllProducts() {
    dispatcher.dispatch({
        type: DELETE_ALL_PRODUCTS,
    });
}

