import React from "react";
import {configObj as config} from "../data/site";

export default class SliderProductPage extends React.Component {
    render() {
        let product;
        if(this.props.productId) {
            product = config.products.find(item => {
                return item.id === this.props.productId
            });
        }

        return (
            <section className="product-img-slide">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-10 col-lg-8 col-xl-7 m-auto">
                            <picture>
                                <source srcSet={product.imgWEBP} type="image/webp"  className="product-img-slide__img product__img" />
                                <img src={product.imgPNG} alt="product-img1" className="product-img-slide__img product__img"/>
                            </picture>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}