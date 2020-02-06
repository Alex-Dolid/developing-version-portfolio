import React from "react";

import {deleteProduct} from "../actions/productsOfShoppingCartActions";
import $ from "jquery";

export default class ShoppingCartMiniList extends React.Component {
    deleteProductOfShoppingCart(event) {
        const this_productID = +$(event.target).parents(".shopping-cart-mini")[0].id;
        deleteProduct(this_productID)
    }
    render() {
        return (
            <>
                <div className="shopping-cart-mini" id={this.props.id}>
                    <div className="container">
                        <div className="row d-flex align-items-center ">
                            <div className="col-10 col-xl-10">
                                <div className="d-flex justify-content-start">
                                    <picture>
                                        <source srcSet={this.props.img} type="image/webp"  className="product__img product__img_shopping-cart"/>
                                        <img src={this.props.img} alt="product-item" className="product__img product__img_shopping-cart"/>
                                    </picture>
                                    <div className="product-details d-flex flex-column justify-content-around">
                                        <p className="product__title product-details__title_shopping-cart-mini">{this.props.title}</p>
                                        <p className="product-details__popular d-flex">
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                        </p>
                                        <p className="product-details__total">
                                            <span
                                                className="product-details__total_span product-details__total_span-quantity">{this.props.quantity}</span>
                                            <span
                                                className="product-details__total_span product-details__total_span-multiplier">x</span>
                                            <span
                                                className="product-details__total_span product-details__total_span-price">{this.props.price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 col-xl-2 d-flex justify-content-between align-items-center">
                                <i className="fa fa-times-circle shopping-cart-product__details shopping-cart-product__details_action" onClick={this.deleteProductOfShoppingCart}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown-divider shopping-cart-mini-dropdown-divider"/>
            </>
        );
    }
}