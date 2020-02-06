import React from "react";
import $ from "jquery";
import {deleteProduct, changeProductQuantity} from "../actions/productsOfShoppingCartActions";

export default class ShoppingCartList extends React.Component {
    deleteProductOfShoppingCart(event) {
        const this_productID = +$(event.target).parents(".shopping-cart-product")[0].id;
        deleteProduct(this_productID)
    }

    changePrice(event) {
        const this_productID = +$(event.target).parents(".shopping-cart-product")[0].id;
        let value = $(event.target).val();
        changeProductQuantity(this_productID, value);
    }

    render() {
        return (
            <div className="shopping-cart-product" id={this.props.id}>
                <div className="container shopping-cart-product_wrapper">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-5 col-xl-5">
                            <div className="d-flex w-75">
                                <img src={this.props.img} alt="product-item"
                                     className="product__img product__img_shopping-cart"/>
                                <div className="product-details">
                                    <p className="product__title product-details__title">{this.props.title}</p>
                                    <p className="product-details__color">Color:<span
                                        className="product-details__color_span">{this.props.color}</span></p>
                                    <p className="product-details__size">Size:
                                        <span className="product-details__size_span">{this.props.size}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-7 col-xl-7 d-flex justify-content-between align-items-center">
                            <p className="shopping-cart-product__details shopping-cart-product__details_price">{this.props.price}</p>
                            <input type="text" defaultValue={this.props.quantity} onChange={this.changePrice}
                                   className="shopping-cart-product__details shopping-cart-product__details_quantity"/>
                            <p className="shopping-cart-product__details shopping-cart-product__details_shipping">{this.props.shipping}</p>
                            <p className="shopping-cart-product__details shopping-cart-product__details_subtotal">{this.props.subtotal}</p>
                            <i className="fa fa-times-circle shopping-cart-product__details shopping-cart-product__details_action" onClick={this.deleteProductOfShoppingCart}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}