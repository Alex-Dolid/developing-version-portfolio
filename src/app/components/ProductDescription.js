import React from "react";
import addToCartImg__ShoppingCart from "../img/add-to-cart__shopping-cart.png"
import {configObj as config} from "../data/site";
import {addProduct} from "../actions/productsOfShoppingCartActions";
import $ from "jquery";

export default class ProductDescription extends React.Component {
    newProductOfShoppingCart(event) {
        event.preventDefault();
        let id = +document.querySelector(".product-description").dataset.productId;
        let product = config.products.find((item) => item.id === id);
        let title = product.title;
        let price = product.price;
        let img;
        if(document.documentElement.classList.contains("webp")) {
            img = product.imgWEBP;
        } else {
            img = product.imgPNG;
        }
        let quantity = document.getElementById("dropdown-button-filter-quantity").value;
        let shipping = "FREE";
        let color = document.querySelector(".dropdown-button-filter__block-color_text").innerText;
        let size = document.querySelector(".dropdown-button-filter__block-size_text").innerText;
        addProduct({id, title, price, img, quantity, shipping, color, size})
    }
    render() {
        let product;
        if(this.props.productId) {
            product = config.products.find(item => {
                return item.id === this.props.productId
            });
        }
        return (
            <section className="product-description" data-product-id={product.id}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <div className="product-card d-flex justify-content-center flex-wrap">
                                <div className="product-description-card d-flex justify-content-center flex-wrap">
                                    <div className="container">
                                        <div className="row d-flex justify-content-center">
                                            <div
                                                className="col-4 col-sm-4 col-xl-4 d-flex justify-content-center align-content-start flex-wrap">
                                                <h6 className="product-description-card__header-collection">WOMEN
                                                    COLLECTION</h6>
                                                <div className="product-description-card__rectangle"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row d-flex justify-content-center">
                                            <div
                                                className="col-6 col-sm-6 col-xl-6 d-flex justify-content-center align-content-start flex-wrap">
                                                <h4 className="product-description-card__title-product">{product.title}</h4>
                                                <div className="fa-star-wrapper d-flex">
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                    <i className="fas fa-star"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row d-flex justify-content-center">
                                            <div
                                                className="col-12 col-sm-12 col-xl-12 d-flex justify-content-center flex-wrap">
                                                <p className="product-description-card__text-product text-center">Compellingly
                                                    actualize
                                                    fully researched processes before proactive
                                                    outsourcing.
                                                    Progressively syndicate collaborative architectures before
                                                    cutting-edge services. Completely visualize parallel core
                                                    competencies rather than exceptional portals. </p>
                                                <p className="product-description-card__details-product">MATERIAL: <span
                                                    className="product-description-card__details-product_last-word">COTTON</span>
                                                </p>
                                                <p className="product-description-card__details-product">DESIGNER: <span
                                                    className="product-description-card__details-product_last-word">BINBURHAN
                                </span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-3 col-sm-2 col-xl-2 product-description-card__price-product_wrapper">
                                                <p className="product-description-card__price-product">{product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-filter">
                                    <div className="container">
                                        <div className="row">
                                            <div
                                                className="col-12 col-sm-9 col-md-11 col-xl-11 d-flex justify-content-center justify-content-sm-between flex-wrap m-auto">
                                                <div className="product-filter__dropdown-buttons">
                                                    <p className="product-filter__header-dropdown-buttons">
                                                        CHOOSE COLOR
                                                    </p>
                                                    <button className="dropdown-button-filter d-flex">
                                                        <span
                                                            className="dropdown-button-filter__block-color ml-3 mt-n1"/>
                                                        <span className="dropdown-button-filter__block-color_text ml-3 mt-n1">Black</span>
                                                        <i className="fa fa-chevron-down ml-auto mr-3 mt-n2"/>
                                                    </button>
                                                </div>
                                                <div
                                                    className="product-filter__dropdown-buttons product-filter__dropdown-buttons_second">
                                                    <p className="product-filter__header-dropdown-buttons">
                                                        CHOOSE SIZE
                                                    </p>
                                                    <button className="dropdown-button-filter d-flex">
                                                        <span className="dropdown-button-filter__block-size_text ml-3 mt-n1">XXL</span>
                                                        <i className="fa fa-chevron-down ml-auto mr-3 mt-n2"/>
                                                    </button>
                                                </div>
                                                <div
                                                    className="product-filter__dropdown-buttons product-filter__dropdown-buttons_last">
                                                    <label htmlFor="dropdown-button-filter-quantity"
                                                           className="product-filter__header-dropdown-buttons product-filter__header-dropdown-buttons_label-quantity ">
                                                        QUANTITY
                                                    </label>
                                                    <input type="number" min="0" className="dropdown-button-filter" defaultValue="1"
                                                           id="dropdown-button-filter-quantity"/>
                                                </div>
                                                <button className="button_add-to-cart button_animate-product" onClick={this.newProductOfShoppingCart}><img
                                                    src={addToCartImg__ShoppingCart}
                                                    alt="add-to-cart__shopping-cart"
                                                    className="mr-3 mt-n1" />Add to
                                                    Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}