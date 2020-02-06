import React from "react";
import {Link} from "react-router-dom";
import $ from "jquery";

export default class BlockTotalPayment extends React.Component {
    componentDidMount() {
        $(".button_proceed-to-checkout").click(
            function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        );
    }
    render() {
        return (
            <div className="block-total-payment ">
                <div className="wrapper-total-payment d-flex flex-column justify-content-start align-items-end">
                    <p className="block-total-payment__sub-total">Sub total
                        <span className="block-total-payment__sub-total_price">{this.props.price}</span>
                    </p>
                    <p className="block-total-payment__grand-total">GRAND TOTAL
                        <span className="block-total-payment__grand-total_price">{this.props.price}</span>
                    </p>
                </div>
                <Link to="/checkout" className="button button_proceed-to-checkout button_animate-shopping-cart">proceed to checkout</Link>
            </div>
        );
    }
}