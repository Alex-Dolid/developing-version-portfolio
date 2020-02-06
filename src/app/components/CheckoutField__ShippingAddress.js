import React from "react";

export default class CheckoutFieldShippingAddress extends React.Component {
    render() {
        return (
            <>
                <div className="col-md-6 col-xl-6">
                    <div className="shipping-address-wrapper">
                        <h4 className="shipping-address__title-check">Check as a guest or register</h4>
                        <p className="shipping-address__text-check">Register with us for future
                            convenience</p>
                        <div className="check-radio">
                            <input type="radio" name="check-radio" id="check-radio-checkout-as-guest"
                                   className="shipping-address__input-radio"/>
                            <label htmlFor="check-radio-checkout-as-guest"
                                   className="shipping-address__label-radio">checkout as
                                guest</label>
                        </div>
                        <div className="check-radio">
                            <input type="radio" name="check-radio" defaultChecked
                                   id="check-radio-checkout-as-register"
                                   className="shipping-address__input-radio"/>
                            <label htmlFor="check-radio-checkout-as-register"
                                   className="shipping-address__label-radio shipping-address__label-radio_last">
                                register</label>
                        </div>
                    </div>
                    <div className="shipping-address-wrapper">
                        <h4 className="shipping-address__title-check">register and save time!</h4>
                        <p className="shipping-address__text-check">Register with us for future
                            convenience</p>
                        <a href="/" className="shipping-address__link"><i
                            className="fa fa-chevron-right"
                            aria-hidden="true"/><i
                            className="fa fa-chevron-right ml-n1" aria-hidden="true"/> Fast and easy
                            checkout</a>
                        <a href="/" className="shipping-address__link"><i
                            className="fa fa-chevron-right"
                            aria-hidden="true"/><i
                            className="fa fa-chevron-right ml-n1" aria-hidden="true"/> Easy access to
                            your order
                            history and
                            status</a>
                        <a href="/" className="button button_checkout button_animate-checkout" data-toggle="modal" data-target="#exampleModalCenter">Continue</a>
                    </div>
                </div>
                <div className="col-md-6 col-xl-6">
                    <div className="shipping-address__form">
                        <h4 className="shipping-address__title-check">Already registered?</h4>
                        <p className="shipping-address__text-check">Please log in below</p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"
                                       className="shipping-address__label-form">Email
                                    address<em className="form-require-mark">*</em></label>
                                <input type="email" className="form-control shadow-none"
                                       id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"
                                       className="shipping-address__label-form">Password
                                    <em className="form-require-mark">*</em></label>
                                <input type="password" className="form-control shadow-none"
                                       id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>
                            <small id="emailHelp" className="form-text form-require-text"><em
                                className="form-require-mark">*</em> Required Fields</small>
                            <div className="d-flex">
                                <button type="submit" className="button button_checkout button-log-in mt-3 button_animate-checkout">Log in</button>
                                <a href="/" className="info-forgot-password">Forgot <wbr/>Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}