import React from "react";
import {configObj as config} from "../data/site";
import CheckoutFields from "../components/CheckoutFields";
import Breadcrumbs from "../components/Breadcrumbs";
import $ from "jquery";


export default class Checkout extends React.Component {
    componentDidMount() {
        $( ".checkout-field__header" ).click(
            function (event) {
                if($( event.target).hasClass("checkout-field__header_active")) {

                    $( event.target).removeClass("checkout-field__header_active");
                    $( event.target).parents(".checkout-field ").children().last().addClass("checkout-field__content_active collapse");
                } else {
                    $(".checkout-field__header").removeClass("checkout-field__header_active");
                    $( event.target).addClass("checkout-field__header_active");
                    $( event.target).parents(".checkout-field ").children().last().removeClass("checkout-field__content_active collapse");
                }
            }
        );

        $(".button_animate-checkout").hover(
            function () {
                $(this).toggleClass("animated pulse ");
            }
        );

    }

    render() {
        return (
            <>
                <Breadcrumbs location={this.props.location}/>
                <CheckoutFields checkoutFieldsInfo={config.checkoutFields}/>
            </>
        );
    }
}