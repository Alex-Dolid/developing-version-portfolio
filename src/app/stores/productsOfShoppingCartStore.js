import {EventEmitter} from 'events';
import {
    ADD_PRODUCT,
    FETCH_PRODUCTS_START,
    DELETE_ALL_PRODUCTS,
    DELETE_PRODUCT,
    GET_PRODUCTS,
    CHANGE_PRODUCT_QUANTITY
} from "../constants/productsOfShoppingCartConstants";
import dispatcher from "../dispatcher";

class ProductsOfShoppingCartStore extends EventEmitter {
    constructor() {
        super(...arguments);
        this.products = [];
        this.statusBadgeShoppingCart = null;
        this.totalPrice = 0;

        this.change = this.change.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.changeProductQuantity = this.changeProductQuantity.bind(this);
        this.handleActions = this.handleActions.bind(this);
        this.fetchProductsStart = this.fetchProductsStart.bind(this);
        this.fetchProductsEnd = this.fetchProductsEnd.bind(this);
        this.changeLocalStorage = this.changeLocalStorage.bind(this);
        this.deleteAllProducts = this.deleteAllProducts.bind(this);
    }

    fetchProductsStart() {
        let productsOfShoppingCartWithLocalStorage = localStorage.getItem('productsOfShoppingCart') ? JSON.parse(localStorage.getItem('productsOfShoppingCart')) : [];

        this.fetchProductsEnd(productsOfShoppingCartWithLocalStorage);
    }

    fetchProductsEnd(products) {
        this.products = products;
        this.calculateTotalPrice();
        this.change();
    }

    changeLocalStorage() {
        localStorage.setItem('productsOfShoppingCart', JSON.stringify(this.products));

    }

    change() {
        if (this.products.length !== 0) {
            this.statusBadgeShoppingCart = "active";
        } else {
            this.statusBadgeShoppingCart = null;
        }
        this.emit('change', [this.products, this.statusBadgeShoppingCart, this.totalPrice]);
    }

    getProducts() {
        this.change();
    }

    addProduct(product) {
        let findProduct = this.products.find(item => item.img === product.img);
        if (findProduct) {
            this.products.forEach(item => {
                if (item.id === findProduct.id) item.quantity = product.quantity;
            })
        } else {
            this.products.push(product);
        }

        if (this.products.length === 0) this.products.push(product);

        this.products.forEach(item => {
            let price = +item.price.slice(1);
            item.subtotal = price * item.quantity;
        });

        this.calculateTotalPrice();

        this.changeLocalStorage();
        this.change();

    }

    calculateTotalPrice() {
        let sumItemSubtotal = 0;
        this.products.forEach((item) => {
            sumItemSubtotal += item.subtotal;
        });

        this.totalPrice = sumItemSubtotal;
    }

    deleteProduct(product_ID) {
        let index;
        this.products.forEach((item) => {
            if (product_ID === item.id) {
                this.totalPrice -= item.subtotal;
                index = this.products.indexOf(item);
                this.products.splice(index, 1);
            }
        });

        this.changeLocalStorage();
        this.change();
    }

    changeProductQuantity(priceObj) {
        this.products.forEach((item) => {
            if (priceObj.product_ID === item.id) {
                item.quantity = +priceObj.quantity;
                let price = +item.price.slice(1);
                item.subtotal = price * item.quantity;
            }
        });

        this.calculateTotalPrice();
        this.changeLocalStorage();
        this.change();
    }

    deleteAllProducts() {
        this.products = [];
        this.totalPrice = 0;
        this.changeLocalStorage();
        this.change();
    }

    handleActions(action) {
        switch (action.type) {
            case ADD_PRODUCT: {
                this.addProduct(action.payload);
                break;
            }

            case DELETE_PRODUCT: {
                this.deleteProduct(action.payload);
                break;
            }

            case GET_PRODUCTS: {
                this.getProducts();
                break;
            }

            case CHANGE_PRODUCT_QUANTITY: {
                this.changeProductQuantity(action.payload);
                break;
            }

            case FETCH_PRODUCTS_START: {
                this.fetchProductsStart();
                break;
            }

            case DELETE_ALL_PRODUCTS: {
                this.deleteAllProducts();
                break;
            }
            default:
                break;

        }
    }
}

const pS = new ProductsOfShoppingCartStore();
dispatcher.register(pS.handleActions);

export default pS;