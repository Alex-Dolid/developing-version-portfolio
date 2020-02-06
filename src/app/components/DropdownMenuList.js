import React from "react";
import {Link} from "react-router-dom";

export default class DropdownMenuList extends React.Component {
    render() {
        return (
            <Link className="dropdown-item" to={this.props.url}>{this.props.title}</Link>
        );
    }
}