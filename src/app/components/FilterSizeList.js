import React from "react";

export default class FilterSizeList extends React.Component {
    render() {
        let id = `size-${this.props.id}`;
        return (
            <>
                <div className="w-25">
                    <input type="checkbox" id={id} onClick={this.props.onFilterSliderSizeValuesChange} title={this.props.title} className="checkbox-size"/>
                    <label htmlFor={id} className="top-filter-block__item block-size__item" onClick={this.props.onFilterSliderSizeValuesChange} title={this.props.title}>{this.props.title}</label>
                </div>
            </>
        );
    }
}