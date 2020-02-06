import React from "react";

export default class FormShippingAddress extends React.Component {
    render() {
        return (
            <form className="shipping-address">
                <h4 className="shipping-address__head">Shipping Address</h4>
                <select name="shipping-address-select"
                        id="shipping-address-input-select"
                        className="shipping-address__input shipping-address__input_select">
                    <option value="1">Bangladesh</option>
                    <option value="2">Ukraine</option>
                    <option value="3">USA</option>
                    <option value="4">Germany</option>
                </select>
                <input type="text" className="shipping-address__input"
                       placeholder="State"/><input type="text"
                                                   className="shipping-address__input"
                                                   placeholder="Postcode / Zip"/>
                <button className="button button_shipping-address">get a quote</button>
            </form>
        );
    }
}