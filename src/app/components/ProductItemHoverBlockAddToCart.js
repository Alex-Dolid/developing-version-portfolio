import React from "react";
import addToCartImg_whiteShoppingCart from "../img/add-to-cart_white-shopping-cart.png";
import {CSSTransition} from "react-transition-group";
import "../styles/css/ProductItemHoverBlock.css"


export const ProductItemHoverBlockAddToCart = ({
                           size = 263,
                           className = "",
                           color = "white",
                           animation = false,
                           newProductOfShoppingCart,
                           onClickProductItemHoverBlock
                       }) => {
    const anim = animation
        ? {
            delay: 1000,
            in: true,
            classNames: "ProductItemHoverBlock",
            timeout: { exit: 0 },
            ...animation
        }
        : false;

    const style = { background: color, width: size, height: "290px" };
    if (anim) style["--delay"] = `${anim.delay}ms`;

    className = `ProductItemHoverBlock ${className}`;

    const circle =  (<div className={className} style={style} onClick={onClickProductItemHoverBlock}>
        <button className="button button_product-item-hover-link" onClick={newProductOfShoppingCart}><img
            src={addToCartImg_whiteShoppingCart} alt="add-to-cart"/> Add to Cart</button>
    </div>);

    return anim ? (
        <CSSTransition
            classNames={anim.classNames}
            in={anim.in}
            timeout={anim.timeout}
            unmountOnExit
        >
            {circle}
        </CSSTransition>
    ) : (
        circle
    );
};
