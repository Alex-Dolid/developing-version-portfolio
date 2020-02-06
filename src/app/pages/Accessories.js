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

import {Route, Switch, Redirect, Link} from 'react-router-dom';

export default class Accessories extends React.Component {
    componentDidMount() {

        $(".button_animate-products").hover(
            function () {
                $(this).toggleClass("animated pulse ");
            }
        );

        $(".button_animate-products").click(
            function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        );

    }


    render() {

        let sideBarBlock = config.sideBarInfo.map((item, index) => {
            return <SideBar id={item.id} header={item.header} titles={item.titles} key={index} location={this.props.location}/>
        });

        let products= [];
        let productsList = config.products.map((item, index) => {
            return <ProductsList id={item.id} title={item.title} price={item.price} imgPNG={item.imgPNG}
                                 imgWEBP={item.imgWEBP} url={item.url} size={item.size} key={index}/>
        });
        productsList.forEach((item) => {
            return  item.props.url === "/accessories" ? products.push(item) : null
        });

        return (
            <>
                <Switch>
                    <Route exact path="/accessories">
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
                                            <FilterTrending header={config.filterTrendingInfo.header} titles={config.filterTrendingInfo.titles} location={this.props.location}/>
                                            <FilterSize header={config.filterSizeInfo.header} titles={config.filterSizeInfo.titles}/>
                                            <FilterSliderPrice/>
                                            <FilterSort/>
                                        </div>
                                        {products.length !== 0 ? products : <h5>Currently Empty:(</h5>}
                                    </div>
                                    <div className="col-xl-9 ml-auto d-flex justify-content-between align-items-center flex-wrap">
                                        <Pagination location={this.props.location}/>
                                        <Link to="/accessories" className="button button_border button_animate-products">View All</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Banner bannerBoxesInfo={config.bannerBoxesInfo}/>
                    </Route>
                    <Route path="/accessories/:productId" component={Product} />
                    <Redirect from="*" to="/accessories"/>
                </Switch>
            </>
        );
    }
}