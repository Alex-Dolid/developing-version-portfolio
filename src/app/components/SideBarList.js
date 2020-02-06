import React from "react";
import {Link} from "react-router-dom";

export default class SideBarList extends React.Component {
    render() {

        return (
            <li className="sidebar-nav__list">
                <Link to={"/" + this.props.url} className="sidebar-nav__link dropdown-item">{this.props.title}</Link>
            </li>
        );
    }
}