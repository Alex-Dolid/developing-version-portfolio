import React from "react";
import FilterTrendingList from "./FilterTrendingList";

export default class FilterTrending extends React.Component {
    componentDidMount() {
        document.querySelectorAll(".block-trending-now__item").forEach((item, index) => {
            if(index === 2 ) {
                item.after(document.createElement('wbr'));
            }
        })
    }

    render() {
        let filterTrendingList = this.props.titles.map((item, index) => {
            return <FilterTrendingList title={item} key={index} location={this.props.location}/>;
        });
        return (
            <div className="block-trending-now">
                <div className="top-filter-block ">
                    <p className="top-filter-block__head">{this.props.header}</p>
                    {filterTrendingList}
                </div>
            </div>
        );
    }
}