import React from "react";
import {configObj as config} from "../data/site";
import Breadcrumbs from "../components/Breadcrumbs";
import SliderProductPage from "../components/Slider-product-page";
import ProductDescription from "../components/ProductDescription";
import Products from "../components/ProductsProductPage";
import $ from "jquery";

export default class Product extends React.Component {
    componentDidMount() {
        $(".button_animate-product").hover(
            function () {
                $(this).toggleClass("animated pulse ");
            }
        );
    }

    render() {
        let path = this.props.location.pathname.split("/");
        path.splice(0,1);
        let productId = +path[path.length - 1];
        return (
            <>
                <Breadcrumbs location={this.props.location}/>
                <SliderProductPage productId = {productId}/>
                <ProductDescription productId = {productId}/>
                <Products products={config.products} productsHeading={config.productsHeadingProductPage}/>
            </>
        );
    }
}