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
import ProductsOfShoppingCartStore from "../stores/productsOfShoppingCartStore";
import {fetchProducts} from "../actions/productsOfShoppingCartActions";


export default class Man extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            productsOfShoppingCart: [],
            statusBadgeShoppingCart: null,
            totalPrice: 0,
            filterSliderPriceValue: [],
            filterSliderSizeValues: [],
            statusFilterSliderSize: false
        };

        this.onProductOfShoppingCartChange = this.onProductOfShoppingCartChange.bind(this);
        this.onFilterSliderPriceValueChange = this.onFilterSliderPriceValueChange.bind(this);
        this.onMouseDownFilterSliderPrice = this.onMouseDownFilterSliderPrice.bind(this);
        this.onMouseUpFilterSliderPrice = this.onMouseUpFilterSliderPrice.bind(this);
        this.onFilterSliderSizeValuesChange = this.onFilterSliderSizeValuesChange.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
    }

    clearFilters() {
        $(function () {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 600,
                values: [52, 500],
                slide: function (event, ui) {
                    $("#amount1").val("$" + ui.values[0]);
                    $("#amount2").val("$" + ui.values[1]);
                }
            });
            $("#amount1").val("$" + $("#slider-range").slider("values", 0));
            $("#amount2").val("$" + $("#slider-range").slider("values", 1));

        });

        document.querySelectorAll(".checkbox-size").forEach((item) => {
            item.checked = false;
        });

        this.setState({
            filterSliderPriceValue: [],
            filterSliderSizeValues: []
        })
    }

    onMouseUpFilterSliderPrice() {
        this.onFilterSliderPriceValueChange();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    onMouseDownFilterSliderPrice() {
        this.onFilterSliderPriceValueChange();
    }

    onFilterSliderPriceValueChange() {
        this.setState({
            filterSliderPriceValue: [$("#amount1").val(), $("#amount2").val()]
        });

    }

    onFilterSliderSizeValuesChange() {
        let filterSliderSizeValues = [];
        document.querySelectorAll(".checkbox-size").forEach((item) => {
            if(item.checked) {
                filterSliderSizeValues.push(item.title);
            }
        });

        if(filterSliderSizeValues.length !== 0) {

            if(this.state.filterSliderSizeValues.length === 0) {
                filterSliderSizeValues.forEach((item) => {
                    this.state.filterSliderSizeValues.push(item);
                });
            } else {

                filterSliderSizeValues.forEach((sizeExample) => {
                    if(!this.state.filterSliderSizeValues.find(size => size === sizeExample)) {
                        this.state.filterSliderSizeValues.push(sizeExample);
                    }
                });
            }


        } else {

            if(this.state.filterSliderSizeValues.length !== 0) {
                this.setState({
                    filterSliderSizeValues: []
                });
            }

        }

        if(filterSliderSizeValues.length !== this.state.filterSliderSizeValues.length) {
            this.state.filterSliderSizeValues.forEach((size, index) => {
                if(!filterSliderSizeValues.find(sizeExample => sizeExample === size)) {
                    this.state.filterSliderSizeValues.splice(index, 1);
                }
            });
        }

        this.setState({
            statusFilterSliderSize: true
        });
    }

    onProductOfShoppingCartChange([productsOfShoppingCart, statusBadgeShoppingCart, totalPrice]) {
        this.setState({
            productsOfShoppingCart,
            statusBadgeShoppingCart,
            totalPrice
        });
    }

    componentWillMount() {
        ProductsOfShoppingCartStore.on('change', this.onProductOfShoppingCartChange);
    }

    componentDidMount() {

        $(".button_animate-products").hover(
            function () {
                $(this).toggleClass("animated pulse ");
            }
        );

        fetchProducts();

        $(".button_animate-products").click(
            function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        );

    }

    componentWillUnmount() {
        ProductsOfShoppingCartStore.removeListener('change', this.onProductOfShoppingCartChange);
    }

    render() {

        let sideBarBlock = config.sideBarInfo.map((item, index) => {
            return <SideBar id={item.id} header={item.header} titles={item.titles} key={index} location={this.props.location}/>
        });

        let products= [];
        let productsList = config.products.map((product, index) => {
            if (this.state.productsOfShoppingCart.length !== 0) {
                let productsOfShoppingCart = [];

                this.state.productsOfShoppingCart.forEach((item) => {
                    if (product.imgPNG === item.img || product.imgWEBP === item.img) {
                        productsOfShoppingCart.push(<ProductsList
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            url={product.url}
                            imgPNG={product.imgPNG}
                            imgWEBP={product.imgWEBP}
                            size={product.size}
                            key={index}
                            status={true}
                        />);
                    }
                });
                if(productsOfShoppingCart.length === 0 ) {
                    productsOfShoppingCart.push(<ProductsList
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        url={product.url}
                        imgPNG={product.imgPNG}
                        imgWEBP={product.imgWEBP}
                        size={product.size}
                        key={index}
                        status={false}
                    />);
                }



                return productsOfShoppingCart;
            } else {
                return (<ProductsList
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    imgPNG={product.imgPNG}
                    imgWEBP={product.imgWEBP}
                    url={product.url}
                    size={product.size}
                    key={index}
                    status={false}
                />)

            }

        });

        productsList.forEach((item, index) => {
            if(Array.isArray(item)) {

                if(this.state.filterSliderPriceValue.length === 0 && this.state.filterSliderSizeValues.length === 0) {
                    return  item[0].props.url === "/man" ? products.push(item) : null
                } else if(this.state.filterSliderPriceValue.length !== 0 && this.state.filterSliderSizeValues.length !== 0) {

                    if(this.state.filterSliderSizeValues.length === 1) {
                        return  (item[0].props.url === "/man") && (+item[0].props.price.slice(1) >= +this.state.filterSliderPriceValue[0].slice(1) && +item[0].props.price.slice(1) <= +this.state.filterSliderPriceValue[1].slice(1)) && (this.state.filterSliderSizeValues[0] === item[0].props.size) ? products.push(item) : null
                    } else {
                        return  (item[0].props.url === "/man") && (+item[0].props.price.slice(1) >= +this.state.filterSliderPriceValue[0].slice(1) && +item[0].props.price.slice(1) <= +this.state.filterSliderPriceValue[1].slice(1)) && (this.state.filterSliderSizeValues.find(size => size === item[0].props.size)) ? products.push(item) : null
                    }

                } else if(this.state.filterSliderPriceValue.length !== 0 && this.state.filterSliderSizeValues.length === 0) {
                    return  (item[0].props.url === "/man") && (+item[0].props.price.slice(1) >= +this.state.filterSliderPriceValue[0].slice(1) && +item[0].props.price.slice(1) <= +this.state.filterSliderPriceValue[1].slice(1)) ? products.push(item) : null
                } else if(this.state.filterSliderPriceValue.length === 0 && this.state.filterSliderSizeValues.length !== 0) {

                    if(this.state.filterSliderSizeValues.length === 1) {
                        return (item[0].props.url === "/man") && (this.state.filterSliderSizeValues[0] === item[0].props.size) ? products.push(item) : null
                    } else {
                        return (item[0].props.url === "/man") && (this.state.filterSliderSizeValues.find(size => size === item[0].props.size)) ? products.push(item) : null
                    }

                }

            } else {
                if(this.state.filterSliderPriceValue.length === 0 && this.state.filterSliderSizeValues.length === 0) {
                    return  item.props.url === "/man" ? products.push(item) : null
                } else if(this.state.filterSliderPriceValue.length !== 0 && this.state.filterSliderSizeValues.length !== 0) {

                    if(this.state.filterSliderSizeValues.length === 1) {
                        return  (item.props.url === "/man") && (+item.props.price.slice(1) >= +this.state.filterSliderPriceValue[0].slice(1) && +item.props.price.slice(1) <= +this.state.filterSliderPriceValue[1].slice(1)) && (this.state.filterSliderSizeValues[0] === item.props.size) ? products.push(item) : null
                    } else {
                        return  (item.props.url === "/man") && (+item.props.price.slice(1) >= +this.state.filterSliderPriceValue[0].slice(1) && +item.props.price.slice(1) <= +this.state.filterSliderPriceValue[1].slice(1)) && (this.state.filterSliderSizeValues.find(size => size === item.props.size)) ? products.push(item) : null
                    }

                } else if(this.state.filterSliderPriceValue.length !== 0 && this.state.filterSliderSizeValues.length === 0) {
                    return  (item.props.url === "/man") && (+item.props.price.slice(1) >= +this.state.filterSliderPriceValue[0].slice(1) && +item.props.price.slice(1) <= +this.state.filterSliderPriceValue[1].slice(1)) ? products.push(item) : null
                } else if(this.state.filterSliderPriceValue.length === 0 && this.state.filterSliderSizeValues.length !== 0) {

                    if(this.state.filterSliderSizeValues.length === 1) {
                        return (item.props.url === "/man") && (this.state.filterSliderSizeValues[0] === item.props.size) ? products.push(item) : null
                    } else {
                        return (item.props.url === "/man") && (this.state.filterSliderSizeValues.find(size => size === item.props.size)) ? products.push(item) : null
                    }

                }
            }

        });

        return (
            <>
                <Switch>
                    <Route exact path="/man">
                        <Breadcrumbs location={this.props.location} />
                        <section className="products" >
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
                                            <FilterSize header={config.filterSizeInfo.header} titles={config.filterSizeInfo.titles} onFilterSliderSizeValuesChange={this.onFilterSliderSizeValuesChange}/>
                                            <FilterSliderPrice onMouseDownilterSliderPrice={this.onMouseDownilterSliderPrice} onMouseUpFilterSliderPrice={this.onMouseUpFilterSliderPrice}/>
                                            <FilterSort/>
                                        </div>
                                        {products}
                                    </div>
                                    <div className="col-xl-9 ml-auto d-flex justify-content-between align-items-center flex-wrap">
                                        <Pagination location={this.props.location}/>
                                        <Link to="/man" className="button button_border button_animate-products" onClick={this.clearFilters}>View All</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Banner bannerBoxesInfo={config.bannerBoxesInfo}/>
                    </Route>
                    <Route path="/man/:productId" component={Product} />
                    <Redirect from="*" to="/man"/>
                </Switch>
            </>
        );
    }
}