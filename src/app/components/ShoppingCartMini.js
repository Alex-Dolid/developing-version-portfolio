import React from "react";
import ShoppingCartMiniList from "./ShoppingCartMiniList";
import {Link} from "react-router-dom";

export default class ShoppingCartMini extends React.Component {
    render() {
        let shoppingCartMiniList = this.props.products.map((item, index) => {
            return <ShoppingCartMiniList
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                key={index}

            />
        });
        return (
            <>
                {shoppingCartMiniList.length !== 0  ? shoppingCartMiniList : <h5 className="p-3 text-center">Your bag is empty:(</h5>}
                <div className="shopping-cart-mini-total ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 d-flex justify-content-between pl-4 pr-4">
                                <span className="shopping-cart-mini-total__title">TOTAL</span>
                                <span className="shopping-cart-mini-total__price">{this.props.totalPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shopping-cart-mini-buttons">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 d-flex flex-column justify-content-center align-items-center align-content-center">
                                <Link to="/checkout" className="button button_border button_continue-shopping button_shopping-cart-mini button_animate-header">Checkout</Link>
                                <Link to="/shoppingCart" className="button button_continue-shopping button_shopping-cart-mini button_animate-header">Go to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}