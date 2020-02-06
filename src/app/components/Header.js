import React from "react";
import Nav from "./Nav";


import shoppingCartImg from "../img/shopping_cart.png";
import Logo from "./Logo";
import DropdownMenuHeaderSearch from "./DropdownMenuHeaderSearch";
import ShoppingCartMini from "./ShoppingCartMini";

export default class Header extends React.Component {
    render() {
        let navList = this.props.nav.map((list, index) => {
            return <Nav
                title={list.title}
                url={list.url}
                dropdownMenuNav={list.dropdownMenuNavInfo}
                key={index}
            />
        });

        let dropdownMenuHeaderSearchBlock = this.props.dropdownMenuHeaderSearchInfo.map((item, index) => {
            return <DropdownMenuHeaderSearch
                id={item.id}
                header={item.header}
                titles={item.titles}
                url={item.url}
                key={index}
            />
        });
        return (
            <header className="header" >
                <div className="header-heading">
                    <div className="container">
                        <div className="row d-flex align-items-center flex-wrap">
                            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                <Logo/>
                            </div>
                            <div className="col-sm-5 col-md-6 col-lg-5 col-xl-5">
                                <div className="header-search d-flex">
                                    <div className="input-group-prepend">
                                        <button className="header-search__button-select" type="button" id="dropdownMenuButtonHeaderSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Browse
                                            &nbsp;<i className="fa fa-caret-down"/></button>
                                        <div className="dropdown-menu dropdown-menu-header-search" aria-labelledby="dropdownMenuButtonHeaderSearch">
                                            {dropdownMenuHeaderSearchBlock}
                                        </div>
                                    </div>
                                    <input type="search"
                                           className="header-search__input-search" placeholder="Search for Item..." aria-label="Search for Item..."/>
                                    <div className="input-group-append">
                                        <button className="header-search__button-search" aria-label="search-product"><i
                                            className="fa fa-search "/></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 ml-auto">
                                <div className="header-shopping-cart">
                                    <a href="/" className="shopping-cart" role="button" id="dropdownMenuLinkShoppingCart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className={this.props.statusBadgeShoppingCart === "active" ? "badge" +
                                            " badge-pill badge-danger badge-shopping-cart animated pulse infinite" +
                                            " slow" : "d-none"}>{this.props.productsOfShoppingCart? this.props.productsOfShoppingCart.length: null}</span>
                                        <img src={shoppingCartImg}
                                        alt="shopping-cart"/></a>
                                    <div className="dropdown-menu dropdown-menu-shopping-cart" aria-labelledby="dropdownMenuLinkShoppingCart">
                                        <ShoppingCartMini products={this.props.productsOfShoppingCart} totalPrice={this.props.totalPrice}/>
                                    </div>
                                    <div className="btn-group">
                                        <button className="button-my-account button_animate-header" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Account &nbsp;<i
                                            className="fa fa-caret-down" /></button>
                                        <div className="dropdown-menu">
                                            <form className="px-4 py-3">
                                                <div className="form-group">
                                                    <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                                                    <input type="email" className="form-control"
                                                           id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleDropdownFormPassword1">Password</label>
                                                    <input type="password" className="form-control"
                                                           id="exampleDropdownFormPassword1" placeholder="Password"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input"
                                                               id="dropdownCheck"/>
                                                        <label className="form-check-label" htmlFor="dropdownCheck">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                                <input type="submit" className="button_add-to-cart button_sign-in button_animate-header" value="Sign in"/>
                                            </form>
                                            <div className="dropdown-divider"/>
                                            <a className="dropdown-item" href="/"  data-toggle="modal" data-target="#exampleModalCenter">New around here? Sign up</a>
                                            <a className="dropdown-item" href="/">Forgot password?</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="nav align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-xl-12 d-flex justify-content-center">
                                <ul className="d-flex nav__ul flex-wrap justify-content-around">
                                    {navList}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}