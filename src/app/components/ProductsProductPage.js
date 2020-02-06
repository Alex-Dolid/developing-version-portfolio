import React from "react";
import ProductsList from "./ProductsList";
import ProductsOfShoppingCartStore from "../stores/productsOfShoppingCartStore";
import {fetchProducts} from "../actions/productsOfShoppingCartActions";

export default class Products extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            productsOfShoppingCart: [],
            statusBadgeShoppingCart: null,
            totalPrice: 0
        };

        this.onProductOfShoppingCartChange = this.onProductOfShoppingCartChange.bind(this);

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
        fetchProducts();
    }

    componentWillUnmount() {
        ProductsOfShoppingCartStore.removeListener('change', this.onProductOfShoppingCartChange);
    }

    render() {
        let products= [];
        let productsList = this.props.products.map((product, index) => {
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
        for (let i = 8; i < 12; i++) {
            products.push(productsList[i]);
        }

        return (
            <section className="products mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center pb-5">
                            <div className="products-heading">
                                <h2 className="products-heading__title">{this.props.productsHeading.title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 product d-flex flex-wrap justify-content-between">
                            {products}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}