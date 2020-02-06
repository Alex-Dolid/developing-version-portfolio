import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Breadcrumbs from "../components/Breadcrumbs";
import ShoppingCartList from "../components/ShoppingCartList";
import FormShippingAddress from "../components/FormShippingAddress";
import FormCouponDiscount from "../components/FormCouponDiscount";
import BlockTotalPayment from "../components/BlockTotalPaymentShoppingCart";

import ProductsOfShoppingCartStore from '../stores/productsOfShoppingCartStore'
import {getProducts, deleteAllProducts} from "../actions/productsOfShoppingCartActions";
import {Link} from "react-router-dom";
import $ from "jquery";

export default class ShoppingCart extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            productsOfShoppingCart: [],
            statusBadgeShoppingCart: null,
            totalPrice: 0
        };

        this.onProductOfShoppingCartChange = this.onProductOfShoppingCartChange.bind(this);
        this.clearShoppingCart = this.clearShoppingCart.bind(this);

    }

    onProductOfShoppingCartChange([productsOfShoppingCart, statusBadgeShoppingCart, totalPrice]) {
        this.setState({
            productsOfShoppingCart,
            statusBadgeShoppingCart,
            totalPrice
        });
    }

    clearShoppingCart(event) {
        event.preventDefault();
        deleteAllProducts();
    }

    componentWillMount() {
        ProductsOfShoppingCartStore.on('change', this.onProductOfShoppingCartChange);
    }

    componentDidMount() {
        getProducts();
        $(".button_animate-shopping-cart").hover(
            function () {
                $(this).toggleClass("animated pulse ");
            }
        );

        $(".button_continue-shopping").click(
            function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        );

    }

    componentWillUnmount() {
        ProductsOfShoppingCartStore.removeListener('change', this.onProductOfShoppingCartChange);
    }

    render() {
        let shoppingCartProducts = this.state.productsOfShoppingCart.map((item, index) => (
            <CSSTransition
                key={index}
                classNames="shoppingCart"
                timeout={{enter: 300, exit: 500}}
            >
                <ShoppingCartList
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    color={item.color}
                    size={item.size}
                    price={item.price}
                    quantity={item.quantity}
                    shipping={item.shipping}
                    subtotal={"$" + item.subtotal}
                    key={index}
                />
            </CSSTransition>
        ));
        return (
            <>
                <Breadcrumbs location={this.props.location}/>
                <section className="shopping-cart">
                    <div className="shopping-cart-header">
                        <div className="container shopping-cart-header_wrapper pt-3 pb-3">
                            <div className="row">
                                <div className="col-12 col-sm-5 col-xl-5">
                                    <h6 className="shopping-cart-header__th shopping-cart-header__th_first">Product
                                        Details</h6>
                                </div>
                                <div className="col-6 col-sm-7 col-xl-7 d-flex justify-content-between">
                                    <h6 className="shopping-cart-header__th">unite Price</h6>
                                    <h6 className="shopping-cart-header__th">Quantity</h6>
                                    <h6 className="shopping-cart-header__th">shipping</h6>
                                    <h6 className="shopping-cart-header__th">Subtotal</h6>
                                    <h6 className="shopping-cart-header__th">ACTION</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {shoppingCartProducts.length !== 0 ? (
                            <TransitionGroup>
                                {shoppingCartProducts}
                            </TransitionGroup>
                        ) :
                        (<h5 className="p-5 text-center warning-empty">Your bag is currently empty:(</h5>)}
                    <div className="shopping-cart-buttons">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-xl-3">
                                    <a href="/" className="button button_animate button_animate-shopping-cart"
                                       onClick={this.clearShoppingCart}>Clean
                                        SHOPPING CART</a>
                                </div>
                                <div className="col-sm-7 col-md-5 col-lg-4 col-xl-3 ml-auto">
                                    <Link to="/man"
                                          className="button button_continue-shopping button_animate button_animate-shopping-cart">cONTINUE
                                        sHOPPING</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shopping-cart-payment">
                        <div className="container">
                            <div className="row d-flex flex-wrap">
                                <div className="col-md-6 col-lg-4 col-xl-4">
                                    <FormShippingAddress/>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-4">
                                    <FormCouponDiscount/>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4">
                                    <BlockTotalPayment price={this.state.totalPrice}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </>
        );
    }
}