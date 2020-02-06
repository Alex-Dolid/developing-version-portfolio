import React from "react";

import {configObj as config} from "../data/site";
import SliderMainPage from "../components/Slider-main-page";
import Category from "../components/Category";
import Products from "../components/ProductsMainPage";
import Banner from "../components/Banner";
import $ from "jquery";



export default class Home extends React.Component {
    componentDidMount() {
        $(".products__button").click(
            function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        );
    }

    render() {
        return (
            <>
                <SliderMainPage/>
                <Category categories={config.categories}/>
                <Products products={config.products} productsHeading={config.productsHeadingMainPage} productsOfShoppingCart={this.props.productsOfShoppingCart}/>
                <Banner bannerBoxesInfo={config.bannerBoxesInfo}/>
            </>
        );
    }
}