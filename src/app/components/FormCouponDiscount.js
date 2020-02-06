import React from "react";

export default class FormCouponDiscount extends React.Component {
    render() {
        return (
            <form className="coupon-discount">
                <h4 className="coupon-discount__head">coupon discount</h4>
                <p className="coupon-discount__summary">Enter your coupon code if you have
                    one</p>
                <input type="text" className="coupon-discount__input" placeholder="State"/>
                <button className="button button_coupon-discount">Apply coupon</button>
            </form>
        );
    }
}