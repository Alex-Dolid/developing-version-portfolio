import React from "react";
import $ from "jquery";
import {Link} from "react-router-dom";

export default class FooterList extends React.Component {
    componentDidMount() {
        $(".nav__item_footer").click(
            function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        );
    }
    render() {
        return (
            <li className="nav__item"><Link to={this.props.url} className="nav__item_footer">{this.props.title}</Link></li>
        );
    }
}