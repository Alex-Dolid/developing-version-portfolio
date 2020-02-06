import React from "react";
import {Link} from "react-router-dom";

export default class BreadcrumbsList extends React.Component {
    render() {
        let list;
        if (isNaN(this.props.title)) {
            list = (
                <li className="breadcrumbs__item">
                    <Link to={"/" + this.props.title} className="breadcrumbs__link breadcrumbs__link_currant">{"/ " + this.props.title}</Link>
                </li>

            );
        } else {
            list = (
                <li className="breadcrumbs__item ">{"/ " + this.props.title}</li>
            );
        }
        return list;
    }
}