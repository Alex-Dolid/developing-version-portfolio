import React from "react";
import {configObj as config} from "../data/site";
import Breadcrumbs from "../components/Breadcrumbs";
import $ from 'jquery'
import SideBar from "../components/SideBar";
import ProductsList from "../components/ProductsList";
import FilterTrending from "../components/FilterTrending";
import FilterSize from "../components/FilterSize";
import FilterSliderPrice from "../components/FilterSliderPrice";
import FilterSort from "../components/FilterSort";
import Pagination from "../components/Pagination";
import Banner from "../components/Banner";
import Product from "./Product";

import {Route, Switch, Redirect} from 'react-router-dom';
export default class Products extends React.Component {
    componentDidMount() {
        $(function () {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 600,
                values: [52, 400],
                slide: function (event, ui) {
                    $("#amount1").val("$" + ui.values[0]);
                    $("#amount2").val("$" + ui.values[1]);

                }
            });
            $("#amount1").val("$" + $("#slider-range").slider("values", 0));
            $("#amount2").val("$" + $("#slider-range").slider("values", 1));
        });

        $(".button_animate-products").hover(
            function () {
                $(this).toggleClass("animated pulse ");
            }
        );

    }


    render() {

        let sideBarBlock = config.sideBarInfo.map((item, index) => {
            return <SideBar id={item.id} header={item.header} titles={item.titles} key={index}/>
        });

        let products= [];
        let productsList = config.products.map((item, index) => {
            return <ProductsList id={item.id} title={item.title} price={item.price} img={item.img} url={item.url} key={index}/>
        });
        for (let i = 12; i < 21; i++) {
            products.push(productsList[i]);
        }
        return (
            <>
                <Switch>
                    <Route exact path="/products">
                        <Breadcrumbs location={this.props.location}/>
                        <section className="products">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-3">
                                        <aside className="sidebar accordion" id="accordionExample">
                                            {sideBarBlock}
                                        </aside>
                                    </div>
                                    <div className="col-xl-9 product d-flex flex-wrap justify-content-around">
                                        <div className="top-filter d-flex w-100 justify-content-around flex-wrap mb-5  ">
                                            <FilterTrending header={config.filterTrendingInfo.header} titles={config.filterTrendingInfo.titles}/>
                                            <FilterSize header={config.filterSizeInfo.header} titles={config.filterSizeInfo.titles}/>
                                            <FilterSliderPrice/>
                                            <FilterSort/>
                                        </div>
                                        {products}
                                    </div>
                                    <div className="col-xl-9 ml-auto d-flex justify-content-between align-items-center flex-wrap">
                                        <Pagination/>
                                        <a href="/" className="button button_border button_animate-products">View All</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Banner bannerBoxesInfo={config.bannerBoxesInfo}/>
                    </Route>
                    <Route path="/products/:productId" component={Product} />
                    <Redirect from="*" to="/products"/>
                </Switch>
            </>
        );
    }
}