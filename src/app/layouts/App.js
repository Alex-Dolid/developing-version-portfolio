import React from "react";
import {configObj as config} from "../data/site";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import $ from 'jquery'

import ProductsOfShoppingCartStore from '../stores/productsOfShoppingCartStore'
import {fetchProducts} from "../actions/productsOfShoppingCartActions";

import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import FooterCopyright from "../components/Footer-copyright";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Kids from "../pages/Kids";
import ShoppingCart from "../pages/ShoppingCart";
import Women from "../pages/Women";
import Man from "../pages/Man";
import Accessories from "../pages/Accessories";
import Featured from "../pages/Featured";
import HotDeals from "../pages/HotDeals";

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            productsOfShoppingCart: [],
            statusBadgeShoppingCart: null,
            totalPrice: 0
        };

        this.onProductOfShoppingCartChange = this.onProductOfShoppingCartChange.bind(this);
        this.topFunction = this.topFunction.bind(this);

    }

    onProductOfShoppingCartChange([productsOfShoppingCart, statusBadgeShoppingCart, totalPrice]) {
        this.setState({
            productsOfShoppingCart,
            statusBadgeShoppingCart,
            totalPrice
        });
    }

    componentWillMount() {
        ProductsOfShoppingCartStore.on('change', this.onProductOfShoppingCartChange);
    }

    componentDidMount() {
        if (document.readyState === 'loading') {
            (function () {
                $("#root").toggleClass("animated zoomIn fast ");
            })()
        }

        $(".logo").hover(
            function () {
                $(this).toggleClass("animated rubberBand ");
            }
        );

        $(".header-search__button-search").click(
            function () {
                $(this).children().toggleClass("animated rotateInDownRight ");
            }
        );

        $(".copyright__social-icons").hover(
            function () {
                $(this).children().toggleClass("animated swing");
            }
        );

        $(".category__item").hover(
            function () {
                $(this).animate({opacity: 0.7},);
            }, function () {
                $(this).animate({opacity: 1},);
            }
        );

        $(".button_animate-header").hover(
            function () {
                $(this).toggleClass("animated pulse ");
            }
        );

        $(".button_animate-modal").hover(
            function () {
                $(this).toggleClass("animated pulse ");
            }
        );

        $(".button_animate-home").hover(
            function () {
                $(this).toggleClass("animated pulse ");
            }
        );

        fetchProducts();

        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 600) {
                document.getElementById("button_anchor").style.display = "block";
            }
            else {
                document.getElementById("button_anchor").style.display = "none";
            }
        }

    }

    componentWillUnmount() {
        ProductsOfShoppingCartStore.removeListener('change', this.onProductOfShoppingCartChange);
    }


    // When the user clicks on the button, scroll to the top of the document
     topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {

        return (
            <Router>
                <Header nav={config.nav}
                        dropdownMenuHeaderSearchInfo={config.dropdownMenuHeaderSearchInfo}
                        productsOfShoppingCart={this.state.productsOfShoppingCart}
                        statusBadgeShoppingCart={this.state.statusBadgeShoppingCart}
                        totalPrice={"$" + this.state.totalPrice}
                />

                <Switch>
                    <Route exact path="/">
                        <Home productsOfShoppingCart={this.state.productsOfShoppingCart}/>
                    </Route>
                    <Route path="/checkout" component={Checkout}/>
                    <Route  path="/man" component={Man}/>
                    <Route  path="/women" component={Women}/>
                    <Route  path="/kids" component={Kids}/>
                    <Route  path="/accessories" component={Accessories}/>
                    <Route path="/shoppingCart" component={ShoppingCart}/>
                    <Route path="/featured" component={Featured}/>
                    <Route path="/hot_deals" component={HotDeals}/>
                    <Redirect path="*" to="/" />
                </Switch>
                <Subscribe quotes={config.quotes}/>
                <Footer footerBlock={config.footer}/>
                <FooterCopyright/>
                <button onClick={this.topFunction} id="button_anchor" className="button_anchor" title="Go to top">
                    <i className="fas fa-arrow-up"/>
                </button>
            </Router>
        );
    }
}