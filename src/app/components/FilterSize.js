import React from "react";
import FilterSizeList from "./FilterSizeList";

export default class FilterSize extends React.Component {
    render() {
        let filterList = this.props.titles.map((item, index) => {
            return <FilterSizeList id={index} title={item} key={index} onFilterSliderSizeValuesChange={this.props.onFilterSliderSizeValuesChange}/>
        });
        return (
            <div className="size">
                <div className="top-filter-block block-size">
                    <p className="top-filter-block__head">{this.props.header}</p>
                    <div className="d-flex justify-content-start flex-wrap">
                        {filterList}
                    </div>
                </div>
            </div>
        );
    }
}