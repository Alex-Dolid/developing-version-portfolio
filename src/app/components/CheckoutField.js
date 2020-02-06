import React from "react";
import CheckoutFieldShippingAddress from "./CheckoutField__ShippingAddress";

export default class CheckoutField extends React.Component {
    render() {
        let idAccordion = `collapse${this.props.id}`;
        let dataTargetAccordion = `#collapse${this.props.id}`;
        let headingAccordion = `heading${this.props.id}`;
        let checkoutField;
        if(this.props.id === 1) {
            checkoutField = <CheckoutFieldShippingAddress />;

        } else {
            checkoutField = (
                <>
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
                    <div className="col-md-6 col-xl-6"/>
                </>
            );
        }

        let classFirstField = "checkout-field__header checkout-field__header_active checkout-field__header_first ";
        let classOtherFields = "checkout-field__header ";

        let classFieldContentActive = "checkout-field__content checkout-field__content_active collapse show";
        let classFieldContentOther = "checkout-field__content collapse";

        return (
            <div className="checkout-field ">
                <div className="container " id={headingAccordion}>
                    <div className="row">
                        <div className="col-xl-12">
                            <h3 className={this.props.id === 1 ? classFirstField : classOtherFields} data-toggle="collapse" data-target={dataTargetAccordion} aria-expanded="true" aria-controls={idAccordion}>{this.props.title}</h3>
                        </div>
                    </div>
                </div>
                <div className={this.props.id === 1 ? classFieldContentActive : classFieldContentOther} id={idAccordion} aria-labelledby={headingAccordion} data-parent="#accordionExample">
                    <div className="container">
                        <div className="row">
                           {checkoutField}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}