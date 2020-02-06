import React from "react";
import CheckoutField from "./CheckoutField";

export default class CheckoutFields extends React.Component{
    render() {
        let checkoutField = this.props.checkoutFieldsInfo.map((item, index) => {
            return <CheckoutField id={item.id} title={item.title} key={index} />
        });
        return (
            <section className="checkout-fields accordion" id="accordionExample">
                {checkoutField}
            </section>
        );
    }
}