import React from "react";
import $ from "jquery";
import {Link} from "react-router-dom";

export default class FilterTrendingList extends React.Component {
    componentDidMount() {
        $(".top-filter-block__item").click(
            function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        );
    }

    render() {
        return  <Link to={this.props.location.pathname} className="top-filter-block__item block-trending-now__item">{this.props.title}</Link>
    }
}