import React from "react";
import $ from 'jquery';
import {ProductItemHoverBlockAddToCart} from "./ProductItemHoverBlockAddToCart";
import {ProductItemHoverBlockAdded} from "./ProductItemHoverBlockAdded";
import {TransitionGroup} from "react-transition-group";
import {addProduct} from "../actions/productsOfShoppingCartActions";
import {Link} from "react-router-dom";

import "../styles/css/ProductItemWrapper.css"

export default class ProductsList extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hover: false
        };
        this.newProductOfShoppingCart = this.newProductOfShoppingCart.bind(this);
        this.onClickProductItemHoverBlock = this.onClickProductItemHoverBlock.bind(this);
    }

    newProductOfShoppingCart(event) {
        event.preventDefault();
        const id = +$(event.target).parents(".product-item-wrapper").children(".product__item").attr("id");
        let img;
        if(document.documentElement.classList.contains("webp")) {
            img = $(event.target).parents(".product-item-wrapper").children(".product__item").children(".product-img-wrapper").children("picture").children(".product__img_WEBP").attr("srcset");
        } else {
            img = $(event.target).parents(".product-item-wrapper").children(".product__item").children(".product-img-wrapper").children("picture").children(".product__img").attr("src");
        }
        const title = $(event.target).parents(".product-item-wrapper").children(".product__item").children(".product__title").text();
        const price = $(event.target).parents(".product-item-wrapper").children(".product__item").children(".product__price").text();
        const quantity = 1;
        const shipping = "FREE";
        const color = "Black";
        const size = $(event.target).parents(".product-item-wrapper").attr("data-size");
        addProduct({id, title, price, img, quantity, shipping, color, size});
    }
    onClickProductItemHoverBlock(event) {
        if(event.target === event.currentTarget) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
    componentDidMount() {

        $(".product__item").click(
            function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
            }
        );
    }

    render() {
        let url = `${this.props.url}/${this.props.id}`;
        const {hover} = this.state;

        let productItemHoverBlock;
        if (this.props.status) {
            productItemHoverBlock = (<TransitionGroup>
                <ProductItemHoverBlockAdded
                    animation={{in: hover}}
                    color="black"
                    newProductOfShoppingCart={this.newProductOfShoppingCart}
                    onClickProductItemHoverBlock={this.onClickProductItemHoverBlock}
                />
            </TransitionGroup>);
        } else {
            productItemHoverBlock = (<TransitionGroup>
                <ProductItemHoverBlockAddToCart
                    animation={{in: hover}}
                    color="black"
                    newProductOfShoppingCart={this.newProductOfShoppingCart}
                    onClickProductItemHoverBlock={this.onClickProductItemHoverBlock}
                />
            </TransitionGroup>);
        }

        return (
            <Link to={url} className="product-item-wrapper ProductItemWrapper" data-size={this.props.size}
                  onMouseEnter={_ => this.setState({hover: true})}
                  onMouseLeave={_ => this.setState({hover: false})}>
                <div className="product__item" id={this.props.id}>
                    <div className="product-img-wrapper">
                        <picture>
                            <source srcSet={this.props.imgWEBP} type="image/webp" className="product__img_WEBP"/>
                            <img src={this.props.imgPNG} alt="product-item" className="product__img"/>
                        </picture>
                    </div>
                    <div className="product__title">{this.props.title}</div>
                    <div className="product__price">{this.props.price}</div>
                </div>
                {productItemHoverBlock}
            </Link>
        );
    }
}