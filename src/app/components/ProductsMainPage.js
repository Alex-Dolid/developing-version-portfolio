import React from "react";
import ProductsList from "./ProductsList";
import {Link} from "react-router-dom";


class Products extends React.Component {

    render() {
        let products = [];

        let productsList = this.props.products.map((product, index) => {
                if (this.props.productsOfShoppingCart.length !== 0) {
                    let productsOfShoppingCart = [];

                    this.props.productsOfShoppingCart.forEach((item) => {
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
                    return (
                        <ProductsList
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            url={product.url}
                            imgPNG={product.imgPNG}
                            imgWEBP={product.imgWEBP}
                            size={product.size}
                            key={index}
                            status={false}
                        />
                    )
                }

            }
        );
        for (let i = 0; i < 8; i++) {
            products.push(productsList[i]);
        }
        return (
            <section className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center p-4">
                            <div className="products-heading">
                                <h2 className="products-heading__title">{this.props.productsHeading.title}</h2>
                                <p className="products-heading__intro">{this.props.productsHeading.intro}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 product d-flex flex-wrap justify-content-around">
                            {products}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 d-flex justify-content-center">
                            <Link to="/man" className="products__button button_animate-home">Browse All Product &nbsp;<i
                                className="fa fa-arrow-right"/></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Products;