import {CSSTransition} from "react-transition-group";
import React from "react";

export const ProductItemHoverBlockAdded = ({
                                                   size = 263,
                                                   className = "",
                                                   color = "white",
                                                   animation = false,
                                                   newProductOfShoppingCart,
                                                   onClickProductItemHoverBlock,
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
        <button className="button button_product-item-hover-link" onClick={onClickProductItemHoverBlock}>Added</button>
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