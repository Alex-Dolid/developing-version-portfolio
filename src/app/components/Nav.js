import React from "react";
import {NavLink} from "react-router-dom";
import DropdownMenuNav from "./DropdownMenuNav";

import img from '../img/Promo_Ad.webp'

export default class Nav extends React.Component {
    render() {
        let dropdownMenuNavBlock;
        if(this.props.dropdownMenuNav) {
            dropdownMenuNavBlock = this.props.dropdownMenuNav.map((item, index) => {
                return <DropdownMenuNav
                    id={item.id}
                    header={item.header}
                    titles={item.titles}
                    key={index}
                    url={this.props.url}
                />
            });
        }
        return (
            <li className="nav__item nav__item_header dropdown">
                <NavLink to={this.props.url} className="nav__link" exact activeClassName="nav__link_active">
                    {this.props.title}
                </NavLink>
                {dropdownMenuNavBlock ? <div className="dropdown-menu dropdown-menu-nav" aria-labelledby="dropdownMenuLink">
                    {dropdownMenuNavBlock}
                    <img src={img} alt="menu-sales" className="dropdown-img float-left"/>
                </div> : null}
            </li>
        );
    }
}
